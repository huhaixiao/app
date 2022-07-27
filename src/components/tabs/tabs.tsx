import React, { useState, useEffect, useRef } from 'react';
import type { FC, ReactNode, ReactElement } from 'react';
import ReactIs from 'react-is';
import styled from 'styled-components';
import { traverseReactNode } from '../../utils/traverse-react-node';

interface TabProps {
  title: string;
  children?: ReactNode;
}

export const Tab: FC<TabProps> = () => null;

interface TabsProps {
  children: ReactElement<TabProps>[];
  defaultActiveKey?: string;
  onChange: (title: string) => void;
}

const StyledHeader = styled.div`
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledPanelTitleWrapper = styled.div`
  flex-grow: 1;
  padding: 0 12px;
`;

const StyledPanelTitle = styled.div<{ isSelected: boolean }>`
  white-space: nowrap;
  width: min-content;

  transform: scale(${props => (props.isSelected ? '1.2' : '1')});
`;

export const Tabs: FC<TabsProps> = props => {
  const titleHeaderRef = useRef<HTMLDivElement>(null);
  const panes: ReactElement<TabProps>[] = [];
  traverseReactNode(props.children, (child, index) => {
    panes.push((child as unknown) as ReactElement<TabProps>);
  });

  const [activeKey, setActiveKey] = useState<string>(() => {
    if (props.defaultActiveKey) {
      return props.defaultActiveKey;
    }
    const childrenArray = React.Children.toArray(props.children);

    if (ReactIs.isElement(childrenArray[0])) {
      return childrenArray[0].props.title;
    }

    return '';
  });

  useEffect(() => {
    if (titleHeaderRef.current) {
      const found = titleHeaderRef.current.querySelector(
        `[data-index=${activeKey}]`
      );
      if (found) {
        found.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeKey]);

  return (
    <>
      <StyledHeader ref={titleHeaderRef}>
        {panes.map(pane => {
          const isSelected = pane.props.title === activeKey;
          return (
            <StyledPanelTitleWrapper key={pane.props.title}>
              <StyledPanelTitle
                isSelected={isSelected}
                data-index={pane.props.title}
                onClick={() => {
                  setActiveKey(pane.props.title);
                  props.onChange(pane.props.title);
                }}>
                {pane.props.title}
              </StyledPanelTitle>
            </StyledPanelTitleWrapper>
          );
        })}
      </StyledHeader>
      <div>
        {panes.map(pane => {
          const active = pane.props.title === activeKey;
          return (
            <div key={pane.key} style={{ display: active ? 'block' : 'none' }}>
              {pane.props.children}
            </div>
          );
        })}
      </div>
    </>
  );
};
