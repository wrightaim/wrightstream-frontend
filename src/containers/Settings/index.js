// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Sidebar from './components/Sidebar';

// CONTAINERS
import Shop from './containers/Shop';

// ==========

class Settings extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <section>
          <div className="columns is-fullheight is-marginless">
            <div className="column is-3 bar">
              <Sidebar />
            </div>
            <div className="column is-9">
              <Switch>
                <Route exact path="/settings" component={Shop} />
                {/* <Route path="/settings/staff" component={Staff} />
                <Route path="/settings/platforms" component={Platforms} /> */}
              </Switch>            
            </div>
          </div>
        </section>
      </BrowserRouter>
    );
  };
};

export default Settings;
