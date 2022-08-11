# todo

- [ ] `<S extends string = never>`
- [ ] onxxx & addEventListener('xxx')
- [ ] `react-is`
- [ ] happy path
- [ ] 图灵完备

# utils

- [Create React App](https://create-react-app.dev/)

# ref

- [掘金网页 Dashboard](https://e.juejin.cn/#/)
- [csb Demo](https://m05hfn.csb.app/)
- [Day.js](https://day.js.org/)
- [codepen](https://codepen.io/)
- [Bulletproff React](https://github.com/alan2207/bulletproof-react)
- [css Grid Tracks](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks)
- [css grid-auto-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
- [css fit-content](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content_function)
- [codepen waterfall](https://codepen.io/ycw/pen/gdGBPx)
- [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)

# packages

- [prettier-plugin-import-sort](https://www.npmjs.com/package/prettier-plugin-import-sort)
- [rc-form](https://vscode.dev/github/react-component/field-form)

```css
.waterfall {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(133px, 1fr));
  grid-gap: 0.25em;
  grid-auto-flow: row dense;
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
```

# npm

## packages

- antd
- classnames

## cli

- `npm view <package>`
- `npm view <package> version`
- `npm view <package> versions`
