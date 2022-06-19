import styled from "styled-components";

interface IItem {
  title: string;
  url: string;
}

const items: IItem[] = [
  {
    title: "ts/generic",
    url: "https://www.typescriptlang.org/docs/handbook/2/generics.html"
  },
  {
    title: "ts/mapped-types",
    url: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html"
  },
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
    title: "icon-font",
    url: "https://www.iconfont.cn/"
  },
  // {
  //   title: "Chrome Whats new",
  //   url: "chrome://whats-new/"
  // },
  {
    title: "无名小站",
    url: "https://www.btnull.re"
  },
  {
    title: "现在面试都在问什么",
    url: "https://mp.weixin.qq.com/s/t8Id1E0tSMxcqiCs_O6uwg"
  },
  {
    title: "vscode/ant-design-mobile",
    url: "https://vscode.dev/github/ant-design/ant-design-mobile"
  }
];

const Container = styled.div`
  a {
    color: unset;
    text-decoration: none;
  }
  /* display: flex; */
  /* flex-wrap: wrap; */
`;

const ItemContainer = styled.div`
  margin: 0 auto 16px;
  width: 100%;
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
