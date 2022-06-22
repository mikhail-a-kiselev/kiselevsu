import React from 'react'
import { Card, ListGroup, Row, Col, Image } from 'react-bootstrap'

type EducationItem = {
  from: number,
  to: number,
  title: string,
  image: any,
  site: any,
  siteExists:boolean,
  location: string,
  faculty: any,
  speciality: string,
  value: string,
  description: string
};
type WorkItem = {
  from: number,
  to: number,
  title: string,
  image: any,
  site: any,
  siteExists: boolean,
  company: string,
  companyOGRN: number,
  companyDescription:string,
  location: string,
  position: string,
  positionDescription: string,
  description: any
};

function GetWorkItem (item: WorkItem, key:any) {
  const ogrn = item.companyOGRN.toString()
  return <ListGroup.Item>
    <Row>
      <Col md={3} xl={2}>
        <Card.Title>
          <Image roundedCircle={true} />
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
        {item.site ? <p><b>Сайт:</b> {item.siteExists ? <a target="_blank" rel="noreferrer" href={item.site}>{new URL(item.site).host}</a> : <span title="Сайт в настоящее время не работает" className="text-muted">{new URL(item.site).host}</span>}</p> : ''}
        <p><b>Позиция:</b> {item.position} {item.positionDescription.length ? <span className="text-muted">({item.positionDescription})</span> : ''}</p>
        {item.description}
      </Col>
    </Row>
  </ListGroup.Item>
}
function GetEducationItem (item: EducationItem, key:any) {
  return <ListGroup.Item key={key}>
    <Row>
      <Col xs={12}>
      <Card.Title>{item.title}</Card.Title>
      </Col>
      <Col md={3}>
        {item.from.toString()} - {item.to.toString()}
      </Col>
      <Col md={9}></Col>
    </Row>
  </ListGroup.Item>
}

function About () {
  const education = [
    {
      from: 1996,
      to: 2006,
      title: 'Средняя общеобразовательная школа №52',
      image: false,
      site: 'http://sci-service.info',
      siteExists: false,
      location: 'Ульяновск',
      faculty: false,
      speciality: 'Программное обеспечение вычислительной техники и автоматизированных систем',
      value: 'среднее',
      description: 'Колледжный класс, т.е. в 10-11 класах проводились дополнительные занятия по специальности «Программное обеспечение ВТ и АС», что засчитывалось за один курс коллежда.'
    }
  ]
  const work = [
    {
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
      description: <div>
        <p>Разработка интерактивных заданий для проекта Дети и наука (на собственном фреймворке и на новом, основанном на vue.js).</p>
        <p>Работы по поддержанию ИТ-инфраструктуры.</p>
      </div>
    },
    {
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
      description: 'Добавление фич в панель управления Headless CMS. Используется React-Admin.'
    },
    {
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
      description: <div>
        <p>Магазин формата у дома. Реклама, аналитика, контроль.</p>
      </div>
    },
    {
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
      description: <div>
        <p>Фронтенд и бэкенд, основа - Bitrix. Проект включал два сайта с общей авторизацией: ярмарку (т.е. обычный интернет-магазин готовых овощей и фруктов) и ферму (т.е. покупатель оформляет заказ, например, покупает дерево, фермер это дерево сажает, обеспечивает уход, урожай отправляется почтой). Если с первым все понятно, то со вторым очень много нюансов.</p>
        <p>Текущий сайт компании делал уже кто-то другой, того функционала там нет.</p>
      </div>
    },
    {
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
      </div>
    },
    {
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
      description: 'Работа над проектом ЖК.онлайн (ранее назывался Оплачу)'
    },
    {
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
        <p><b>Московский Регистр Качества Образования (МРКО).</b> Исправление багов и добавление новых фич в дневниках. Все самописное, PHP+MySQL, накопился большой технический долг. Fullstack.</p>
        <p><b>Lorus SCM.</b> CRM логистической компании. Исправление багов, реализация новых фич. Frontend, React + Redux.</p>
        <p><b>Дети и Наука.</b>Мной написан фреймворк для быстрой разработки интерактивных заданий (прямо в HTML файле заполняется JSON, пишутся недостающие стили, если нет виджета с необходимым функционалом и он в будущем не будет переиспользован, пишется кастомный виджет). Выпущено несколько версий. Разработано несколько сотен интерактивов.
        Интерактивы с бэкендом не взаимодействуют. Frontend.
        </p>
        <p>Также были небольшие проекты, такие как лендинги, доработки интернет-магазинов и т.п.</p>
      </div>
    },
    {
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
      description: 'Служба курьерской доставки'
    },
    {
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
      description: 'Специфическая работа по обслуживанию клиентов мобильной связи МТС'
    },
    {
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
      description: 'Интернет-магазин компьютерной техники, ПО и аксессуаров. Использовался Opencart, интеграция с Webmoney и Qiwi.'
    },
    {
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
      description: 'Выпуск и продажа дисков со свободным ПО для Windows.'
    },
    {
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
      description: 'Облуживание вычислительной техники, разработка ПО, поддержка сайтов компании'
    }
  ]
  return <div>
    <Card>
      <Card.Body>
        Киселев Михаил Александрович <br />
        Родился 22 августа 1989 года в г. Ульяновске <br />
        Проживаю в Ульяновске
      </Card.Body>
    </Card>
    <p></p>
    <Card>
      <Card.Header>Образование</Card.Header>
      <ListGroup variant="flush">
        {education.map((item: EducationItem, key: any) => {
          return GetEducationItem(item, key)
        })}
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Title>Образование</Card.Title>
        <Card.Text>3 класса церковно-приходской школы</Card.Text>
      </Card.Body>
    </Card>
    <p></p>
    <Card>
      <Card.Header>Опыт работы</Card.Header>
      <ListGroup variant="flush">
        {work.map((item:WorkItem, key: any) => {
          return GetWorkItem(item, key)
        })}
      </ListGroup>
    </Card>
  </div>
}

export default About
