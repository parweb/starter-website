import { Component } from 'react';
import {
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron,
  Container
} from 'reactstrap';

const defaultImg =
  'https://cdn57.androidauthority.net/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android.jpg';

import styled from 'styled-components';
const Grid = styled.div`
  background-image: url();
`;

const items = [
  {
    src: defaultImg,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: defaultImg,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: defaultImg,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];
class Example extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          fluid
          style={{
            backgroundImage: 'url(' + defaultImg + ')',
            backgroundSize: 'cover'
          }}
        >
          <Container fluid>
            <h1 className="text-light display-3">{this.props.url.slug}</h1>
            <p className="text-light lead">
              This is a simple hero unit, a simple Jumbotron-style component for calling extra
              attention to featured content or information.
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Example;
