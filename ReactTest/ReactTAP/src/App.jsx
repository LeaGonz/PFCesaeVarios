import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import './components/Card.css'
import Header from './components/Header'
import Card from './components/Card'
import MainGoal from './components/MainGoal'
import CourseGoal from './components/CourseGoal'
import Login from './components/States'
import TabButton from './components/Button'
import Discount from './components/Discount'

const userData = { firstName: 'Luis ', lastName: 'Gonzalez', title: 'Front End Developer' }

// function Card() {
//   return (
//     <div className='card'>
//       <h2>
//         {userData.firstName}
//         {userData.lastName}
//       </h2>
//       <h3>{userData.title}</h3>
//     </div>
//   )
// }

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Por favor seleccione un tema')

  // const [count, setCount] = useState(0)
  function handdleSelect(selectedBtn) {
    // alert(selectedBtn)
    setSelectedTopic(selectedBtn)
  }

  return (
    <>
      <div>
        <CourseGoal />
        <Header />
        <Discount />
        <h3>Eventos dinâmicos</h3>
        <menu>
          <TabButton onSelect={() => handdleSelect('JS')}>JS</TabButton>
          <TabButton onSelect={() => handdleSelect('React')}>React</TabButton>
          <TabButton onSelect={() => handdleSelect('Sql')}>SQL</TabButton>
          <div>
            {selectedTopic}
          </div>
        </menu>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Front End Developer: React</h1>
      {/* <div className="card"> */}
      <h3>User Login</h3>
      <label htmlFor="">Name: </label>
      <input type="text" />
      <br /><br />
      <Login user="Luis">Create User</Login>

      <Card
        firstName="Lucho "
        lastName={userData.lastName}
        title="Estudante de Front End Developer"
      />
      <Card
        firstName="Andrea "
        lastName={userData.lastName}
        title="Esposa do Front End Developer"
      />
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      {/* </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MainGoal
        title="Aprender React"
      />
      <MainGoal
        title="Desenvolver aplicações web"
      />
      <MainGoal
        title="Aprender Tailwind"
      />
    </>
  )
}

export default App
