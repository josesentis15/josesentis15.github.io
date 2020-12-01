import React from 'react';

const withScrollTop = WrappedComponent => {
  return class extends React.Component {
    _mainElement;
    _lastScrollTop = 0;
    _status = 0;
    _scrollingInterval = null;
    state = {
      scrollTop: 0,
    }

    componentDidMount() {
      this._mainElement = document.getElementsByTagName('main')[0];
      this._mainElement.addEventListener('scroll', this.calculteUserScroll);

      this.calculteUserScroll();
    };

    calculteUserScroll = () => {
      this.setState({ scrollTop: this.scrollTop() });
    }

    scrollTop = () => this._mainElement.scrollTop;

    render() {
      return <WrappedComponent {...this.props} scrollTop={this.state.scrollTop} />;
    }
  }
};

export default withScrollTop;
