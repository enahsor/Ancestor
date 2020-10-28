# 👵 Ancestor

## 📌 Notice

Please keep in mind that this is a work in progress. I wouldn't use this for production but feel free to give it a shot. If you're looking for viable alternatives, you might want to check out the [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) hook or [Redux](https://redux.js.org/)

## What is it 🤔

Derivative of the compound component. This component allows you to pass props to all descendants from a single point - the ancestor component.

## How to use 😫

1. Install by running `yarn add react-ancestor`
1. Add `import Ancestor from "react-ancestor"` to your file
1. Wrap top level component in `<Ancestor></Ancestor>`
1. Props passed to wrapper will be available to all components in component tree

### 📌 Example

```js
import React from 'react'
import Ancestor from 'react-ancestor'
import Child from './Child'
import './styles.css'

export default function App() {
    return (
        <Ancestor passed='Hi'>
            <Child />
            <Child passed='Hello' />
        </Ancestor>
    )
}
```

## Why? 🤔

I don't even know if this is a good idea but it seemed like something fun to do - so why not? Seriously, why not?

Let me know why you think this is a bad idea via twitter [@reactdon](https://twitter.com/reactdon)

# Contributing ⛏️

Want to contribute?

1. Fork the repo
1. Clone the project on your own machine
1. Run `yarn` to install dependencies
1. Commit changes to your own branch
1. Push your work back up to your fork
1. Submit a PR so that I can review your changes
