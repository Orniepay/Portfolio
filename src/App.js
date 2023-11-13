import './App.css'

import Nav from './components/Nav.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
