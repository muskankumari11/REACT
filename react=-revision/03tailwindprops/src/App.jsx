import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  let myobj={
    username:"suman",
    age:33
  }
  let newarr=[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-200 text-black p-4 rounded-xl'>
    Hello world!


  </h1>
  <Card username="hee" />
  <Card username="ohhk" />
    </>
  )
}

export default App
