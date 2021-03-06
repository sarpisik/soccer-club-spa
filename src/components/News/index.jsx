import React, { PureComponent } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { withData } from '../../Data'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import News from '../News'

const INITIAL_STATE = {
  data: [],
  index: ''
}

const textColor = { color: 'black' }

class singleNews extends PureComponent {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE
  }

  componentDidMount() {
    this.toggleButtonDisable()
  }

  toggleButtonDisable = () => {
    const { data, match } = this.props
    const newsData = data.getNews()
    const newsIndex = data.getIndexOfNews(match.params.newsId)

    this.setState({
      data: newsData,
      index: newsIndex
    })
  }

  onLink = e => {
    const { data, index } = this.state
    const { match, history } = this.props
    const name = e.target.name
    const link = `/${match.params.pageId}`

    if (name === 'n') {
      this.setState(state => ({
        index: state.index - 1
      }))
      // Navigate to Next news
      history.push(`${link}/${data[index - 1].id}`)
    } else if (name === 'p') {
      this.setState(state => ({
        index: state.index + 1
      }))
      // Navigate to Previous news
      history.push(`${link}/${data[index + 1].id}`)
    } else {
      // Navigate back to News
      history.push(link)
    }
  }

  render() {
    const { data, index } = this.state

    // Disable N & P buttons
    const isNext = index === 0 && true
    const isPrevious = index === data.length - 1 && true

    // Single News
    const news = this.props.data.getSingleNews(this.props.match.params.newsId)

    return (
      <div className="single-news">
        <Grid key={news.id}>
          <Row>
            <Col sm={12}>
              <div className="thumbnail">
                <div className="thumbnail-header">
                  <Button className="link" onClick={this.onLink}>
                    Back to News
                  </Button>
                  <span className="date">
                    {`${news.day}.${news.month}.${news.year} - ${news.hour}:${
                      news.minutes
                    }`}
                  </span>
                </div>
                <div className="caption">
                  <img src={news.img} alt="news" />
                  <h3 style={textColor}>{news.title}</h3>
                  <br />
                  <p style={textColor}>{news.details}</p>
                  <br />
                  <p>
                    <Button
                      disabled={isPrevious}
                      name="p"
                      className="button-primary"
                      onClick={this.onLink}>
                      Previous
                    </Button>
                    <Button
                      disabled={isNext}
                      name="n"
                      className="button-primary"
                      onClick={this.onLink}>
                      Next
                    </Button>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const SingleNews = withData(singleNews)

const ShowAllNews = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={News} />
      <Route path={`${match.path}/:newsId`} component={SingleNews} />
    </>
  )
}
export default withRouter(ShowAllNews)
