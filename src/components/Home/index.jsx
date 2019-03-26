import React, { PropTypes } from 'react'
import Slide from './Slide'
// import Schedule from '../../components/Schedule';
// import News from '../../components/News';
// import Gallery from '../Gallery';
// import Sponsors from '../../components/Sponsors';

const slideCount = 4
const newsCount = 4
const galleryCount = 8

const Home = () => {
  return (
    <div className="content-home">
      <Slide count={slideCount} />
      {/* <Schedule />
      <News count={newsCount} />
      <Gallery count={galleryCount} />
      <Sponsors /> */}
    </div>
  )
}

Home.propTypes = {}

export default Home
