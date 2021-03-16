import '@reach/dialog/styles.css'
import React, {useState} from 'react'
import ReactDom from 'react-dom'
import {Dialog} from '@reach/dialog'
import {Logo} from './components/logo'

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(evt) {
    evt.preventDefault()
    const {username, password} = evt.target.elements

    onSubmit({
      username: username.target.value.trim(),
      password: password.target.value.trim(),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <label htmlFor="username">
          <input type="text" id="username" />
        </label>
      </div>

      <div className="">
        <label htmlFor="password">
          <input type="password" id="password" />
        </label>
      </div>

      <div className="">
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = useState('none')

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('login', formData)
  }
  return (
    <>
      <Logo width="80" height="80" />

      <div className="">
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>

      <div className="">
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <div className="">
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>

        <h3>Login</h3>

        <LoginForm onSubmit={login} buttonText="login" />
      </Dialog>

      <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
        <div className="">
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>

        <LoginForm onSubmit={register} buttonText="register" />

        <h3>Registration</h3>
      </Dialog>
    </>
  )
}
// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use ReactDOM to render the <App /> to the root element
ReactDom.render(<App />, document.getElementById('root'))
