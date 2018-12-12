import styled from 'styled-components';
import Link from 'next/link';
import { Card, CardTitle, CardText, CardImg, CardBody, CardImgOverlay } from 'reactstrap';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
`;

export default ({ list }) => (
  <Grid style={{ margin: '0 10px' }}>
    {list.map((_, i) => (
      <Card style={{ borderColor: 'transparent' }} key={i}>
        <CardImg
          width="100%"
          src="http://images4.fanpop.com/image/photos/22200000/A-Beautiful-Rose-For-Susie-peterslover-22266161-500-500.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <Link prefetch href={'/item/' + 'Item ' + i}>
            <a className="text-dark">
              <CardTitle>Card Title</CardTitle>
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
