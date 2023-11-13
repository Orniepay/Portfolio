import './App.css'

import Nav from './components/Nav.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <main className="flex flex-col items-center">
        <Home />

        <About />

        <Projects />

        <Contact />
      </main>
    </div>
  )
}

export default App
