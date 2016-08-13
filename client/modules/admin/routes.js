import Admin from './'
import Dashboard from './components/Dashboard';
import Books from './components/Books/routes';

export default (
<Route path="admin" component={Admin}>
  <Route path="dashboard" component={Dashboard}></Route>
  {Books}
  <IndexRoute component={Dashboard} />
</Route>
)