import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Homepage from './Homepage'
import TodaysClasses from './TodaysClasses'
import Header from './Header';



const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/todaysclass" exact component={TodaysClasses} />
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App