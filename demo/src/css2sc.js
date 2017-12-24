import React from 'react';
import { Debug, createState } from '../../src';
import { Textarea, Card } from './styles';

const css2sc = css =>
  css
    .split('\n')
    .filter(Boolean)
    .map(
      e =>
        e.includes('{')
          ? 'export const ' +
            e
              .replace(' {', '__styled_placeholder__')
              .replace(/\W+/g, ' ')
              .replace(/(\w)(\w*)/g, function(g0, g1, g2) {
                return g1.toUpperCase() + g2.toLowerCase();
              })
              .replace(/ /g, '')
              .replace('__styled_placeholder__', " = styled('div')`")
          : e.includes('}') ? e.replace('}', '`;\n') : e
    )
    .join('\n');

export default createState({
  css: `.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-2 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.card-3 {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.card-4 {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-5 {
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}`,
})(({ css, set }) => (
  <Card>
    <h2>Input</h2>
    <Textarea
      rows={15}
      value={css}
      style={{ minHeight: 320, fontFamily: 'monospace' }}
      onChange={e => set({ css: e.target.value })}
    />
    <h2>Output</h2>
    <Textarea
      style={{ minHeight: 320, fontFamily: 'monospace' }}
      value={css2sc(css)}
    />
  </Card>
));
