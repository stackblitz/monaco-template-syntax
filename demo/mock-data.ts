export const source = `
declare const css: any
declare const styled: any
declare const html: any

import { Component } from '@angular/core';

@Component({
  template: \`<div>testing</div>\`,
  styles: [\`.a { color: red }\`]
})
class T {}

const App = html\`
  <div>hello world</div>
\`

const Styles = css\`
  .a {
    color: red;
  }
\`

const Test = styled('div')\`
  .a {
    color: blue
  }
\`
`
