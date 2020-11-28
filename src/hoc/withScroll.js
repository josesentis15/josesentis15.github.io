import React from 'react';

// let lastScrollTop = 0;
// let status = 0;

// const scrollDirection = (deltaUp = 10, deltaDown = 10) => {
//   const currentScrollTop = safeScrollTop() || 0;

//   if (currentScrollTop <= 0) {
//     lastScrollTop = currentScrollTop;
//     status = 0;
//   } else if (currentScrollTop > lastScrollTop) {
//     if (Math.abs(lastScrollTop - currentScrollTop) >= deltaDown) {
//       lastScrollTop = currentScrollTop;
//       status = 1;
//     }
//   } else if (Math.abs(lastScrollTop - currentScrollTop) >= deltaUp) {
//     lastScrollTop = currentScrollTop;
//     status = -1;
//   }

//   return status;
// }

const withScrollTop = WrappedComponent => {
  return class extends React.Component {
    _mainElement ;

    state = {
      scrollTop: 0
    }

    componentDidMount() {
      this._mainElement = document.getElementsByTagName('main')[0];
      this._mainElement.addEventListener('scroll', this.calculateScrollTop);
      this.setState({ scrollTop: this.calculateScrollTop });
    };

    calculateScrollTop = () => this._mainElement.scrollTop;

    render() {
      return <WrappedComponent {...this.props} scrollTop={this.state.scrollTop} />;
    }
  }
};

export default withScrollTop;
