import { memo, ReactNode } from 'react';
import { Wheel, WheelViewProps } from './wheel';

const classPrefix = `cx-picker-view`;

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
      <div className={`${classPrefix}`}>
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
          <div className={`${classPrefix}-mask-middle`} />
          <div className={`${classPrefix}-mask-bottom`} />
        </div>
      </div>
    );
  }
);

PickerView.displayName = 'PickerView';
