import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Home () {
  return <Card>
  <Card.Body>
    <Card.Text>
      Здравствуйте, меня зовут Михаил Киселев, я frontend-разработчик.
    </Card.Text>
    <Button variant="secondary">Обо мне</Button>
    &nbsp;
    <Button variant="primary">Связаться со мной</Button>
  </Card.Body>
</Card>
}

export default Home
