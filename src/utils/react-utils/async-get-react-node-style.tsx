import type { FC, PropsWithChildren, ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { renderReactNodeAt } from './render-react-node-at';

const Wrapper: FC<PropsWithChildren<{
  onDidMount: ({ width, height }: { width: number; height: number }) => void;
}>> = ({ onDidMount, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const computedStyle = window.getComputedStyle(
      ref.current as HTMLDivElement
    );
    onDidMount({
      width: parseInt(computedStyle.width, 10),
      height: parseInt(computedStyle.height, 10)
    });
  }, []);
  return <div ref={ref}>{children}</div>;
};

/**
 * @description
 * get react node style before render
 */
export function asyncGetReactNodeStyle(reactNode: ReactNode) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  div.style.position = 'fixed';
  div.style.top = '-1000px';

  return new Promise((resolve, reject) => {
    const root = renderReactNodeAt(
      <Wrapper
        onDidMount={el => {
          console.log(el);
          resolve(el);
          setTimeout(() => {
            root.unmount();
            div.remove();
          }, 300);
        }}>
        {reactNode}
      </Wrapper>,
      div
    );
  });
}
