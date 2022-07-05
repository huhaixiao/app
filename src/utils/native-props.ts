import React from 'react';
import type { CSSProperties, ReactElement } from 'react';
import classNames from 'classnames';

// WTF
// <S extends string = never>
/**

export type NativeProps<S extends string = never> = {
  className?: string
  style?: CSSProperties & Partial<Record<S, string>>
  tabIndex?: number
} & AriaAttributes

 */

type NativeProps = {
  className?: string;
  style?: CSSProperties;
};

export function withNativeProps<P extends NativeProps>(
  props: P,
  element: ReactElement
) {
  const p = {
    ...element.props
  };
  if (props.className) {
    p.className = classNames(p.className, props.className);
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style
    };
  }
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue;
    if (key.startsWith('data-')) {
      p[key] = props[key];
    }
  }

  return React.cloneElement(element, p);
}
