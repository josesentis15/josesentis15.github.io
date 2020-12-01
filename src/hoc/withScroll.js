import React from 'react';

const withScrollTop = WrappedComponent => {
  return class extends React.Component {
    _mainElement;
    _lastScrollTop = 0;
    _status = 0;
    state = {
      scrollTop: 0
    }

    componentDidMount() {
      this._mainElement = document.getElementsByTagName('main')[0];
      this._mainElement.addEventListener('scroll', this.calculateScrollTop);

      this.calculateScrollTop();
    };

    calculateScrollTop = () => {
      this.setState({ scrollTop: this.scrollTop() });

      console.log(this.scrollDirection());
    }

    scrollTop = () => this._mainElement.scrollTop;

    scrollDirection = (deltaUp = 0, deltaDown = 0) => {
      const { scrollTop } = this.state;

      if (scrollTop <= 0) {
        this._lastScrollTop = scrollTop;
        this._status = 0;
      } else if (scrollTop > this._lastScrollTop) {
        if (Math.abs(this._lastScrollTop - scrollTop) >= deltaDown) {
          this._lastScrollTop = scrollTop;
          this._status = 1;
        }
      } else if (Math.abs(this._lastScrollTop - scrollTop) >= deltaUp) {
        this._lastScrollTop = scrollTop;
        this._status = -1;
      }

      return this._status;
    }

    render() {
      return <WrappedComponent {...this.props} scrollTop={this.state.scrollTop} />;
    }
  }
};

export default withScrollTop;
