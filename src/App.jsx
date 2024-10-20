import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
import Book from './Book'

function App() {
  const actors = ['Sakib khan', 'Shoriful Raj', 'Jashim', 'Rubel']

  const books = [
    {id: 1, name:'Physics', price: 100},
    {id: 2, name:'math', price: 120},
    {id: 3, name:'chemisty', price: 130},
    {id: 4, name:'biology', price: 150}
  ]

  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahman', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
  ]

  return (
    <>
      <BookStore books={books}></BookStore>

      <h1>Vite + React</h1>

      {
        singers.map(singerObj => <Singer singer={singerObj}></Singer>)
      }

      <Actor name="kamran akmal"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>) //prottektar jnno ekta kre component toiri hoilo
      }
      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Learn Vue"
        isDone={false}></Todo>
      <Todo
        task="Learn jsx"
        isDone={true}></Todo> */}
      {/* <Device name="laptop" price="55"></Device>
      <Device name="Mobile" price="11"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  //console.log(props);
  return <h2>This Device: {props.name}, price: {props.price}</h2>
}

function Person() {
  const age = 22;
  const person = { name: 'sakib', age: 12 }
  return <h3>I am {person.name} with age: {age + 2}
  </h3>
}

const { grade, score } = { grade: '7', score: '99' };


function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Grade: {grade} </p>
      <p>Score: {score}</p>
    </div>
  )
}


// function Student(props){
//   console.log(props);
//   return (
//   <div className='student'>
//     <h3>This is a student</h3>
//     <p>Grade: </p>
//     <p>Score: </p>
//   </div>
//   )
// }

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid green',
    borderRadius: '20px'
  }
  return (
    //<div style={developerStyle}>
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h5>Devo Devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
