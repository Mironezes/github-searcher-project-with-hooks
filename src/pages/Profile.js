import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { GithubContext } from '../context/github/githubContext'
import {Repositories} from '../components/Repositories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Row, ButtonGroup, Button } from 'react-bootstrap'
import {Spinner} from '../components/Loader'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const Profile = ({match}) => {

  const {getUser, getReps, loading, user, repos} = useContext(GithubContext)
  const userLogin = match.params.name

  useEffect(() => {
    getUser(userLogin)
    getReps(userLogin)
  }, [])

  if(loading) {
    <Spinner/>
  }

  return (
    <>
      <Row className="breadcrumbs mb-4">
        <NavLink to="/" exact className="breadcrumbs-item root"><FontAwesomeIcon icon={faChevronLeft} /> Back to search</NavLink>
        <span className="breadcrumbs-item active">{user.login}`s profile</span>
      </Row>

      <Row>
        <Col sm={4} className="mb-4">
          <Card>
          <Card.Img variant="top" src={user.avatar_url} alt={user.login} />
          <Card.Body >
            <h3 className="mb-4">{user.name || 'Anonymous'}</h3>
            {  
              user.location
              ? <p><strong>Location:</strong> {user.location}</p>
              : null
            }
            {  
              user.company
              ? <p><strong>Company:</strong> {user.company}</p>
              : null
            }
            <p><strong>Followers:</strong> {user.followers}</p>
            <p><strong>Public repositories: </strong>{user.public_repos}</p>
            <a className="btn btn-info" href={user.html_url} target="_blank" rel="noreferrer">Profile on GitHub</a>
          </Card.Body>
          </Card>
        </Col>

        <Col sm={8}>
            <h1 className="mb-4">{user.login}</h1>
            <p><strong>Bio:</strong> {user.bio}</p>
            {
            user.blog 
            ? <p><strong>Website:</strong> {user.blog}</p> 
            : null}
            <ButtonGroup aria-label="Basic example" className="mb-5">
            <Button variant="outline-success"><strong>Followers:</strong> {user.followers}</Button>
            <Button variant="outline-info"><strong>Following:</strong> {user.following}</Button>
            <Button variant="outline-secondary"><strong>Repositories:</strong> {user.public_repos}</Button>
            <Button variant="outline-danger"><strong>Gists:</strong> {user.public_repos}</Button>
          </ButtonGroup>

          <Repositories repos={repos} />
        </Col>
      </Row>


    </>
  )
}