import React, {useContext} from 'react'
import { UserCard } from '../components/UserCard'
import { Search } from '../components/Search'
import {Col, Row} from 'react-bootstrap'
import { GithubContext } from '../context/github/githubContext'
import {Spinner} from '../components/Loader'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const Home = () => {

  const {loading, users} = useContext(GithubContext)

  return (
    <>
      <Search />

      {loading
      ?
        <Spinner/>
      :
      <Row className="mb-5">
      {users.map(user => {
        return (
          <Col lg={3} sm={4} xs={12} className="mb-4" key={user.id}>
            <UserCard user={user} />
          </Col>
        )
      })}
      </Row>
      }
    </>
  )
}