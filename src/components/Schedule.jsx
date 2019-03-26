import React, {PropTypes} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import {withData} from '../Data';
import withScrolling from './withScrolling';

const BaseShowCompetition = ({
  data,
  next,
  scrollRef
}) => data.map( competition => (
  <div ref={scrollRef} key={competition.date} className="border-primary col-sm-5">
    <Col sm={12} className="text-center title-primary">
      {`${(next && 'NEXT') || 'PREVIOUS'} MATCH`}
    </Col>
    <Col sm={12} className="text-center">
      {competition.tourment}
    </Col>
    <Col sm={12} className="text-center">
      {competition.date}
    </Col>
    <Col sm={4}>
      <div className="match-team">
        <Image src={competition.homeLogo} />
      </div>
      <p className="text-center">
        {competition.home}
      </p>
    </Col>
    <Col sm={4}>
      <Col sm={12} className="text-center score-board">
        {(next && 'VS') || `${competition.homeGoal} - ${competition.awayGoal}`}
      </Col>
    </Col>
    <Col sm={4}>
      <div className="match-team">
        <Image src={competition.awayLogo} />
      </div>
      <p className="text-center">
        {competition.away}
      </p>
    </Col>
    <Col sm={12} className="text-center">
      {competition.location}
    </Col>
  </div>
))

const ShowCompetition = withScrolling(BaseShowCompetition);
const Schedule = ({
  data,
  match,
}) => {
  const nextMatch = data.getFixtures().slice(0, 1);
  const prevMatches = data.getPreCom();
  const lastMatch = prevMatches.slice(-1);
  const backgroundImage = data.getImage(3);
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className="schedule">
      <Grid>
        <Row>
          <ShowCompetition
            next
            data={nextMatch}
            match={match}
          />
          <ShowCompetition
            data={lastMatch}
            match={match}
          />
        </Row>
      </Grid>
    </div>
  );
}

export default withData(Schedule);
