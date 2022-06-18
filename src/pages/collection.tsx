import { Link } from "react-router-dom";
import styled from "styled-components";

interface IItem {
  title: string;
  url: string;
}

const items: IItem[] = [
  {
    title: "react-router-dom",
    url: "https://reactrouter.com/"
  },
  {
    title: "styled-components",
    url: "https://styled-components.com/"
  },
  {
    title: "DefinitelyTyped",
    url: "https://github.com/DefinitelyTyped/DefinitelyTyped"
  },
  {
    title: "Chrome Whats new",
    url: "chrome://whats-new/"
  }
];

const Container = styled.div``;

const ItemContainer = styled.div``;

const Collection = () => {
  return (
    <Container>
      {items.map((item) => {
        return (
          <ItemContainer key={item.title}>
            <a href={item.url} rel="noreferrer" target="_blank">
              {item.title}
            </a>
          </ItemContainer>
        );
      })}
    </Container>
  );
};

export default Collection;
