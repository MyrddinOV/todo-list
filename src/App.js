import React from 'react';
import './index.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { NavBar } from './Components/navbar';
import { Alert } from './Components/Alert';
import { AlertState } from './context/alert/AlertState';



function App() {
  return (
    <AlertState>

      <BrowserRouter>
        <NavBar></NavBar>
        <div className='container p-2'>
          <Alert />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Redirect to='/' />
          </Switch>
        </div>

      </BrowserRouter>
    </AlertState>
  )
}
export default App;
