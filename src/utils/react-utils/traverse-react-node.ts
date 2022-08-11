import React from 'react';
import type { ReactNode } from 'react';
import { isFragment } from 'react-is';

export const traverseReactNode = (
  children: ReactNode,
  fn: (child: ReactNode, index: number) => void
) => {
  let i = 0;
  const traverse = (target: ReactNode) => {
    React.Children.forEach(target, child => {
      if (!isFragment(child)) {
        fn(child, i);
        i += 1;
      } else {
        traverse(child.props.children);
      }
    });
  };

  traverse(children);
};
