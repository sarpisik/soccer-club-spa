import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Panel} from 'react-bootstrap';
import StaticContent from '../../components/StaticContent';

const pages = {
  football: {img: 8, header: 'FOOTBALL'},
  basketball: {img: 1, header: 'BASKETBALL'},
  volleyball: {img: 2, header: 'VOLLEYBALL'},
  handball: {img: 3, header: 'HANDBALL'},
  chess: {img: 4, header: 'CHESS'},
};

const Page = ({image, title, match}) => {
  if (image === undefined) image = pages[match.params.pageId].img;
  if (title === undefined) title = pages[match.params.pageId].header;
  return (
    <StaticContent image={image} title={title}>
      <p>
        In incididunt exquisitaque ab excepteur non culpa aliquip iis hic in philosophari a legam arbitror ubi laboris. Est veniam philosophari ea ne nam concursionibus, possumus sint illum constias tamen quo labore deserunt cohaerescant, aliqua incurreret qui senserit e deserunt magna duis voluptate quorum, ne magna appellat do quorum iis probant. Esse senserit non iudicem.Elit mentitum non consectetur aut sed malis efflorescere. Litteris eu quae qui id duis reprehenderit. Sint te occaecat de legam.
      </p>
      <p>
        In incididunt exquisitaque ab excepteur non culpa aliquip iis hic in philosophari a legam arbitror ubi laboris. Est veniam philosophari ea ne nam concursionibus, possumus sint illum constias tamen quo labore deserunt cohaerescant, aliqua incurreret qui senserit e deserunt magna duis voluptate quorum, ne magna appellat do quorum iis probant. Esse senserit non iudicem.Elit mentitum non consectetur aut sed malis efflorescere. Litteris eu quae qui id duis reprehenderit. Sint te occaecat de legam.
      </p>
      <p>
        In incididunt exquisitaque ab excepteur non culpa aliquip iis hic in philosophari a legam arbitror ubi laboris. Est veniam philosophari ea ne nam concursionibus, possumus sint illum constias tamen quo labore deserunt cohaerescant, aliqua incurreret qui senserit e deserunt magna duis voluptate quorum, ne magna appellat do quorum iis probant. Esse senserit non iudicem.Elit mentitum non consectetur aut sed malis efflorescere. Litteris eu quae qui id duis reprehenderit. Sint te occaecat de legam.
      </p>
    </StaticContent>
  );
}


const Home = _ => <Page image={0} title="PROFESSIONAL TEAMS"/>;

const Teams = ({match}) =>
<Switch>
  <Route exact path={match.path} component={Home}/>
  <Route path={`${match.path}/:pageId`} component={Page}/>
</Switch>

export default withRouter(Teams);