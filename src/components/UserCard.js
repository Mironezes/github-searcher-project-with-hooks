import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

export const UserCard = ({user}) => {
  
 return (
  <Card>
    <Card.Img variant="top" src={user.avatar_url} alt={user.login} />
    <Card.Body >
      <Card.Title>{user.login}</Card.Title>
      <Link className="btn btn-info" to={`/profile/${user.login}`}>View a profile</Link>
    </Card.Body>
  </Card>
  )
}