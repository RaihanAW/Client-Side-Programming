import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-neutral-800 flex flex-col items-center justify-center text-center'>
        <div className='flex items-center justify-center space-x-8 mb-12'>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react w-24 h-24 animate-spin" style={{animationDuration: "30s"}} alt="React logo" />
          </a>
          </div>
        <h1 className='text-white text-8xl font-bold mb-16'>Vite + React</h1>
        <div className="card text-sm space-y-6 mb-8">
          <button className='text-white bg-neutral-900 py-2 px-6 rounded-lg text-lg' onClick={() => setCount(count>0?(count)=>(count * 2):count=>(count+1))}>
            count is {count}
          </button>
          <p className='text-neutral-400'>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-neutral-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
//setCount(count>0?(count)=>(count * 2):count=>(count+1))