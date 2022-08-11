import styled from 'styled-components';

const Demo1Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 10px;

  div {
    border: 2px solid rgb(233 171 88);
    border-radius: 5px;
    background-color: rgba(233 171 88 / 0.5);
  }

  .one {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .two {
    grid-column: 2 / 4;
    grid-row: 1 / 3;
  }
  .three {
    grid-column: 1;
    grid-row: 2 / 5;
  }
  .four {
    grid-column: 3;
    grid-row: 3;
  }
  .five {
    grid-column: 2;
    grid-row: 4;
  }
  .six {
    grid-column: 3;
    grid-row: 4;
  }
`;

const Demo1 = () => {
  return (
    <Demo1Wrapper>
      <div className="one">One</div>
      <div className="two">Two</div>
      <div className="three">Three</div>
      <div className="four">Four</div>
      <div className="five">Five</div>
      <div className="six">Six</div>
    </Demo1Wrapper>
  );
};

const GridContainer = styled.div`
  /* display: grid; */
  /* grid-template-columns: 200px 200px 200px; */
  /* grid-template-columns: 2fr 1fr 1fr; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  /* column-gap: 16px; */
  /* row-gap: 4px; */
  /* gap: 20px; */
  /* grid-auto-rows: minmax(100px, auto); */

  .waterfall {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(133px, 1fr));
    grid-gap: 0.25em;
    /* grid-gap: 1px; */
    /* grid-auto-flow: row dense; */
    /* grid-auto-rows: 20px; */
    /* grid-auto-rows: min-content; */
    grid-auto-rows: 20px;
  }
  .waterfall .item {
    width: 100%;
    background: #222;
    color: #ddd;
  }
  .waterfall .item:nth-of-type(3n + 1) {
    grid-row: auto / span 5;
  }
  .waterfall .item:nth-of-type(3n + 2) {
    grid-row: auto / span 6;
  }
  .waterfall .item:nth-of-type(3n + 3) {
    grid-row: auto / span 8;
  }
  .waterfall .item:nth-of-type(2) {
    /* grid-row: auto / span 10; */
    grid-row-start: auto;
    grid-row-end: span 10;
  }

  .waterfall .item:nth-of-type(7) {
    color: #222;
    background-color: lightgreen;
    /* grid-row: auto; */
  }

  .waterfall .item:nth-of-type(8) {
    /* grid-row: auto; */
    grid-row-end: span 2;
  }
  .waterfall .item:nth-of-type(9) {
    grid-row: auto;
    grid-row-end: span 10;
  }
`;

const GridItem = styled.div`
  padding: 4px;
  border: 1px solid lightblue;
  border-radius: 2px;
  background-color: lightgreen;
`;

/**
 * 1. rows;
 * 2. columns;
 * 3. gutters;
 * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids
 * @description
 * 1. defining a grid.
 *  display: flex;
 * 2. flexible grids with fr unit.
 *  grid-template-columns: 1fr 1fr 1fr;
 * 3. gaps between tracks.
 *  gap: 8px;
 *  column-gap: 8px;
 *  row-gap: 8px;
 * 4. repeating track listings
 *  grid-template-columns: repeat(3, 1fr);
 * 5. implicit & explicit grid
 *  explicit
 *    a. grid-template-columns
 *    b. grid-template-rows
 *  implicit
 *    a. grid-auto-columns
 *    b. grid-auto-rows
 * 6. minmax()
 * 7. as many columns will fit
 * 8. line based placement
 * 9.
 */
const Grid = () => {
  return (
    <GridContainer>
      {/* <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>
        君子曰：学不可以已。
        青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，𫐓以为轮，其曲中规。虽有槁暴，不复挺者，𫐓使之然也。故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。
        故不登高山，不知天之高也；不临深溪，不知地之厚也；不闻先王之遗言，不知学问之大也。干、越、夷、貉之子，生而同声，长而异俗，教使之然也。诗曰：“嗟尔君子，无恒安息。靖共尔位，好是正直。神之听之，介尔景福。”神莫大于化道，福莫长于无祸。
      </GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
      <GridItem>9</GridItem>
      <GridItem>10</GridItem> */}
      <div className="waterfall">
        <div className="item">
          1
          青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，𫐓以为轮，其曲中规。
        </div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item">7</div>
        <div className="item">
          8
          青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，𫐓以为轮，其曲中规。
        </div>
        <div className="item">9</div>
        <div className="item">10</div>
        <div className="item">11</div>
        <div className="item">12</div>
        <div className="item">13</div>
        <div className="item">14</div>
        <div className="item">15</div>
        <div className="item">16</div>
        <div className="item">17</div>
      </div>
    </GridContainer>
  );
};

/**
 * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout
 * @todo normal flow
 * @todo float
 * @todo flex
 * @todo grid
 * @todo positioning
 * @todo multi-column layout
 * @todo media query
 * @todo responsive design
 */
export default () => {
  return <Grid />;
};
