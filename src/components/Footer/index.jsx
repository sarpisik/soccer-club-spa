import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Col } from 'react-bootstrap'
import withScrolling from '../../components/withScrolling'

const Footer = ({ scrollRef }) => {
  return (
    <footer>
      <Grid>
        <div className="row" ref={scrollRef}>
          <Col style={{ textAlign: 'center' }} sm={12}>
            POWERED & DESIGNED BY SARP IŞIK
          </Col>
        </div>
      </Grid>
    </footer>
  )
}

Footer.propTypes = {
  scrollRef: PropTypes.object.isRequired
}

export default withScrolling(Footer)
