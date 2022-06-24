import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Head from 'next/head';
import { useRouter } from 'next/router'

function Home () {
  const router = useRouter()
  const aboutClick = (e: any) => {
    e.preventDefault()
    router.push('/about')
  }
  
  const contactClick = (e: any) => {
    e.preventDefault()
    router.push('/contact')
  }
  return <Card>
    <Head>
      <title key="title">Персональный сайт Михаила Киселева</title>
      <meta
            key="description"
            name="description"
            content={"Персональный сайт фронтенд-разработчика"}
        />
        <meta
            key="og:type"
            name="og:type"
            content={"profile"}
        />
        <meta
            key="og:title"
            name="og:title"
            content={"Персональный сайт Михаила Киселева"}
        />
        <meta
            key="og:description"
            name="og:description"
            content={"Персональный сайт фронтенд-разработчика"}
        />
        <meta
            key="og:url"
            name="og:url"
            content={"https://kiselev.su/"}
        />
        <meta
            key="og:image"
            name="og:image"
            content={""}
        />
    </Head>
    <Card.Body>
      <Card.Text>
        Здравствуйте, меня зовут Михаил Киселев, я frontend-разработчик.
      </Card.Text>
      <Button variant="secondary" onClick={aboutClick}>Обо мне</Button>
      &nbsp;
      <Button variant="primary" onClick={contactClick}>Связаться со мной</Button>
    </Card.Body>
  </Card>
}

export default Home
