import React from 'react';
import {withData} from '../Data';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

const StaticContent = ({
  data,
  image,
  title,
  children
}) => {
  const backgroundImage = data.getImage(image);
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    paddingTop: '5rem'
  }
  return (
    <div style={style} className="static-content">
      <Grid>
        <Row>
          <Col sm={12}>
            <Panel style={{backgroundColor: 'rgba(0, 0, 0, .7)'}}>
              <Panel.Heading>
                <Panel.Title componentClass="h2">
                  {title}
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                {children}
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default withData(StaticContent);
