import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import TodaysClasses from './TodaysClasses'
import Header from './Header';
import NewClass from './NewClass';
import SelectingFormValuesForm from './SelectingFormValuesForm';
import Homepage from './HomePage'
import EditClass from './EditClass'



const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/todaysclass" exact component={TodaysClasses} />
            <Route path="/newclass" exact component={NewClass} />
            <Route path="/todaysclass/edit/:id" exact component={EditClass} />
            <Route path="/test" exact component={SelectingFormValuesForm} />
          </Switch>
        </div>
      </Router>
    </div>

  )
}

export default App