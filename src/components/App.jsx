import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TodaysClasses from './TodaysClasses'
import Header from './Header';
import NewClass from './NewClass';
import SelectingFormValuesForm from './SelectingFormValuesForm';
import Homepage from './HomePage'



const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/todaysclass" exact component={TodaysClasses} />
          <Route path="/newclass" exact component={NewClass} />
          <Route path="/test" exact component={SelectingFormValuesForm} />
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App