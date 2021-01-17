import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import {Navigation} from './components/Navigation';
import {Footer} from './components/Footer';
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import { AlertModal } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { GithubState } from './context/github/GithubState';


function App() {
  return (
    <GithubState>
      <AlertState>
      <BrowserRouter>
        <Navigation />
        <main className="main-content container pt-5 pb-5">
          <AlertModal alert={{text: 'Idi nahoi', type: 'danger'}}/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/profile/:name" component={Profile} />
          </Switch>
        </main>
      </BrowserRouter>
      <Footer />
      </AlertState>
    </GithubState>

  )
}

export default App
