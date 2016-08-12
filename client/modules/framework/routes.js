import APP from './';
import NotFound from './components/NotFound';
import homeRoutes from 'home/routes'
import adminRoutes from 'admin/routes'

export default (
  <Router history={window.RouterHistory}>
    <Route path="/" component={APP}>
      {homeRoutes}
      {adminRoutes}
      <IndexRedirect to="home" />
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
)