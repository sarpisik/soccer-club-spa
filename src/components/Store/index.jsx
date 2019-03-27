import React, { PureComponent } from 'react'
import product1 from '../../Data/Img/Uniform/uniform1.png'
import product2 from '../../Data/Img/Uniform/uniform2.png'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import Thumbnail from '../../components/Thumbnail'
import Header from '../../components/Header'

export default class Store extends PureComponent {
  constructor(props) {
    super(props)

    this.products = [
      {
        img: product1,
        title: '50 $'
      },
      {
        img: product2,
        title: '60 $'
      }
    ]
  }

  renderProducts = (product, i) => (
    <Col sm={6} key={i}>
      <Thumbnail height={0}>
        <Image width={300} height={300} src={product.img} />
        <p style={{ marginTop: '10px' }} className="text-center">
          <strong>{product.title}</strong>
        </p>
      </Thumbnail>
    </Col>
  )

  render() {
    return (
      <div className="store">
        <Grid>
          <Row>
            <Header>STORE</Header>
            {this.products.map(this.renderProducts)}
          </Row>
        </Grid>
      </div>
    )
  }
}
