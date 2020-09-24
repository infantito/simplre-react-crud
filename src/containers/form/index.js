import React, { useState } from 'react'
import { Title, TextField, Button } from 'components'
import './styles.scss'

const Form = props => {
  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const handleChange = e => {
    const { name, value } = e.target

    if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const handleReset = () => {
    setUsername('')

    setPassword('')
  }

  const isDisabled = !(username && password)

  return (
    <form
      className="form"
      onSubmit={props.handleSubmit({ username, password }, handleReset)}
    >
      <Title>My User</Title>
      <fieldset>
        <TextField
          onChange={handleChange}
          placeholder="Nombre usuario"
          value={username}
          name="username"
        />
        <TextField
          onChange={handleChange}
          type="password"
          placeholder="Contraseña"
          value={password}
          name="password"
        />
        <Button type="submit" disabled={isDisabled}>
          Enviar
        </Button>
      </fieldset>
    </form>
  )
}

export default Form
