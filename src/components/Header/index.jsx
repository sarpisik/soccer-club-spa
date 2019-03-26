import React, {PropTypes} from 'react';
import { Redirect } from 'react-router-dom';
import { withData } from '../../Data';
import {Grid, Row, Col, Carousel} from 'react-bootstrap';
import * as ROUTES from '../../../../../constants/routes';

const DESKTOP_WIDTH = 1024;

class HeadNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBottom: false
    }
  }
  componentDidMount() {
    if (window.innerWidth >= DESKTOP_WIDTH)
    // Initialize scroll event
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    // If component will be unmounted before fully visited:
    // Remove the scroll event
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = e => {
    const scrollLocation = window.pageYOffset;
    const windowHeigth = window.innerHeight;

    // Toggle Scroll Event
    window.requestAnimationFrame(() => {
      scrolling(e);
    });

    // Scroll Event
    const scrolling = _ => {
      if (!this.state.isBottom) {
        // Hide head news
        if (windowHeigth < scrollLocation) this.setState(state => ({
          isBottom: !state.isBottom
        }));
      } else {
        // Show head news
        if (windowHeigth > scrollLocation) this.setState(state => ({
          isBottom: !state.isBottom
        }));
      }
    }
  }

  render() {
    const {isBottom} = this.state;
    const { data, count, timer, history, match} = this.props;
    const newsData = data.getNews(count);
    return (
      <Grid className={`header-top ${isBottom && 'hidden'}`}>
        <Row>
          <Col sm={12}>
            <Carousel controls={false} indicators={false} interval={timer}>
              {newsData.map(news => (
                <Carousel.Item key={news.id}>
                  <Carousel.Caption onClick={_ => {
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
    );
  }
}

export default withData(HeadNews);
