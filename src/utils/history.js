import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const isNewLocation = location => {
  const pathChanged = prevLocation.pathname !== location.pathname;
  const hashChanged = prevLocation.hash !== location.hash;
  return pathChanged || hashChanged;
};
const isPrevLocationHomePage = () => prevLocation.pathname === '/';
let prevLocation = {
  hash: '',
  pathname: ''
};

history.listen((location) => {
  const isNew = isNewLocation(location);

  if (isNew) window.scrollTo(0, 0);
  prevLocation = location;
});

export default history;
export { isNewLocation, isPrevLocationHomePage };
