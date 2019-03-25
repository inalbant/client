import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ClassComp from './ClassComp'
import Header from './Header';



const App = () => {
  return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <Route path="/todaysclass" exact component={ClassComp} />
      </BrowserRouter>
    </div>

  )
}

export default App