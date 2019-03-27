const importAll = r => {
  let images = {}
  r.keys().forEach(item => {
    images[item.replace('./', '')] = r(item)
  })

  return images
}

const images = importAll(
  require.context('./Img/Gallery', false, /\.(png|jpe?g|svg)$/)
)

const logos = importAll(
  require.context('./Img/Logos', false, /\.(png|jpe?g|svg)$/)
)

const sponsors = importAll(
  require.context('./Img/Sponsors', false, /\.(png|jpe?g|svg)$/)
)

const INITIAL_FIXTURE = [
  {
    date: '10/01/2019',
    away: 'LOREM FC',
    home: 'MUĞLASPOR',
    homeLogo: logos['Muğlaspor.png'],
    awayLogo: logos['fake_logo.png'],
    location: 'LOREM ARENA',
    tourment: 'PREMIER LEAGUE'
  },
  {
    date: '17/01/2019',
    away: 'IPSUM FC',
    home: 'MUĞLASPOR',
    homeLogo: logos['Muğlaspor.png'],
    awayLogo: logos['fake_logo.png'],
    location: 'STADIUM ARENA',
    tourment: 'PREMIER LEAGUE'
  },
  {
    date: '20/01/2019',
    home: 'DOLOR FC',
    away: 'MUĞLASPOR',
    homeLogo: logos['Muğlaspor.png'],
    awayLogo: logos['fake_logo.png'],
    location: 'DOLOR ARENA',
    tourment: 'CUPA'
  },
  {
    date: '24/01/2019',
    away: 'PRAGA FC',
    home: 'MUĞLASPOR',
    homeLogo: logos['Muğlaspor.png'],
    awayLogo: logos['fake_logo.png'],
    location: 'STADIUM ARENA',
    tourment: 'PREMIER LEAGUE'
  },
  {
    date: '03/02/2019',
    home: 'ZULA FC',
    away: 'MUĞLASPOR',
    awayLogo: logos['Muğlaspor.png'],
    homeLogo: logos['fake_logo.png'],
    location: 'ZULA ARENA',
    tourment: 'PREMIER LEAGUE'
  }
]

const INITIAL_NEWS = [
  {
    id: 'lorem',
    year: '2019',
    month: '01',
    day: '01',
    hour: '19',
    minutes: '25',
    title: 'LATEST NEWS LOREM',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lacinia diam ut tempor.',
    img: images['1.jpeg']
  },
  {
    id: 'ipsum',
    year: '2019',
    month: '01',
    day: '02',
    hour: '19',
    minutes: '25',
    title: 'LATEST NEWS IPSUM',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lacinia diam ut tempor.',
    img: images['2.jpeg']
  },
  {
    id: 'dolor',
    year: '2019',
    month: '01',
    day: '04',
    hour: '14',
    minutes: '41',
    title: 'LATEST NEWS DOLOR',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lacinia diam ut tempor.',
    img: images['3.jpeg']
  },
  {
    id: 'sit',
    year: '2019',
    month: '01',
    day: '05',
    hour: '10',
    minutes: '55',
    title: 'LATEST NEWS SIT',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lacinia diam ut tempor.',
    img: images['4.jpg']
  },
  {
    id: 'amet',
    year: '2019',
    month: '02',
    day: '19',
    hour: '15',
    minutes: '25',
    title: 'LATEST NEWS AMET',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lacinia diam ut tempor.',
    img: images['5.jpg']
  },
  {
    id: 'consectetur',
    year: '2019',
    month: '02',
    day: '22',
    hour: '08',
    minutes: '19',
    title: 'LATEST NEWS CONSECTETUR',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lacinia diam ut tempor.',
    img: images['6.jpg']
  },
  {
    id: 'adipiscing',
    year: '2019',
    month: '02',
    day: '03',
    hour: '12',
    minutes: '53',
    title: 'LATEST NEWS ADIPISCING',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lacinia diam ut tempor.',
    img: images['7.jpeg']
  },
  {
    id: 'elit',
    year: '2019',
    month: '03',
    day: '11',
    hour: '17',
    minutes: '25',
    title: 'LATEST NEWS ELIT',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lacinia diam ut tempor.',
    img: images['8.jpeg']
  },
  {
    id: 'suspendisse',
    year: '2019',
    month: '03',
    day: '15',
    hour: '10',
    minutes: '09',
    title: 'LATEST NEWS SUSPENDISSE',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lacinia diam ut tempor.',
    img: images['9.jpeg']
  },
  {
    id: 'lobortis',
    year: '2019',
    month: '04',
    day: '22',
    hour: '10',
    minutes: '25',
    title: 'LATEST NEWS LOBORTIS',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lacinia diam ut tempor.',
    img: images['10.jpeg']
  }
]

