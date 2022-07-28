// Q：React element, component, instance 区别
// A：https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
// An element is a plain object describing a component instance or DOM node and its desired properties.
// Components Can Be Classes or Functions

// Element
// ReactElement<any, any>
// ReactInstance

import { cloneElement } from 'react';
import type { FC } from 'react';
import styled from 'styled-components';
import {
  isElement,
  isElementOfType,
  isDOMComponent
} from 'react-dom/test-utils';

const Unknown: FC = () => null;

// const withNative = (Com: FC): FC => {
//   return function ({ children }) {
//     return <Com>{children}</Com>;
//   };
// };

// const instance = <Unknown />;

const Card = styled.div`
  width: 100px;
  height: 100px;
  background-color: #e4393c;
`;

const Page = () => {
  return (
    <div>
      <div>{`${isElement(<Unknown />)}`}</div>
      <div>{`${isElementOfType(<Unknown />, Unknown)}`}</div>
      <Card style={{ width: 200 }} />
      {/* <div>{`${isDOMComponent(<div></div>)}`}</div> */}
    </div>
  );
};

export default Page;
