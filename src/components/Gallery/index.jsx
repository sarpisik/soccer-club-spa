import React from 'react'
import { withData } from '../../Data'
import withScrolling from '../../components/withScrolling'
import { Grid, Col } from 'react-bootstrap'
import ModalImage from '../../components/ModalImage'
import Header from '../../components/Header'

const style = {
  padding: '0'
}
const Gallery = ({ data, count, scrollRef }) => {
  // If the images count limited by count prop, fetch amount of count.
  // Else, fetch all images.
  const gallery = count ? data.getGallery().slice(-count) : data.getGallery()

  return (
    <div className="gallery">
      <Grid>
        <div className="row" ref={scrollRef}>
          <Header>GALLERY</Header>
          {gallery.map((image, i) => {
            // Set animate delay time for each image
            let animationDelay = {
              transitionDelay: `${i / count}s`,
              padding: `${count && style.padding}`
            }
            return (
              <Col style={animationDelay} xs={6} md={3} key={i}>
                <ModalImage divide={count && true} data={gallery} src={image} />
              </Col>
            )
          })}
        </div>
      </Grid>
    </div>
  )
}

export default withData(withScrolling(Gallery))
