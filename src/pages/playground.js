import React from 'react';
import 'normalize.css';

import Layout, { Wrapper } from '../components/layout';
import MovingText from '../components/movingText';

class Home extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} className="dark headerless" header={false}>
        <Wrapper>
          <MovingText>
            playground * playground * playground * playground * playground * playground * playground * playground * playground *
            playground * playground * playground * playground * playground * playground * playground * playground * playground *
          </MovingText>
        </Wrapper>
      </Layout>
    );
  }
}

export default Home;
