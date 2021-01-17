import React from 'react'
import {useContext} from 'react'
import {Alert} from 'react-bootstrap'
import { AlertContext } from '../context/alert/alertContext'

export const AlertModal = () => {

  const {alert, hideAlert} = useContext(AlertContext)

  if(!alert) return null

  return (
    <Alert variant={alert.type || 'secondary'} onClick={hideAlert} dismissible>
      {alert.text}
    </Alert>
  )
  
}