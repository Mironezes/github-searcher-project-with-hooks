import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'

export const About = () => {

  return (
      <Jumbotron fluid className="p-5">
        <Container>
          <h1>Information</h1>
          <p>Current app version: <strong>1.0.0</strong></p>
        </Container>
      </Jumbotron>
  )
}