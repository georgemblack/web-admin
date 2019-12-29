export default {
  allViews: state => state.views,
  authorized: state => state.authToken !== '',
  authToken: state => state.authToken,
}
