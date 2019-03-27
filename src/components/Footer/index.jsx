import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Col } from 'react-bootstrap'
import withScrolling from '../../components/withScrolling'

const Footer = () => {
  return (
    <footer>
      <Grid>
        <div className="row">
          <Col style={{ textAlign: 'center' }} sm={12}>
            POWERED & DESIGNED BY SARP IŞIK
          </Col>
        </div>
      </Grid>
    </footer>
  )
}

export default Footer
