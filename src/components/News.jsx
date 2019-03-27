import React from 'react'
import { Link } from 'react-router-dom'
import { withData } from '../Data'
import withScrolling from './withScrolling'
import { Grid, Row, Col } from 'react-bootstrap'
import Thumbnail, { Caption } from './Thumbnail'
import Header from './Header'

const News = ({
  data, // withData
  match, // withRouter
  count, // prop
  scrollRef // withScrolling
}) => {
  // Get news
  const newsData = data.getNews(count)
  // Component background
  const backgroundImage = data.getImage(6)
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="News">
      <Grid>
        <div className="row" ref={scrollRef}>
          <Header>{count && 'LATEST '}NEWS</Header>
          {newsData.map((news, i) => {
            // Set Animation delay for each news.
            let delay = { transitionDelay: `${i / count}s` }
            return (
              <Col style={delay} sm={6} md={3} key={i}>
                <Link
                  to={`${match.url}${(count && `news/${news.id}`) ||
                    `/${news.id}`}`}>
                  <Thumbnail data={news.img}>
                    <Caption data={news} />
                  </Thumbnail>
                </Link>
              </Col>
            )
          })}
        </div>
      </Grid>
    </div>
  )
}

export default withData(withScrolling(News))
