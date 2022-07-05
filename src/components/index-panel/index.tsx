import { forwardRef, ReactElement } from 'react';

export const Indexbar = forwardRef((props, ref) => {
  const panels: ReactElement[] = [];

  return (
    <div>
      <div>{panels}</div>
    </div>
  );
});
