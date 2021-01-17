import React, {useContext, useState} from 'react'
import { Form } from 'react-bootstrap'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSearchSubmit = e => {
    if(e.key !== 'Enter') {
      return
    }
    
    if(value.trim()) {
      alert.hideAlert()
      github.searchUsers(value.trim())
    } else {
      alert.showAlert('Please provide a user name', 'danger')
      github.clearSearch()
    }
  }

  return (
  <Form.Group className="mb-5">
    <Form.Label className="h2 pb-3">Enter GitHub user`s nickname</Form.Label>
    <Form.Control 
      type="text" 
      placeholder="e.g. mironezes"
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyPress={onSearchSubmit}
    />
  </Form.Group>
  )
}