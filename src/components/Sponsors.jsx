import React from 'react';
import {withData} from '../Data';
import withScrolling from './withScrolling'
import Thumbnail from './Thumbnail';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './Header';

const Sponsors = ({
  data,
  scrollRef
}) => {
  const sponsors = data.getSponsors();
  const backgroundImage = data.getImage(0);
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className="sponsors">
      <Grid>
        <div ref={scrollRef} className="row">
          <Header>OUR SPONSORS</Header>
          {sponsors.map((sponsor, i) => {
            let delay = {transitionDelay: `${i/sponsors.length}s`};
            return (
              <Col style={delay} xs={6} sm={4} lg={2} key={i}>
                <Thumbnail data={sponsor} />
              </Col>)
          })}
        </div>
      </Grid>
    </div>
  );
}

export default withData(withScrolling(Sponsors));
