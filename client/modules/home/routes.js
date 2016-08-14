import Home from './'
import Index from './components/Index';
import List from './components/List';

export default (
<Route path="home" getComponent={(location, callback) => {
    require.ensure([], require => {
      callback(null, require('./').default)
    }, 'home')  
  }}>
  <Route path="index" component={Index}></Route>
	<Route path="list" component={List}></Route>
	<IndexRoute component={Index} />
</Route>
)