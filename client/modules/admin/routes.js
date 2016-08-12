import Admin from './'
import Dashboard from './components/Dashboard';

export default (
<Route path="admin" component={Admin}>
  <Route path="dashboard" component={Dashboard}></Route>
	<IndexRoute component={Dashboard} />
</Route>
)