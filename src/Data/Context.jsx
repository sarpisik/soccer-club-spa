import React from 'react';
import {withRouter} from 'react-router-dom';

const DataContext = React.createContext(null);

// HOC
export const withData = Component => {
  class WithData extends React.Component {
    render() {
      return (
        <DataContext.Consumer>
          {data =>
            <Component
              {...this.props}
              data={data}
            />
          }
        </DataContext.Consumer>
      );
    }
  }
  return withRouter(WithData);
}

export default DataContext;
