import type { CSSProperties, AriaAttributes, ReactNode } from "react";

export type PickerValue = string | null;

export type PickerColumnItem = {
  label: ReactNode;
  value: string;
  key?: string | number;
};

export type Props = {
  index: number;
  column: PickerColumnItem[];
  value: PickerValue;
  onSelect: (value: PickerValue, index: number) => void;
  renderLabel: (item: PickerColumnItem) => ReactNode;
  mouseWheel: boolean;
};

export type PickerValueExtend = {
  columns: PickerColumnItem[][];
  items: (PickerColumnItem | null)[];
};

export type NativeProps<S extends string = never> = {
  className?: string;
  style?: CSSProperties & Partial<Record<S, string>>;
  tabIndex?: number;
} & AriaAttributes;

// const classPrefix = `adm-picker-view`;
type PickerColumn = (string | PickerColumnItem)[];

export type PickerViewProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[]);
  value?: PickerValue[];
  defaultValue?: PickerValue[];
  mouseWheel?: boolean;
  onChange?: (value: PickerValue[], extend: PickerValueExtend) => void;
} & Pick<Props, "renderLabel"> &
  NativeProps<"--height" | "--item-height" | "--item-font-size">;
