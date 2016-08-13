import Books from './'
import List from './List';
import Add from './Add';

export default (
<Route path="books" component={Books}>
  <Route path="list" component={List}></Route>
  <Route path="add" component={Add}></Route>
  <IndexRoute component={List} />
</Route>
)