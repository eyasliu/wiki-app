import Home from './'
import Index from './components/Index';

export default (
<Route path="home" component={Home}>
	<Route path="index" component={Index}></Route>
	<IndexRedirect to="index" />
</Route>
)