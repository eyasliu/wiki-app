import "./list.global.scss";
import Filter from './Filter';
import List from './List';

export default () => (
  <div className="list-container">
    <Filter></Filter>
    <List></List>
  </div>
)