import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import Sketch from "react-p5";

import Glitch from '../../components/glitch';
import Layout, { Wrapper } from '../../components/layout';

import routes from '../../utils/routes';
import image from './404.png';

class NotFound extends React.Component {
  _img;
  _text = 'Error 404';

  preload = p5 => {
    this._img = p5.loadImage(image);
  }

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  }

  draw = p5 => {
    const x = p5.mouseX ? p5.mouseX - 45 : p5.windowWidth / 2;
    const y = p5.mouseY ? p5.mouseY - 20 : p5.windowHeight / 2;

    p5.image(this._img, x, y);
  }

  render() {
    return (
      <Layout
        className="layout-bottom not-found"
        location={this.props.location}
        title="404: Not Found"
      >
        <Sketch setup={this.setup} draw={this.draw} preload={this.preload} />
        <Wrapper>
          <h1 className="title">
            <Glitch className="u-hide--s768" text={this._text} />
            <Glitch className="u-hide--s768" text={this._text} />
            <Glitch text={this._text} />
          </h1>
          <Link to={routes.home}>Get back</Link>
        </Wrapper>
      </Layout>
    );
  }
}

export default withRouter(NotFound);
