import { Switch, Route } from 'react-router-dom'
import Home from "./Components /Home"

export default (
  <Switch>
    <Route exact path='/home' component={Home} />
  </Switch>
)