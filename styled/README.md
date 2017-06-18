# minimal-styled

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

This is a subset of styled-components features.

Usage:

```
import React from 'react'
import styled from 'minimal-styled'

function Hello (props) {
  return (
    <h1 className={props.className}>Hello from React</h1> 
  )
}

export default styled(Hello)`
  & {
    text-align: center;
  }
`
```

Notice that & in css portion is mandatory because we use manual css parsing 
rather than abstraction that creates a css object first.

We also don't support auto vendor prefixing (yet).

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
