import { createGlobalStyle } from 'styled-components';
import { PickerColumnItem, PickerValue } from './types';
import { PickerColumn, PickerView } from './picker-view';
import { useEffect, useState } from 'react';

const GlobalStyle = createGlobalStyle`
.cx-picker-view {
  --border-color: #e4393c;
  --background-color: #ccc;
  --item-height: 28px;;

  height: 276px;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  background: var(--background-color);

  &-mask {
    position: absolute;
    z-index: 10000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    pointer-events: none;
    &-top,
    &-bottom {
      flex: auto;
    }
    &-middle {
      height: var(--item-height);
      box-sizing: border-box;
      flex: none;
      border-top: solid 1px var(--border-color);
      border-bottom: solid 1px var(--border-color);
      background-color: 
    }
    &-top {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.6) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 1)
      );
    }
    &-bottom {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.6) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 1)
      );
    }
  }
}
`;

// const defaultRenderLabel = (item: PickerColumnItem) => item.label;

const basicColumns: PickerColumnItem[][] = [
  [
    { label: '周一', value: 'Mon' },
    { label: '周二', value: 'Tues' },
    { label: '周三', value: 'Wed' },
    { label: '周四', value: 'Thur' },
    { label: '周五', value: 'Fri' }
  ],
  [
    { label: '上午', value: 'am' },
    { label: '下午', value: 'pm' }
  ]
];

export const Demo = () => {
  const [columns, setColumns] = useState<PickerColumn[]>(basicColumns);
  const [values, setValues] = useState<PickerValue[]>(['Fri', 'pm']);

  return (
    <>
      <GlobalStyle />
      <PickerView
        columns={columns}
        values={values}
        renderLabel={item => item.label}
        onChange={value => {
          setValues(value);
        }}
      />
    </>
  );
};
