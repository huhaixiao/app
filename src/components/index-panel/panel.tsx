import type { FC, ReactNode } from 'react';

type IndexBarPanelProps = {
  index: string;
  title?: ReactNode;
  brief?: ReactNode;
  children?: ReactNode;
};

export const Panel: FC<IndexBarPanelProps> = () => null;
