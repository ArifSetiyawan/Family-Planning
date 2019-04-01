import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/Layouts/Nav';

import Home from '../src/components/Dasboard/Home'

//Province
import Province from '../src/components/Planning/Province/provinceCreate';
import Provin from '../src/components/Planning/Province/provinceEdit';
import Provincelist from '../src/components/Planning/Province/provinceList';

//Kontrasepsi
import Contraception from '../src/components/Planning/Contraception/contraCreate';
import Contracept from '../src/components/Planning/Contraception/contraEdit';
import Contraceptionlist from '../src/components/Planning/Contraception/contraList';

//Pemakai Kontrasepsi
import Wearer from '../src/components/Planning/Wearers/wearerCreate';
import Wear from '../src/components/Planning/Wearers/wearerEdit';
import Wearerlist from '../src/components/Planning/Wearers/wearerList';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/province" component={Province} />
            <Route exact path="/province/edit/:id" component={Provin} />
            <Route exact path="/provinces" component={Provincelist} />

            <Route exact path="/contraception" component={Contraception} />
            <Route exact path="/contraception/edit/:id" component={Contracept} />
            <Route exact path="/contraceptions" component={Contraceptionlist} />

            <Route exact path="/wearer" component={Wearer} />
            <Route exact path="/wearer/edit/:id" component={Wear} />
            <Route exact path="/wearers" component={Wearerlist} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;