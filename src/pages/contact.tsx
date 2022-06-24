import React from 'react'
import Head from 'next/head'

function Contact () {
  return <div>
    <Head>
      <title key="title">Контактная информация</title>
      <meta
            key="description"
            name="description"
            content="Как связаться с Михаилом Киселевым?"
        />
        <meta
            key="og:type"
            name="og:type"
            content="profile"
        />
        <meta
            key="og:title"
            name="og:title"
            content="Контактная информация"
        />
        <meta
            key="og:description"
            name="og:description"
            content="Как связаться с Михаилом Киселевым?"
        />
        <meta
            key="og:url"
            name="og:url"
            content="https://kiselev.su/contact"
        />
        <meta
            key="og:image"
            name="og:image"
            content=""
        />
    </Head>
    <p><a href="https://github.com/mikhail-a-kiselev">Github</a></p>
    <p><a href="https://tenchat.ru/MikhailKiselev">TenChat</a></p>
    <p><a href="https://vk.com/mikhail_kiselev">VK</a></p>
    <p><a href="https://ok.ru/mikhailkiselev">Odnoklassniki</a></p>
    <p><b>E-mail:</b> <a href="mailto:kiselev@simbirsk.ru">kiselev@simbirsk.ru</a></p>
  </div>
}

export default Contact