const INTIAL_PREVIOUS_COMPETITION = [
  {
    date: '11/11/2018',
    home: 'LOREM FC',
    homeGoal: 2,
    away: 'MUĞLASPOR',
    awayGoal: 3,
    awayLogo: logos['Muğlaspor.png'],
    homeLogo: logos['fake_logo.png'],
    location: 'LOREM ARENA',
    tourment: 'PREMIER LEAGUE'
  },
  {
    date: '17/11/2018',
    away: 'IPSUM FC',
    home: 'MUĞLASPOR',
    homeGoal: 4,
    awayGoal: 1,
    homeLogo: logos['Muğlaspor.png'],
    awayLogo: logos['fake_logo.png'],
    location: 'STADIUM ARENA',
    tourment: 'PREMIER LEAGUE'
  },
  {
    date: '24/11/2018',
    home: 'DOLOR FC',
    away: 'MUĞLASPOR',
    homeGoal: 2,
    awayGoal: 0,
    awayLogo: logos['Muğlaspor.png'],
    homeLogo: logos['fake_logo.png'],
    location: 'DOLOR ARENA',
    tourment: 'CUPA'
  },
  {
    date: '01/12/2018',
    away: 'PRAGA FC',
    home: 'MUĞLASPOR',
    homeGoal: 1,
    awayGoal: 0,
    homeLogo: logos['Muğlaspor.png'],
    awayLogo: logos['fake_logo.png'],
    location: 'STADIUM ARENA',
    tourment: 'PREMIER LEAGUE'
  },
  {
    date: '08/12/2018',
    home: 'ZULA FC',
    away: 'MUĞLASPOR',
    homeGoal: 0,
    awayGoal: 0,
    awayLogo: logos['Muğlaspor.png'],
    homeLogo: logos['fake_logo.png'],
    location: 'ZULA ARENA',
    tourment: 'PREMIER LEAGUE'
  }
]

const GALLERY = Object.values(images)

const SPONSORS = Object.values(sponsors)

class Data {
  constructor() {
    this.db = {
      fixtures: INITIAL_FIXTURE,
      news: INITIAL_NEWS,
      previousCompetitions: INTIAL_PREVIOUS_COMPETITION,
      gallery: GALLERY,
      sponsors: SPONSORS
    }
  }

  shortByLatestNews = () =>
    this.db.news.sort((previous, latest) => {
      let lDate = new Date(
        latest.year,
        latest.month,
        latest.day,
        latest.hour,
        latest.minutes
      )
      let pDate = new Date(
        previous.year,
        previous.month,
        previous.day,
        previous.hour,
        previous.minutes
      )
      return lDate - pDate
    })

  getFixtures = () => this.db.fixtures

  getPreCom = () => this.db.previousCompetitions

  getNews = count => {
    if (count) return this.shortByLatestNews().slice(0, count)
    return this.shortByLatestNews()
  }
  getSingleNews = news =>
    this.shortByLatestNews().find(data => data.id === news)

  getIndexOfNews = news =>
    this.shortByLatestNews().findIndex(data => data.id === news)

  getGallery = () => this.db.gallery

  getSponsors = () => this.db.sponsors

  getImage = image => this.db.gallery[image]
}

export default Data
