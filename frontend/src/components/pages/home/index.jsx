import React from 'react'
import BooksCarousel from '../../shared/BooksCarousel'
import PopularBooks from '../../shared/PopularBooks'
import './style.css'

const books = [
  {
    id: 1,
    title: 'Знакомство с убийцей',
    author: 'Но Хёду',
    image: 'https://cv2.litres.ru/pub/c/cover_330/70740220.webp',
    cost: 34
  },
  {
    id: 2,
    title: 'God of Fury',
    author: 'Рина Кент',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNr9nokjWbzZ3hTlYVX36wsitRKRchWfnWloNCS1Sbnhy5iDO',
    cost: 30
  },
  {
    id: 3,
    title: 'Три года в аду. Как Светлана Богачева украла мою жизнь',
    author: 'Таня Щукина',
    image: 'https://cv0.litres.ru/pub/c/cover_415/70731301.webp',
    cost: 27
  },
  {
    id: 4,
    title: 'Лиллехейм. Волчий ветер',
    author: 'Николай Ободников',
    image:
      'https://s1.livelib.ru/boocover/1008326869/200x305/67be/boocover.jpg',
    cost: 40
  },
  {
    id: 5,
    title: 'Убийство в городе без имени',
    author: 'Кэйго Хигасино',
    image:
      'https://s1.livelib.ru/boocover/1008485845/200x305/b3d6/boocover.jpg',
    cost: 20
  },
  {
    id: 6,
    title: '451 градус по Фаренгейту',
    author: 'Рэй Брэдбери',
    image:
      'https://img3.labirint.ru/rc/6445287330f69f749824da9e16c381ab/363x561q80/books56/556173/cover.jpg?1565703130',
    cost: 27
  },
  {
    id: 7,
    title: 'Энн из Зелёных крыш',
    author: 'Люси Мод Монтгомери',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TqhzV2j8hMt3I-m2PkNN-5IVrW4EHACc-g&s',
    cost: 23
  },
  {
    id: 8,
    title: 'Медвежий угол',
    author: 'Фредрик Бакман',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXK4907vMs5CjLL0crfeSjwBRqq1NXmb0pg&s',
    cost: 30
  },
  {
    id: 9,
    title: 'Дракула',
    author: 'Брэм Стокер',
    image: 'https://s3-goods.ozstatic.by/2000/704/133/101/101133704_0.jpg',
    cost: 18
  },
  {
    id: 10,
    title: 'Гордость и предубеждение',
    author: 'Джейн Остин',
    image:
      'https://basket-01.wbbasket.ru/vol21/part2135/2135768/images/big/1.webp',
    cost: 21
  }
]
const popular = [
  {
    id: 1,
    title: '451 градус по Фаренгейту',
    price: 27,
    count: 100,
    image:
      'https://img3.labirint.ru/rc/6445287330f69f749824da9e16c381ab/363x561q80/books56/556173/cover.jpg?1565703130',
    text: 'Во время очередного рейда по наводке информаторши Клариссы «пожарные» находят невероятно большую библиотеку, и служащий Гай Монтэг из любопытства оставляет одну книгу себе. Немного почитав и подружившись с Клариссой, парень начинает сомневаться в правильности своей жизни.',
    new: 'Новинка',
    author: 'Рэй Брэдбери'
  },
  {
    id: 3,
    title: 'Энн из Зелёных крыш',
    price: 23,
    count: 100,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TqhzV2j8hMt3I-m2PkNN-5IVrW4EHACc-g&s',
    text: 'Люси Мод Монтгомери (1874-1942) – канадская писательница, известная прежде всего благодаря своим романам об Энн Ширли, рыжеволосой девочке-сироте, случайно попавшей из приюта на ферму к пожилым брату и сестре Марилле и Мэтью Касбертам.',
    new: 'Новинка',
    author: 'Люси Мод Монтгомери'
  },
  {
    id: 4,
    title: 'Убить пересмешника',
    price: 25,
    count: 100,
    image: 'https://ir.ozone.ru/s3/multimedia-0/c1000/6008637408.jpg',
    text: 'Главная героиня романа – десятилетняя девочка Джин Финч, которая живет со своей семьей в небольшом городке американского юга. События книги рассказываются от ее лица. Каждая глава пропитана теплом, любовью и юмором – и вместе с тем Харпер Ли говорит с читателями на очень серьезные темы, такие как ксенофобия, расизм, нетерпимость и ханженство. Отец Джил, Аттикус, защищавший в суде чернокожего парня в те времена, когда это было попросту немыслимо, стал настоящим символом, великолепным примером честного и принципиального адвоката, ставящем справедливость превыше всего.',
    new: '',
    sale: 10,
    author: 'Харпер Ли'
  },
  {
    id: 5,
    title: 'Маленький принц',
    price: 30,
    count: 100,
    image:
      'https://img3.labirint.ru/rc/ab8aeade00e5e03d92372d7a62cfe00c/363x561q80/books81/805209/cover.jpg?1623760204',
    text: '"Все мы родом из детства", – напоминает писатель и знакомит нас с самым загадочным, трогательным и бесконечно хрупким существом по имени Маленький принц. При всей своей беззащитности, Маленький принц непримирим к жадности и честолюбию. Перед силой его доброты и простодушной мудрости отступает даже сама желтая змейка – смерть, пока Маленький принц не призывает ее к себе, чтобы такой ценой спасти любимое существо, которое он приручил.',
    new: '',
    sale: 11,
    author: 'Антуан де Сент-Экзюпери'
  }
]

const Home = () => {
  return (
    <div>
      <div>
        <main className='main'>
          <h1 style={{ paddingLeft: 20 }}>Последние выпуски</h1>
          <BooksCarousel books={books} />

          <h1 style={{ paddingLeft: 20 }}>Популярное</h1>
          <PopularBooks popular={popular} />
        </main>
      </div>
    </div>
  )
}

export default Home
