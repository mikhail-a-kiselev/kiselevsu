import React, { useState } from 'react'
import { Card, ListGroup, Row, Col } from 'react-bootstrap'
import Head from 'next/head'
import jsxToString from 'react-element-to-jsx-string'
import FilterInput from '../components/filterInput'

type EducationItem = {
  key: number,
  from: number,
  to: number,
  title: string,
  image: Partial<string & boolean>,
  site: Partial<string & boolean>,
  siteExists: boolean,
  location: string,
  faculty: Partial<string & boolean>,
  department: Partial<string & boolean>,
  speciality: string,
  value: string,
  description: string,
  tags: string
};
type WorkItem = {
  key: number,
  from: number,
  to: number,
  title: string,
  image: Partial<string & boolean>,
  site: Partial<string & boolean>,
  siteExists: boolean,
  company: string,
  companyOGRN: number,
  companyDescription:string,
  location: string,
  position: string,
  positionDescription: string,
  description: any,
  tags: string
};

function checkItem (item: Partial<WorkItem & EducationItem>, str: string) {
  const values = Object.values(item)
  let correct = str.length === 0
  values.map((val) => {
    if ((typeof val === 'string' || typeof val === 'number') && val.toString().toLowerCase().includes(str.toLowerCase())) {
      correct = true
    } else if (typeof val === 'object' && jsxToString(val).toLowerCase().includes(str.toLowerCase())) {
      correct = true
    }
    return []
  })
  return correct
}

function GetSiteLink (site: any, exists: boolean) {
  return <p><b>Сайт:</b> {exists ? <a target="_blank" rel="noreferrer" href={site}>{new URL(site).host}</a> : <span title="Сайт в настоящее время не работает" className="text-muted">{new URL(site).host}</span>}</p>
}

function GetWorkItem (item: WorkItem) {
  const ogrn = item.companyOGRN.toString()
  return <ListGroup.Item key={item.key}>
    <Row>
      <Col md={3} xl={2}>
        <Card.Title>
          {item.title}
        </Card.Title>
        <Card.Subtitle>
          <a target="_blank" rel="noreferrer" href={ogrn.length === 13 ? 'https://zachestnyibiznes.ru/company/ul/' + ogrn : 'https://zachestnyibiznes.ru/company/ip/' + ogrn}>{item.company}</a>
        </Card.Subtitle>
        {item.location}
        <br />
        {item.from.toString()}{item.from !== item.to ? ' - ' + item.to.toString() : ''}
      </Col>
      <Col md={9} xl={10}>
        {item.companyDescription.length ? <p>{item.companyDescription}</p> : ''}
        {item.site ? GetSiteLink(item.site, item.siteExists) : ''}
        <p><b>Позиция:</b> {item.position} {item.positionDescription.length ? <span className="text-muted">({item.positionDescription})</span> : ''}</p>
        {item.description}
      </Col>
    </Row>
  </ListGroup.Item>
}
function GetEducationItem (item: EducationItem) {
  return <ListGroup.Item key={item.key}>
    <Row>
      <Col md={3} xl={2}>
        <Card.Title>{item.title}</Card.Title>
        {item.location}<br />
        {item.from.toString()}{item.from !== item.to ? ' - ' + item.to.toString() : ''}
      </Col>
      <Col md={9} xl={10}>
        {item.site ? GetSiteLink(item.site, item.siteExists) : ''}
        {item.faculty ? <p><b>Факультет:</b> {item.faculty}</p> : ''}
        {item.department ? <p><b>Кафедра:</b> {item.department}</p> : ''}
        {item.speciality ? <p><b>Специальность:</b> {item.speciality}</p> : ''}
        {item.value ? <p><b>Образование:</b> {item.value}</p> : ''}
        {item.description ? item.description : ''}
      </Col>
    </Row>
  </ListGroup.Item>
}

