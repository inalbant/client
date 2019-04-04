import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../history'
import TodaysClasses from './TodaysClasses'
import Header from './Header';
import NewClass from './NewClass';
import SelectingFormValuesForm from './SelectingFormValuesForm';
import Homepage from './HomePage'



const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/todaysclass" exact component={TodaysClasses} />
          <Route path="/newclass" exact component={NewClass} />
          <Route path="/test" exact component={SelectingFormValuesForm} />
        </div>
      </Router>
    </div>

  )
}

export default App