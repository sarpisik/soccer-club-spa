import React from 'react'
import { withData } from '../../Data'
import { Grid, Row, Col, Carousel } from 'react-bootstrap'

const DESKTOP_WIDTH = 1024

class HeadNews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isBottom: false
    }
  }
  componentDidMount() {
    if (window.innerWidth >= DESKTOP_WIDTH)
      // Initialize scroll event
      window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    // If component will be unmounted before fully visited:
    // Remove the scroll event
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = e => {
    const scrollLocation = window.pageYOffset
    const windowHeigth = window.innerHeight

    // Scroll Event
    const scrolling = () => {
      if (!this.state.isBottom) {
        // Hide head news
        if (windowHeigth < scrollLocation)
          this.setState(state => ({
            isBottom: !state.isBottom
          }))
      } else {
        // Show head news
        if (windowHeigth > scrollLocation)
          this.setState(state => ({
            isBottom: !state.isBottom
          }))
      }
    }

    // Toggle Scroll Event
    window.requestAnimationFrame(() => {
      scrolling(e)
    })
  }

  render() {
    const { isBottom } = this.state
    const { data, count, timer, history, match } = this.props
    const newsData = data.getNews(count)
    return (
      <Grid className={`header-top ${isBottom && 'hidden'}`}>
        <Row>
          <Col sm={12}>
            <Carousel controls={false} indicators={false} interval={timer}>
              {newsData.map(news => (
                <Carousel.Item key={news.id}>
                  <Carousel.Caption
                    onClick={() => {
                      history.replace(`${match.url}/news/${news.id}`)
                    }}>
                    <p>{news.title}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default withData(HeadNews)
