exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
};

exports.onRouteUpdateDelayed = () => {
  console.log('We can show loading indicator now');
};
