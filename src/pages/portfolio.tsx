import React from 'react'
import { Card, Col, Row, Carousel } from 'react-bootstrap'
import Head from 'next/head'

import widget1 from '../assets/img/portfolio/widget1.png'
import widget2 from '../assets/img/portfolio/widget2.png'
import widget3 from '../assets/img/portfolio/widget3.png'
import widget4 from '../assets/img/portfolio/widget4.png'

import uk1 from '../assets/img/portfolio/uk1.png'
import uk2 from '../assets/img/portfolio/uk2.png'
import uk3 from '../assets/img/portfolio/uk3.png'
import uk4 from '../assets/img/portfolio/uk4.png'
import uk5 from '../assets/img/portfolio/uk5.png'

import childrenscience1 from '../assets/img/portfolio/childrenscience1.png'
import childrenscience2 from '../assets/img/portfolio/childrenscience2.png'
import childrenscience3 from '../assets/img/portfolio/childrenscience3.png'
import childrenscience4 from '../assets/img/portfolio/childrenscience4.png'
import childrenscience5 from '../assets/img/portfolio/childrenscience5.png'
import childrenscience6 from '../assets/img/portfolio/childrenscience6.png'

type projectsItem = {
  title: string,
  description: string
  technologies: string[]
  pics: string[],
  site: string,
  siteExists: boolean
}
function Portfolio () {
  const projects: projectsItem[] = [
    {
      title: 'Виджет ЖК.онлайн',
      description: 'Виджет, который встраивался в сайты управляющих компаний и поставщиков услуг. При инициализации задавались параметры (идентификатор компании, можно ограничить зону поиска адресов по FIAS ID и номерам домов, можно указать цвета, используемые в виджете). Виджет позволял получить счета и совершать оплату (по счету, вводом суммы вручную) прямо в виджете с помощью CloudPayments, а также передавать показания счетчиков.',
      technologies: ['React', 'Redux', 'Sagas', 'Typescript', 'SASS', 'REST API'],
      pics: [widget1.src, widget2.src, widget3.src, widget4.src],
      site: 'https://demo.zhk.online',
      siteExists: false
    },
    {
      title: 'Веб-кабинет ЖК.онлайн',
      description: 'Веб-кабинет для жителей повторял функционал приложения. Добавление квартир, поиск услуг, добавление услуг вручную, поиск счетчиков, добавление счетчиков вручную, получение счетов, оплата одной суммой, оплата с вводом суммы вручную, передача показаний.',
      technologies: ['React', 'Redux', 'Sagas', 'Typescript', 'SASS', 'REST API'],
      pics: [],
      site: 'https://zhk.online',
      siteExists: false
    },
    {
      title: 'CRM для управляющих компаний ЖК.онлайн',
      description: 'CRM для УК с диспетчерской, сервисом проведения общих собраний собственников (в т.ч. заочное голосование)',
      technologies: ['React', 'REST API'],
      pics: [uk1.src, uk2.src, uk3.src, uk4.src, uk5.src],
      site: 'https://uk.zhk.online',
      siteExists: false
    },
    {
      title: 'Дети и Наука',
      description: 'Интерактивные задания для детей. Размещаются на сайтах через IFrame. Часть заданий разработано на основе собственного фреймворка (использовались только JS, CSS, JQuery), задания по астрономии с использованием фреймворка на основе Vue.js.',
      technologies: ['Vanilla JS', 'JQuery', 'Grunt', 'Vue', 'SASS', 'PUB'],
      pics: [childrenscience1.src, childrenscience2.src, childrenscience3.src, childrenscience4.src, childrenscience5.src, childrenscience6.src],
      site: 'https://okrmir.cpm77.ru/',
      siteExists: true
    },
    {
      title: 'Мобильные игры (Phonegap/Cordova)',
      description: 'Мобильные игры для Android и Windows Phone. Написаны на JavaScript.',
      technologies: ['Vanilla JS', 'CSS', 'Cordova', 'Java'],
      pics: [],
      site: 'http://code-mech.com',
      siteExists: true
    }
  ]
  return <>
    <Head>
      <title key="title">Портфолио Михаила Киселева</title>
      <meta
            key="description"
            name="description"
            content="Работы Киселева Михаила Александровича"
        />
        <meta
            key="og:type"
            name="og:type"
            content="profile"
        />
        <meta
            key="og:title"
            name="og:title"
            content="Портфолио Михаила Киселева"
        />
        <meta
            key="og:description"
            name="og:description"
            content="Работы Киселева Михаила Александровича"
        />
        <meta
            key="og:url"
            name="og:url"
            content="https://kiselev.su/portfolio"
        />
        <meta
            key="og:image"
            name="og:image"
            content=""
        />
    </Head>
    <Row>
      {projects.map((item, i) => {
        return <Col xs={12} sm={6} md={4} className="mb-3" key={i}>
          <Card>
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
              {item.pics.length
                ? (
              <Carousel>
                {item.pics.map((pic, j) => {
                  return <Carousel.Item key={j}>
                    <img
                        className="d-block w-100"
                        src={pic}
                        alt={item.title}
                    />
                    </Carousel.Item>
                })}
              </Carousel>
                  )
                : (
                    ''
                  )
              }
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      })}
    </Row>
    <style jsx>{`

    `}</style>
  </>
}

export default Portfolio
