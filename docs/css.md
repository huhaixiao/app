- box-model
- formatting-model
- [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)
- [At rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)

# flexlayout

- `align-items`
- `align-self`
- `gap`

# box-model

- `width = margin + border + padding + content`
- `box-sizing`
  - `box-sizing: content-box;`
  - `box-sizing: border-box;`
- `Element.scrollHeight`
  - padding + content
  - including content not visible due to overflow.
- `Element.clientHeight`
  - padding + content
- `HTMLElement.offsetHeight`
  - border + padding + content
- `Element.getBoundingClientRect()`
- `line-height`
  - sets the height of a line box.
  - `line-height: normal;`
    - != `line-height: 1;`
    - sometime `line-height: 1.125;`
    - roughly `line-height: 1.2;`
  - `line-height: 2.5;`
  - `line-height: 3em;`
  - `line-height: 150%;`
  - `line-height: 32px;`
- `inline-size: 20px;`
- `block-size: 20px;`

# character

## white-space

- `white-space: normal;`
- `white-space: nowrap;`
- U+0009 TAB Line Tabulation 制表符
- U+000A LF Line Feed 换行符
- U+000C FF Form Feed 换页符
- U+000D CR Carriage Return 回车符
- U+200B ZeroWidthSpace 零宽间隔

```js
// === String.fromCharCode(parseInt('9'), 16)
const tab = '\t';
const lf = '\n';
const ff = '\f';
const cr = '\r';
```

### Three kinds of Spaces

- U+0020 半角空格
- U+00A0 (non breaking space) 半角空格，用于英文词组
- U+3000 全角空格
