import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import StaticContent from '../../components/StaticContent'
import * as ROUTES from '../../constants/routes'

const pages = {
  [ROUTES.FOOTBALL]: { img: 8, header: ROUTES.FOOTBALL.toUpperCase() },
  [ROUTES.BASKETBALL]: { img: 1, header: ROUTES.BASKETBALL.toUpperCase() },
  [ROUTES.VOLLEYBALL]: { img: 2, header: ROUTES.VOLLEYBALL.toUpperCase() },
  [ROUTES.HANDBALL]: { img: 3, header: ROUTES.HANDBALL.toUpperCase() },
  [ROUTES.CHESS]: { img: 4, header: ROUTES.CHESS.toUpperCase() }
}

const Page = ({ image, title, match }) => {
  if (image === undefined) image = pages[match.params.pageId].img
  if (title === undefined) title = pages[match.params.pageId].header
  return (
    <StaticContent image={image} title={title}>
      <p>
        In incididunt exquisitaque ab excepteur non culpa aliquip iis hic in
        philosophari a legam arbitror ubi laboris. Est veniam philosophari ea ne
        nam concursionibus, possumus sint illum constias tamen quo labore
        deserunt cohaerescant, aliqua incurreret qui senserit e deserunt magna
        duis voluptate quorum, ne magna appellat do quorum iis probant. Esse
        senserit non iudicem.Elit mentitum non consectetur aut sed malis
        efflorescere. Litteris eu quae qui id duis reprehenderit. Sint te
        occaecat de legam.
      </p>
      <p>
        In incididunt exquisitaque ab excepteur non culpa aliquip iis hic in
        philosophari a legam arbitror ubi laboris. Est veniam philosophari ea ne
        nam concursionibus, possumus sint illum constias tamen quo labore
        deserunt cohaerescant, aliqua incurreret qui senserit e deserunt magna
        duis voluptate quorum, ne magna appellat do quorum iis probant. Esse
        senserit non iudicem.Elit mentitum non consectetur aut sed malis
        efflorescere. Litteris eu quae qui id duis reprehenderit. Sint te
        occaecat de legam.
      </p>
      <p>
        In incididunt exquisitaque ab excepteur non culpa aliquip iis hic in
        philosophari a legam arbitror ubi laboris. Est veniam philosophari ea ne
        nam concursionibus, possumus sint illum constias tamen quo labore
        deserunt cohaerescant, aliqua incurreret qui senserit e deserunt magna
        duis voluptate quorum, ne magna appellat do quorum iis probant. Esse
        senserit non iudicem.Elit mentitum non consectetur aut sed malis
        efflorescere. Litteris eu quae qui id duis reprehenderit. Sint te
        occaecat de legam.
      </p>
    </StaticContent>
  )
}

const Home = () => <Page image={0} title="PROFESSIONAL TEAMS" />

const Teams = ({ match }) => (
  <Switch>
    <Route exact path={match.path} component={Home} />
    <Route path={`${match.path}/:pageId`} component={Page} />
  </Switch>
)

export default withRouter(Teams)