function About () {
  const [workFilter, setWorkFilter] = useState<string>('')
  const [educationFilter, setEducationFilter] = useState<string>('')
  const [workFilterShow, setWorkFilterShow] = useState<boolean>(false)
  const [educationFilterShow, setEducationFilterShow] = useState<boolean>(false)
  const changeWorkFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkFilter(event.target.value)
  }
  const changeEducationFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducationFilter(event.target.value)
  }
  const clickShowWorkFilter = () => {
    if (workFilterShow) {
      setWorkFilter('')
    }
    setWorkFilterShow(!workFilterShow)
  }
  const clickShowEducationFilter = () => {
    if (educationFilterShow) {
      setEducationFilter('')
    }
    setEducationFilterShow(!educationFilterShow)
  }
  const education = [
    {
      key: 4,
      from: 2011,
      to: 2014,
      title: 'Институт Международного Права и Экономики им. А.С.Грибоедова (ульяновский филиал)',
      image: false,
      site: 'http://iile.ru',
      siteExists: true,
      location: 'Ульяновск',
      faculty: 'экономический',
      department: 'менеджмента и управления персоналом',
      speciality: 'Менеджмент организации',
      value: 'высшее (бакалавр)',
      description: 'Ускоренное отделение, т.к. уже было высшее образование.',
      tags: 'ИМПЭ'
    },
    {
      key: 3,
      from: 2008,
      to: 2011,
      title: 'Ульяновский Государственный Университет',
      image: false,
      site: 'http://ulsu.ru',
      siteExists: true,
      location: 'Ульяновск',
      faculty: 'математики и информационных технологий (ФМиИТ)',
      department: 'информационных технологий',
      speciality: 'Прикладная информатика',
      value: 'высшее (специалист)',
      description: 'Ускоренное отделение, т.к. было профильное среднее специальное образование.',
      tags: 'УлГу'
    },
    {
      key: 2,
      from: 2006,
      to: 2008,
      title: 'Высший колледж УлГУ «Засвияжье»',
      image: false,
      site: 'http://vkzas.ulsu.ru',
      siteExists: false,
      location: 'Ульяновск',
      faculty: false,
      department: false,
      speciality: 'Программное обеспечение вычислительной техники и автоматизированных систем',
      value: 'среднее специальное (техник)',
      description: 'Программа предусматривала три года обучения, но занятия по первому курсу мы прошли параллельно обучению в школе.',
      tags: 'ВК Засвияжье'
    },
    {
      key: 1,
      from: 1996,
      to: 2006,
      title: 'Средняя школа №52',
      image: false,
      site: false,
      siteExists: false,
      location: 'Ульяновск',
      faculty: false,
      department: false,
      speciality: 'Программное обеспечение вычислительной техники и автоматизированных систем',
      value: 'среднее',
      description: 'Колледжный класс, т.е. в 10-11 класах проводились дополнительные занятия по специальности «Программное обеспечение ВТ и АС», что засчитывалось за один курс коллежда.',
      tags: 'МОУ СОШ средняя общеобразовательная школа'
    }
  ]
  const work = [
    {
      key: 12,
      from: 2021,
      to: 2022,
      title: 'ИП Киселев',
      image: false,
      site: false,
      siteExists: false,
      company: 'ИП Киселев М.А.',
      companyOGRN: 321732500012734,
      companyDescription: '',
      location: 'Ульяновск',
      position: 'Индивидуальный предприниматель',
      positionDescription: 'Frontend',
      description: 'Разработка интерактивных заданий для проекта Дети и наука (по окружающему миру на собственном фреймворке и по астрономии на новом, основанном на vue.js). Данные интерактивы использовались и используются на нескольких образовательных платформах, в том числе в Яндекс.Учебнике. Работы по поддержанию ИТ-инфраструктуры.',
      tags: 'ДиН Childrenscience okrmir okrumir'
    },
    {
      key: 11,
      from: 2022,
      to: 2022,
      title: 'AZdoc',
      image: false,
      site: 'https://azdoc.online/',
      siteExists: true,
      company: 'ООО Симбирит',
      companyOGRN: 1077325005009,
      companyDescription: 'Облачный бэкэнд для мобильных и веб‑приложений.',
      location: 'Ульяновск',
      position: 'По договору ГПХ',
      positionDescription: 'frontend',
      description: 'Добавление фич в панель управления Headless CMS. Используется React-admin.',
      tags: 'Симбирские информационные технологии'
    },
    {
      key: 10,
      from: 2021,
      to: 2022,
      title: 'ОВОЩНОЙ73.РФ',
      image: false,
      site: 'https://ovo73.ru/',
      siteExists: true,
      company: 'ИП Киселев М.А.',
      companyOGRN: 321732500012734,
      companyDescription: '',
      location: 'Ульяновск',
      position: 'Индивидуальный предприниматель',
      positionDescription: 'Founder, CEO',
      description: 'Магазин формата «у дома». Реклама, аналитика, контроль.',
      tags: ''
    },
    {
      key: 9,
      from: 2020,
      to: 2021,
      title: 'Sreda',
      image: false,
      site: 'https://sreda.one/',
      siteExists: true,
      company: 'ООО Эко-Сад',
      companyOGRN: 1207700340320,
      companyDescription: 'Стартап, основанный одним из топ-менеджеров Почта Банка, изначально позиционировался как онлайн-дача, т.е. то место, где пользователь может самостоятельно вырастить и получить экологически чистые овощи и фрукты.',
      location: 'Москва (удаленно)',
      position: 'Инженер-программист',
      positionDescription: 'Fullstack',
      description: 'Фронтенд и бэкенд, основа - Bitrix. Проект включал два сайта с общей авторизацией: ярмарку (т.е. обычный интернет-магазин готовых овощей и фруктов) и ферму (т.е. покупатель оформляет заказ, например, покупает дерево, фермер это дерево сажает, обеспечивает уход, урожай отправляется почтой). Если с первым все понятно, то со вторым очень много нюансов.',
      tags: 'Среда'
    },
    {
      key: 8,
      from: 2019,
      to: 2020,
      title: 'ЖК.онлайн',
      image: false,
      site: 'https://zhk.online/',
      siteExists: false,
      company: 'ООО ЖК.ОНЛАЙН',
      companyOGRN: 1197325009518,
      companyDescription: 'Дочерняя компания CloudPayments, стартап в сфере ЖКХ (бывшее Оплачу)',
      location: 'Ульяновск',
      position: 'Инженер-программист',
      positionDescription: 'Frontend',
      description: <div>
        <p><b>Виджет</b> (скрипт, который встраивается в сайт управляющей компании или поставщика услуг). Позволяет оплатить услуги ЖКХ (картой, Apple/Google pay) и передать показания счетчиков, не покидая сайт. Делал с нуля. React+Redux.</p>
        <p>Ранее был старый виджет оплаты (после выбора счета или ввода суммы вручную перенаправлял на сайт личного кабинета).</p>
        <p><b>Личный кабинет.</b> Уже был. Дублирует функционал мобильного приложения (регистрация, добавление квартиры, добавление услуг, получение и просмотр счетов, передача показаний, оплата). React+Redux.</p>
        <p><b>CRM для управляющих компаний.</b> Новости компании, диспетчерская (с приемом звонков, подключением мессенджеров), инструмент для проведения общих собраний собственников, загрузка реестров, онлайн-касса, сотрудники с ролями и т.п. React. Интеграции с Dadata, Pact и другими сервисами.</p>
        <p>Установка виджета на сайтах в особо сложных случаях.</p>
        <p>Везде один и тот же бэкенд, REST JSON API.</p>
      </div>,
      tags: 'Оплачу ЖКХ Тинькофф Тиньков'
    },
    {
      key: 7,
      from: 2019,
      to: 2019,
      title: 'CloudPayments',
      image: false,
      site: 'https://cloudpayments.ru/',
      siteExists: true,
      company: 'ООО КЛАУДПЭЙМЕНТС',
      companyOGRN: 1147746077159,
      companyDescription: 'Дочерняя компания TCS Group Holding PLC (Тинькофф), интернет-эквайринг',
      location: 'Москва (удаленно)',
      position: 'по договору ГПХ',
      positionDescription: 'Frontend',
      description: 'Работа над проектом ЖК.онлайн (ранее назывался Оплачу)',
      tags: 'Оплачу ЖКХ Тинькофф Тиньков'
    },
    {
      key: 6,
      from: 2014,
      to: 2019,
      title: 'Симбирские информационные технологии',
      image: false,
      site: 'http://simbirit.ru',
      siteExists: true,
      company: 'ООО Симбирит',
      companyOGRN: 1077325005009,
      companyDescription: 'Компания основана в 2007 как российская ветвь XIM Inc (США, Калифорния, Сан-Франциско).',
      location: 'Ульяновск',
      position: 'Инженер-программист',
      positionDescription: 'frontend, backend',
      description: <div>
        <p><b>ФГИС Росаккредитации.</b> Изначально пришел в компанию как php разработчик на этот проект. Проект на основе Symphony.</p>
        <p><b>Sunsay.</b> Рекламный нетворк (баннеры в мобильных приложениях), бэкофис. Ruby On Rails. Fullstack.</p>
        <p><b>Мобильные игры на Phonegap (Cordova).</b> Линии классические (Lines Classic), Аквалинии (Aqualines), 3 спартанца (3 spartans), Trivia Land, Flipix.
        По своей сути это фронтенд, но при отсутствии нужных плагинов приходилось их делать самостоятельно (Android, Java). В качестве бэкенда использовали MongoLab.
        </p>
        <p><b>Московский Регистр Качества Образования (МРКО).</b> Исправление багов и добавление новых фич в дневниках московских школ. Все самописное, PHP+MySQL, на тот момент в проекте накопился большой технический долг. Fullstack.</p>
        <p><b>Lorus SCM.</b> CRM логистической компании. Исправление багов, реализация новых фич. Frontend, React + Redux.</p>
        <p><b>Дети и Наука.</b>Мной написан фреймворк для быстрой разработки интерактивных заданий (прямо в HTML файле заполняется JSON, пишутся недостающие стили, если нет виджета с необходимым функционалом и он в будущем не будет переиспользован, пишется кастомный виджет). Выпущено несколько версий. Разработано несколько сотен интерактивов.
        Интерактивы с бэкендом не взаимодействуют. Данные интерактивы используются в нескольких образовательных платформах, в том числе Центр Педагогического Мастерства и Яндекс.Учебник. Frontend.
        </p>
        <p>Также были небольшие проекты, такие как лендинги, доработки интернет-магазинов и т.п.</p>
      </div>,
      tags: 'Симбирские информационные технологии codemech Code Mechanics'
    },
    {
      key: 5,
      from: 2012,
      to: 2013,
      title: 'Симбирск доставка',
      image: false,
      site: 'http://simbirskdostavka.ru',
      siteExists: false,
      company: 'ИП Киселев М.А.',
      companyOGRN: 310732710400030,
      companyDescription: '',
      location: 'Ульяновск',
      position: 'Индивидуальный предприниматель',
      positionDescription: 'Founder, CEO',
      description: 'Служба курьерской доставки',
      tags: ''
    },
    {
      key: 4,
      from: 2011,
      to: 2012,
      title: 'МТС',
      image: false,
      site: 'https://mts.ru',
      siteExists: true,
      company: 'ОАО МТС',
      companyOGRN: 1027700149124,
      companyDescription: '',
      location: 'Ульяновск',
      position: 'Специалист ГОСЗ/ОИО',
      positionDescription: 'Группа Обработки Сервисных Запросов, Отдел Информационного Обслуживания',
      description: 'Специфическая работа по обслуживанию клиентов мобильной связи МТС',
      tags: 'Мобильные ТелеСистемы Mobile telesystems'
    },
    {
      key: 3,
      from: 2011,
      to: 2013,
      title: 'SoftSeller.Su',
      image: false,
      site: 'http://softseller.su',
      siteExists: false,
      company: 'ИП Киселев М.А.',
      companyOGRN: 310732710400030,
      companyDescription: '',
      location: 'Ульяновск',
      position: 'Индивидуальный предприниматель',
      positionDescription: 'Founder, CEO',
      description: 'Интернет-магазин компьютерной техники, ПО и аксессуаров. Использовался Opencart, интеграция с Webmoney и Qiwi.',
      tags: 'ecommerce'
    },
    {
      key: 2,
      from: 2010,
      to: 2013,
      title: 'GetWhite',
      image: false,
      site: 'https://getwhite.ru',
      siteExists: true,
      company: 'ИП Киселев М.А.',
      companyOGRN: 310732710400030,
      companyDescription: '',
      location: 'Ульяновск',
      position: 'Индивидуальный предприниматель',
      positionDescription: 'Founder, CEO',
      description: 'Выпуск и продажа дисков со свободным ПО для Windows.',
      tags: 'ecommerce'
    },
    {
      key: 1,
      from: 2008,
      to: 2008,
      title: 'SCI-сервис',
      image: false,
      site: 'http://sci-service.info',
      siteExists: false,
      company: 'ИП Семенов С.Е.',
      companyOGRN: 308732709200110,
      companyDescription: '',
      location: 'Ульяновск',
      position: 'Программист',
      positionDescription: 'Delphi, Web',
      description: 'Облуживание вычислительной техники, разработка ПО, поддержка сайтов компании',
      tags: ''
    }
  ]
  return <>
    <Head>
      <title key="title">Киселев Михаил Александрович (Ульяновск), образование и опыт работы</title>
      <meta
            key="description"
            name="description"
            content="Подробная информация об образовании и опыте работы"
        />
        <meta
            key="og:type"
            name="og:type"
            content="profile"
        />
        <meta
            key="og:title"
            name="og:title"
            content="Киселев Михаил Александрович, образование и опыт работы"
        />
        <meta
            key="og:description"
            name="og:description"
            content="Подробная информация об образовании и опыте работы"
        />
        <meta
            key="og:url"
            name="og:url"
            content="https://kiselev.su/about"
        />
        <meta
            key="og:image"
            name="og:image"
            content=""
        />
    </Head>
    <Card>
      <Card.Body>
        Киселев Михаил Александрович <br />
        Родился 22 августа 1989 года в г. Ульяновске <br />
        Проживаю в Ульяновске
      </Card.Body>
    </Card>
    <p></p>
    <Card>
      <Card.Header>
        Опыт работы
        <FilterInput onClick={clickShowWorkFilter} onChange={changeWorkFilter} value={workFilter} show={workFilterShow} />
      </Card.Header>
      <ListGroup variant="flush">
        {work.filter((item: WorkItem) => { return checkItem(item, workFilter) }).map((item: WorkItem) => {
          return GetWorkItem(item)
        })}
      </ListGroup>
    </Card>
    <p></p>
    <Card>
      <Card.Header>
        Образование
        <FilterInput onClick={clickShowEducationFilter} onChange={changeEducationFilter} value={educationFilter} show={educationFilterShow} />
      </Card.Header>
      <ListGroup variant="flush">
        {education.filter((item: EducationItem) => { return checkItem(item, educationFilter) }).map((item: EducationItem) => {
          return GetEducationItem(item)
        })}
      </ListGroup>
    </Card>
  </>
}

export default About
