import React from 'react'
import { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'react-bootstrap/Image'
import photo from '../assets/img/photo.jpg'

function Home () {
  const router = useRouter()
  const [show, setShow] =  useState(false);
  const handlePhotoClose = () => setShow(false);
  const handlePhotoShow = () => setShow(true);
  const aboutClick = (e: any) => {
    e.preventDefault()
    router.push('/about')
  }
  const contactClick = (e: any) => {
    e.preventDefault()
    router.push('/contact')
  }
  return <>
    <Head>
      <title key="title">Персональный сайт Михаила Киселева</title>
      <meta
            key="description"
            name="description"
            content="Персональный сайт фронтенд-разработчика"
        />
        <meta
            key="og:type"
            name="og:type"
            content="profile"
        />
        <meta
            key="og:title"
            name="og:title"
            content="Персональный сайт Михаила Киселева"
        />
        <meta
            key="og:description"
            name="og:description"
            content="Персональный сайт фронтенд-разработчика"
        />
        <meta
            key="og:url"
            name="og:url"
            content="https://kiselev.su/"
        />
        <meta
            key="og:image"
            name="og:image"
            content=""
        />
    </Head>
    <Card>
      <Card.Body>
        <Image fluid={true} alt="Киселев Михаил Александрович, frontend разработчик" onClick={handlePhotoShow} roundedCircle={true} src={photo.src} width={150} height={200} className="float-end"></Image>
        <Card.Text>
          Здравствуйте, меня зовут Михаил Киселев, я frontend-разработчик.
        </Card.Text>
        <Card.Text>
          Веб-разработкой я начал интересоваться еще в школе, создавая странички в Microsoft Frontpage на своем первом компьютере. Это был примерно 2005 год.
        </Card.Text>
        <Card.Text>
          С тех пор технологии, используемые в Вебе, ушли далеко вперед, и я продолжаю заниматься разработкой веб-приложений, но уже профессионально и за деньги&#128578;.
        </Card.Text>
        <Button variant="secondary" onClick={aboutClick}>Обо мне</Button>
        &nbsp;
        <Button variant="primary" onClick={contactClick}>Связаться со мной</Button>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handlePhotoClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Image alt="Киселев Михаил Александрович, frontend разработчик" src={photo.src} width={"100%"} className="float-end"></Image>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handlePhotoClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  </>
}

export default Home
