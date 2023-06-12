import { slide as Menu } from 'react-burger-menu'
import './App.css'

function App() {



  return (
    <>
        <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a className="menu-item--small" href="">Settings</a>
        </Menu>

    </>
  )
}

export default App
