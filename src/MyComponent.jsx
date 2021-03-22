// import React from 'react'
import greetUser from './helper'
import { createRandomNumber } from './helper'

const MyComponent = (props) => {
  if (props.func) { props.func() }
  return <h1>{greetUser(props.name || 'Sean')} and you random number is {props.count || createRandomNumber()}</h1>
}

// a react component is just a function returning some JSX

export default MyComponent