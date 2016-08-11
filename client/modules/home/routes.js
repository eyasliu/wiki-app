import Home from './'
import Index from './components/Index';
import List from './components/List';

export default (
<Route path="home" component={Home}>
  <Route path="index" component={Index}></Route>
	<Route path="list" component={List}></Route>
	<IndexRoute component={Index} />
</Route>
)