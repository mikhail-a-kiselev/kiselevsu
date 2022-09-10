import React from 'react'
import { Card, Col, Row, Carousel, Badge } from 'react-bootstrap'
import SiteLink from '../components/siteLink'
import { Site } from '../types/simple'
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

import linesclassic1 from '../assets/img/portfolio/linesclassic1.jpg'
import linesclassic2 from '../assets/img/portfolio/linesclassic2.jpg'
import linesclassic3 from '../assets/img/portfolio/linesclassic3.jpg'
import trivialand1 from '../assets/img/portfolio/trivialand1.jpg'
import trivialand2 from '../assets/img/portfolio/trivialand2.jpg'
import trivialand3 from '../assets/img/portfolio/trivialand3.jpg'
import aqualines1 from '../assets/img/portfolio/aqualines1.jpg'
import aqualines2 from '../assets/img/portfolio/aqualines2.jpg'
import aqualines3 from '../assets/img/portfolio/aqualines3.jpg'
import aqualines4 from '../assets/img/portfolio/aqualines4.jpg'
import spartans1 from '../assets/img/portfolio/3spartans1.jpg'
import spartans2 from '../assets/img/portfolio/3spartans2.jpg'
import spartans3 from '../assets/img/portfolio/3spartans3.jpg'

import fsa from '../assets/img/portfolio/fsa.png'

type projectsItem = {
  key: number,
  title: string,
  description: string
  technologies: string[]
  pics: string[],
  site: Site
}
function Portfolio () {
  const projects: projectsItem[] = [
    {
      key: 6,
      title: 'Виджет ЖК.онлайн',
      description: 'Виджет, который встраивался в сайты управляющих компаний и поставщиков услуг. При инициализации задавались параметры (идентификатор компании, можно ограничить зону поиска адресов по FIAS ID и номерам домов, можно указать цвета, используемые в виджете). Виджет позволял получить счета и совершать оплату (по счету, вводом суммы вручную) прямо в виджете с помощью CloudPayments, а также передавать показания счетчиков.',
      technologies: ['React', 'Redux', 'Sagas', 'Typescript', 'SASS', 'REST API'],
      pics: [widget1.src, widget2.src, widget3.src, widget4.src],
      site: {
        url: 'https://demo.zhk.online',
        exists: false
      }
    },
    /* {
      key: 5,
      title: 'Веб-кабинет ЖК.онлайн',
      description: 'Веб-кабинет для жителей повторял функционал приложения. Добавление квартир, поиск услуг, добавление услуг вручную, поиск счетчиков, добавление счетчиков вручную, получение счетов, оплата одной суммой, оплата с вводом суммы вручную, передача показаний.',
      technologies: ['React', 'Redux', 'Sagas', 'Typescript', 'SASS', 'REST API'],
      pics: [],
      site: 'https://zhk.online',
      siteExists: false
    }, */
    {
      key: 4,
      title: 'CRM для управляющих компаний ЖК.онлайн',
      description: 'CRM для УК с диспетчерской (Kanban-доска), сервисом проведения общих собраний собственников (в т.ч. заочное голосование), загрузкой реестров платежей',
      technologies: ['React', 'REST API'],
      pics: [uk1.src, uk2.src, uk3.src, uk4.src, uk5.src],
      site: {
        url: 'https://uk.zhk.online',
        exists: false
      }
    },
    {
      key: 3,
      title: 'Дети и Наука',
      description: 'Интерактивные задания для детей. Размещаются на сайтах через IFrame. Часть заданий разработано на основе собственного фреймворка (использовались только JS, CSS, JQuery), задания по астрономии с использованием фреймворка на основе Vue.js.',
      technologies: ['Vanilla JS', 'JQuery', 'Grunt', 'Vue', 'SASS', 'PUB'],
      pics: [childrenscience1.src, childrenscience2.src, childrenscience3.src, childrenscience4.src, childrenscience5.src, childrenscience6.src],
      site: {
        url: 'https://okrmir.cpm77.ru/',
        exists: true
      }
    },
    {
      key: 2,
      title: 'Мобильные игры (Phonegap/Cordova)',
      description: 'Мобильные игры для Android и Windows Phone. Написаны на JavaScript.',
      technologies: ['Vanilla JS', 'CSS', 'Cordova', 'Java'],
      pics: [
        linesclassic1.src, linesclassic2.src, linesclassic3.src,
        trivialand1.src, trivialand2.src, trivialand3.src,
        aqualines1.src, aqualines2.src, aqualines3.src, aqualines4.src,
        spartans1.src, spartans2.src, spartans3.src
      ],
      site: {
        url: 'http://code-mech.com',
        exists: true
      }
    },
    {
      key: 1,
      title: 'ФГИС Росаккредитации',
      description: 'Подсистема для обработки заявок и заявлений с ролевой моделью доступа на основе Symphony',
      technologies: ['JS', 'CSS', 'PHP', 'Symphony'],
      pics: [
        fsa.src
      ],
      site: {
        url: 'http://fsa.gov.ru',
        exists: true
      }
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
            {(() => {
              switch (item.pics.length) {
                case 0:
                  return ''
                case 1:
                  return <div style={{ backgroundImage: `url('${item.pics[0]}')` }} className="carousel-item-image"></div>
                default:
                  return <Carousel>
                  {item.pics.map((pic, j) => {
                    return <Carousel.Item key={j}>
                      <div style={{ backgroundImage: `url('${pic}')` }} className="carousel-item-image"></div>
                      </Carousel.Item>
                  })
                }
                </Carousel>
              }
            })()
            }
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            {item.technologies.map((technology) => {
              return <><Badge bg="primary">{technology}</Badge> </>
            })}
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {typeof item.site === 'boolean' ? '' : <SiteLink site={item.site}></SiteLink>}
            </Card.Footer>
          </Card>
        </Col>
      })}
    </Row>
    <style jsx>{`
      .carousel-item-image {
        width: 100%;
        height: 200px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        background-color: rgba(0,0,0,.15);
      }
    `}</style>
  </>
}

export default Portfolio
