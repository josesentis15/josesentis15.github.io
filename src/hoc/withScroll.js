import React from 'react';

const withScrollTop = WrappedComponent => {
  return class extends React.Component {
    _mainElement;
    _lastScrollTop = 0;
    _status = 0;
    _scrollingInterval = null;
    state = {
      scrollTop: 0,
      isScrolling: false
    }

    componentDidMount() {
      this._mainElement = document.getElementsByTagName('main')[0];
      this._mainElement.addEventListener('scroll', this.calculteUserScroll);

      this.calculteUserScroll();
    };

    calculteUserScroll = () => {
      this.setState({ scrollTop: this.scrollTop() });
      this.isUserScrolling();
    }

    scrollTop = () => this._mainElement.scrollTop;

    isUserScrolling = () => {
      window.clearTimeout(this._scrollingInterval);
      this.setState({ isScrolling: true });

      this._scrollingInterval = setTimeout(() => {
        this.setState({ isScrolling: false });
      }, 66);
    }

    render() {
      return <WrappedComponent {...this.props} scrollTop={this.state.scrollTop} isScrolling={this.state.isScrolling} />;
    }
  }
};

export default withScrollTop;
