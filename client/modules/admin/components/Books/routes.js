import Books from './'
import List from './List';
import Edit from './Edit';

export default (
<Route path="books" component={Books}>
  <Route path="list" component={List}></Route>
  <Route path="add" component={Edit}></Route>
  <IndexRoute component={List} />
</Route>
)