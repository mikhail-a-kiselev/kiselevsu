import React from 'react'
import { Card } from 'react-bootstrap'
import Head from 'next/head';
function Portfolio () {
  return <div>
    <Head>
      <title key="title">Портфолио Михаила Киселева</title>
      <meta
            key="description"
            name="description"
            content={"Работы Киселева Михаила Александровича"}
        />
        <meta
            key="og:type"
            name="og:type"
            content={"profile"}
        />
        <meta
            key="og:title"
            name="og:title"
            content={"Портфолио Михаила Киселева"}
        />
        <meta
            key="og:description"
            name="og:description"
            content={"Работы Киселева Михаила Александровича"}
        />
        <meta
            key="og:url"
            name="og:url"
            content={"https://kiselev.su/portfolio"}
        />
        <meta
            key="og:image"
            name="og:image"
            content={""}
        />
    </Head>
    <Card>
      <Card.Body>
        <Card.Title>ЖК.онлайн виджет</Card.Title>
        <Card.Text>
          Здравствуйте, меня зовут Михаил Киселев, я frontend-разработчик.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>ЖК.онлайн CRM для УК</Card.Title>
        <Card.Text>
          Здравствуйте, меня зовут Михаил Киселев, я frontend-разработчик.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Дети и наука</Card.Title>
        <Card.Text>
          Здравствуйте, меня зовут Михаил Киселев, я frontend-разработчик.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Мобильные игры</Card.Title>
        <Card.Text>
          Здравствуйте, меня зовут Михаил Киселев, я frontend-разработчик.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
}

export default Portfolio
