const channel = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCyWqModMQlbIo8274Wh_ZsQ';
import YoutubeCards from '../components/YoutubeCards';
import axios from 'axios';
import { xml2json } from 'xml-js';
import styled from 'styled-components';

const Grid = styled.div`
  display: flexbox;
`;

const Main = styled.div`
  width: 70%;
`;

const Sidebar = styled.div`
  width: 30%;
`;

const Page = ({ videos }) => (
  <Grid>
    <Main>
      <YoutubeCards videos={videos} />
    </Main>
    <Sidebar>plp</Sidebar>
  </Grid>
);

Page.getInitialProps = async () => {
  const { data } = await axios.get(channel);
  const {
    feed: { entry }
  } = JSON.parse(xml2json(data, { compact: true }));
  // console.log(Object.keys(videos));
  return { videos: entry };
};

export default Page;
