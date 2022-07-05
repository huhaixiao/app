import { memo, ReactNode } from 'react';
import styled from 'styled-components';
import { Wheel, WheelViewProps } from './wheel';

export type PickerValue = string | null;

export type PickerValueExtend = {
  columns: PickerColumnItem[][];
  items: (PickerColumnItem | null)[];
};

export type PickerColumnItem = {
  label: ReactNode;
  value: string;
  key?: string | number;
};

export type PickerColumn = PickerColumnItem[];

export type PickerViewProps = {
  columns: PickerColumn[];
  values: PickerValue[];
  onChange: (value: PickerValue[]) => void;
} & Pick<WheelViewProps, 'renderLabel'>;

const classPrefix = `cx-picker-view`;

const Container = styled.div`
  --border-color: #e4393c;
  --background-color: #ccc;
  --item-height: 28px;

  height: 276px;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  // background: var(--background-color);

  .cx-picker-view-mask {
    position: absolute;
    z-index: 10000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    pointer-events: none;
    &-top,
    &-bottom {
      flex: auto;
    }
    &-middle {
      height: var(--item-height);
      max-height: var(--item-height);
      box-sizing: border-box;
      flex: none;
    }
    &-top {
      height: var(--item-height);
      max-height: var(--item-height);
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 1)
      );
    }
    &-bottom {
      height: var(--item-height);
      max-height: var(--item-height);
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 1)
      );
    }
  }

  .cx-picker-view-bottom {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: var(--item-height);
    max-height: var(--item-height);
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    pointer-events: none;
    z-index: -1000;
  }
`;

export const PickerView = memo<PickerViewProps>(
  ({ columns, values, renderLabel, onChange }) => {
    const onWheelSelect = (pickerValue: PickerValue, index: number) => {
      onChange([
        ...values.slice(0, index),
        pickerValue,
        ...values.slice(index + 1)
      ]);
    };

    return (
      <Container>
        {columns.map((column, index) => (
          <Wheel
            key={index}
            index={index}
            column={column}
            value={values[index]}
            onSelect={pickerValue => {
              onWheelSelect(pickerValue, index);
            }}
            renderLabel={renderLabel}
          />
        ))}
        <div className={`${classPrefix}-mask`}>
          <div className={`${classPrefix}-mask-top`} />
          {/* <div className={`${classPrefix}-mask-middle`} /> */}
          <div className={`${classPrefix}-mask-bottom`} />
        </div>
        <div className={`${classPrefix}-bottom`}></div>
      </Container>
    );
  }
);

PickerView.displayName = 'PickerView';
