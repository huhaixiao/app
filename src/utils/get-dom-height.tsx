import React, {
  ReactNode,
  PropsWithChildren,
  CSSProperties,
  useEffect,
  useRef
} from 'react';
// import { CSSProperties } from 'styled-components';
import { renderReactNodeAt } from './render-react-node-at';

const fragment = document.createDocumentFragment();
const container = document.createElement('div');
fragment.appendChild(container);

export function getDOMHeight(element: HTMLElement) {
  container.innerHTML = '';
  container.append(element);

  const computedStyle = getComputedStyle(element);

  return computedStyle.height;
}

const ComputationHelper: React.FC<PropsWithChildren<{
  onMount: ({ width, height }: { width: string; height: string }) => void;
}>> = ({ onMount, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const computedStyle = (wrapperRef.current as HTMLDivElement).getBoundingClientRect();
    console.log(wrapperRef.current as HTMLDivElement);
    onMount(computedStyle);
  }, []);
  return <div ref={wrapperRef}>{children}</div>;
};

export function getReactNodeHeight(FunctionComponent: React.FC<any>) {
  container.innerHTML = '';

  return new Promise((resolve, reject) => {
    renderReactNodeAt(
      <ComputationHelper
        onMount={({ width, height }: { width: string; height: string }) => {
          console.log(width, height);
        }}>
        <FunctionComponent />
      </ComputationHelper>,
      container
    );
  });

  // renderReactNodeAt(reactNode, container);

  // const { firstElementChild } = container;
  // console.log(firstElementChild, 'firstElementChild');
  // const computedStyle = window.getComputedStyle(firstElementChild as Element);
  // return computedStyle.height;
}
