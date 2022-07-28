import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div``;

/**
 * @deprecated
 * <a href="https://www.baidu.com/" target="_blank" rel="noreferrer">
 */
export const Home = () => {
  return (
    <AppContainer>
      <h1>Home</h1>
      <Link to="components">components</Link>
      <Outlet />
    </AppContainer>
  );
};

export const About = () => {
  return <span>about</span>;
};
