// import { Link } from "react-router-dom";
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
    title: "notion-api",
    url: "https://developers.notion.com/reference/intro"
  },
  {
    title: "Chrome Whats new",
    url: "chrome://whats-new/"
  }
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemContainer = styled.div`
  margin-bottom: 16px;
  margin-right: 16px;
  width: 200px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  line-height: 50px;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

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
