import { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

export function renderReactNodeAt(
  reactNode: ReactNode,
  container: HTMLElement
) {
  const root = createRoot(container);
  root.render(reactNode);

  return root;
}
