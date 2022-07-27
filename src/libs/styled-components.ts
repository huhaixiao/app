import styled from 'styled-components';

/**
 * @see https://styled-components.com/
 * @see https://styled-components.com/docs/basics#attaching-additional-props
 */
const ContextualSelector = styled.div.attrs(porps => ({
  tabIndex: 0
}))`
  /* CSS Contextual Selector */
  html.dark & {
    color: #fff;
    background-color: #000;
  }
`;
