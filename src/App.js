import logo from './logo.svg'
import './App.css'
import MyComponent from './MyComponent'
import ClassComponent from './ClassComponent'

function App() {
  return (
    // JSX
    <div className="App">
      {/* will be converted into <div class="App"> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>I'VE ADDED THIS MYSELF!!!!!!!!!</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <ClassComponent />
        <ClassComponent />
        <ClassComponent />

        {/* PROPS in REACT COMPONENT are like ATTRIBUTES on HTML ELEMENTS*/}
        <MyComponent name="Andi" count={5} func={() => console.log('hello')} />
        <MyComponent name="Hafiz" count={10} />
        <MyComponent />
      </header>
    </div>
  )
}

export default App
