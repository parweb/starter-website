import { Jumbotron } from 'reactstrap';
import Cards from '../components/Cards';

const Page = ({ url }) => (
  <div>
    <Jumbotron>
      <h1 className="display-3">{url.top}</h1>
      <p className="lead">
        This is a simple hero unit, a simple Jumbotron-style component for calling extra attention
        to featured content or information.
      </p>
    </Jumbotron>
    <Cards list={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
  </div>
);

export default Page;
