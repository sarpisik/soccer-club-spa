import React, {PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ContactIcon from '../../components/ContactIcon';
import withScrolling from '../../components/withScrolling';

const Footer = ({scrollRef}) => {
  return (
    <footer>
      <Grid>
        <div className="row" ref={scrollRef}>
          <Col sm={12}>
            POWERED & DESIGNED BY SARP IŞIK
          </Col>
        </div>
      </Grid>
    </footer>
  )
}

Footer.propTypes = {
};

export default withScrolling(Footer);
