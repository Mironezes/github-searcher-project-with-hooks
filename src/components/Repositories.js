import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'

export const Repositories = ({repos}) => {

  return (
    <>
    <h4 className="mb-3">Latest repositories:</h4>
    <Row>
    {repos.map(repo => (
        <Col sm={6} className="mb-2" key={repo.id}>
        <Card  >
          <Card.Body>
            <h5>
              <a 
                href={repo.html_url}
                rel="noreferrer"
                target="_blank"
                className="repo-link"
              >{repo.name}
              </a>
            </h5>
            updated at {repo.updated_at}
          </Card.Body>
        </Card>
        </Col>
        )
      ) 
    }
    </Row>
    </>
  )
}
