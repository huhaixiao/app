import { ReactNode, useRef, useLayoutEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag, useWheel } from '@use-gesture/react';
import type { FullGestureState } from '@use-gesture/core/src/types/state';
import { clamp } from 'lodash';
import styled from 'styled-components';
import classname from 'classnames';
import { rubberbandIfOutOfBounds } from './utils';
import type { PickerColumnItem, PickerValue } from './types';

export type WheelViewProps = {
  index: number;
  column: PickerColumnItem[];
  value: PickerValue;
  itemHeight?: number;
  onSelect: (value: PickerValue) => void;
  renderLabel: (item: PickerColumnItem) => ReactNode;
};

const classPrefix = `cx-picker-view`;

const Container = styled.div<{ itemHeight: number }>`
  --item-height: ${props => props.itemHeight}px;

  touch-action: none;
  user-select: none;

  position: relative;
  width: 100%; // flex: 1;
  height: 100%;

  .${classPrefix}-wheel {
    width: 100%;
    cursor: grab;
    position: absolute;
    top: calc(50% - var(--item-height) / 2);
    left: 0;
  }
  .${classPrefix}-item {
    font-size: 14px; // CX Font Size
    line-height: 20px;
    color: #171a20; // TDS Color
    height: var(--item-height);

    display: flex;
    justify-content: center;
    align-items: center;

    &.selected {
      color: #171a20;
      font-weight: 500;
    }

    &-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const Item = styled.div<{ itemHeight: number }>`
  font-size: 14px; // CX Font Size
  line-height: 20px;
  color: #171a20; // TDS Color
  height: var(${props => props.itemHeight});

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Wheel = ({
  column,
  value,
  renderLabel,
  onSelect,
  itemHeight = 28
}: WheelViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const [{ y }, springApi] = useSpring(() => ({
    from: { y: 0 }
  }));
  const scrollSelect = (columnIndex: number, immediate: boolean = false) => {
    const finalPosition = -(columnIndex * itemHeight);
    springApi.start({ y: finalPosition, immediate });
    const item = column[columnIndex];
    if (!item) return;
    if (value !== item.value) {
      onSelect(item.value);
    }
  };
  const handleDrag = (
    state: Pick<
      FullGestureState<'drag'>,
      'last' | 'offset' | 'velocity' | 'direction'
    >
  ) => {
    isDraggingRef.current = true;
    const min = -((column.length - 1) * itemHeight);
    const max = 0;
    if (state.last) {
      isDraggingRef.current = false;
      const position =
        state.offset[1] + state.velocity[1] * state.direction[1] * 50;
      const targetIndex =
        min < max ? -Math.round(clamp(position, min, max) / itemHeight) : 0;
      scrollSelect(targetIndex);
    } else {
      const position = state.offset[1];
      springApi.start({
        y: rubberbandIfOutOfBounds(position, min, max, 0.15)
      });
    }
  };

  useLayoutEffect(() => {
    if (isDraggingRef.current) return;
    if (value) {
      const targetIndex = column.findIndex(item => item.value === value);
      if (targetIndex !== -1) {
        scrollSelect(targetIndex, true);
      } else {
        scrollSelect(column.length - 1, true);
      }
    } else {
      scrollSelect(0, true);
    }
  }, [value, column]);

  useDrag(
    state => {
      state.event.stopPropagation();
      handleDrag(state);
    },
    {
      axis: 'y',
      from: () => [0, y.get()],
      filterTaps: true,
      pointer: { touch: true },
      target: containerRef
    }
  );

  useWheel(
    state => {
      state.event.stopPropagation();
      handleDrag(state);
    },
    {
      axis: 'y',
      from: () => [0, y.get()],
      target: containerRef,
      preventDefault: true,
      // 防止<body> 滚动
      eventOptions: { passive: false }
    }
  );

  return (
    <Container ref={containerRef} itemHeight={itemHeight}>
      <animated.div
        style={{ translateY: y }}
        className={`${classPrefix}-wheel`}>
        {column.map((item, columnIndex) => {
          const handleClick = () => {
            isDraggingRef.current = false;
            scrollSelect(columnIndex);
          };
          return (
            <Item
              itemHeight={itemHeight}
              key={item.value}
              className={classname(`${classPrefix}-item`, {
                selected: item.value === value
              })}
              onClick={handleClick}>
              <Label>{renderLabel(item)}</Label>
            </Item>
          );
        })}
      </animated.div>
    </Container>
  );
};
