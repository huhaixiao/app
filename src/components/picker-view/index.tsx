import { createGlobalStyle } from 'styled-components';
import { PickerColumnItem, PickerValue } from './types';
import { PickerColumn, PickerView } from './picker-view';
import { useEffect, useState } from 'react';

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
