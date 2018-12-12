import styled from 'styled-components';
import Link from 'next/link';
import { Card, CardTitle, CardText, CardImg, CardBody, CardImgOverlay } from 'reactstrap';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
`;

export default ({ videos }, i) => (
  <Grid style={{ margin: '0 10px' }}>
    {videos.map(({ title, ...video }) => (
      <Card style={{ borderColor: 'transparent' }} key={i}>
        <CardImg
          width="100%"
          src={video['media:group']['media:thumbnail']._attributes.url}
          alt="Card image cap"
        />
        <CardBody>
          <Link prefetch href={'/item/' + 'Item ' + i}>
            <a className="text-dark">
              <CardTitle>{title._text}</CardTitle>
            </a>
          </Link>

          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    ))}
  </Grid>
);
