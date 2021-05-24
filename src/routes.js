import { Switch, Route } from 'react-router-dom'
import Home from "./Components/Home"
import Admin from './Components/Admin'
import Classes from './Components/Classes'
import Schedule from './Components/Schedule'
import Science from './Components/Science'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/admin' component={Admin} />
    <Route path='/classes' component={Classes}/>
    <Route path='/schedule' component={Schedule}/>
    <Route path='/science' components={Science}/>
  </Switch>
)