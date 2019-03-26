import React from 'react'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'
import { withData } from '../../../Data'
import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap'

const Slide = ({ data, match, count }) => {
  const newsData = data.getNews(count)
  return (
    <Carousel pauseOnHover={false}>
      {newsData.map(news => (
        <Carousel.Item
          key={news.title}
          style={{
            backgroundImage: `url(${news.img})`
          }}>
          <Carousel.Caption>
            <Grid>
              <Row>
                <Col className="text-left" sm={6} lg={4}>
                  <div>{news.title}</div>
                  <div>
                    <Link to={`${match.url}/news/${news.id}`}>
                      Click to read...
                    </Link>
                  </div>
                </Col>
              </Row>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default withData(Slide)
