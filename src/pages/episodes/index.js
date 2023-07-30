import axios from 'axios';
import Link from 'next/link';
import Item from 'src/components/item';

const Episodes = ({ episodeList }) => {
  return (
    <div>
      <h1>EPI MEPIES!</h1>
      {episodeList?.results?.map((item) => (
        <Link key={item.id} href={`/episodes/${item.id}`}>
          <h4>{item.name}</h4>
        </Link>
      ))}
      {/* <Item list={episodeList} /> */}
    </div>
  );
};

export default Episodes;

export async function getStaticProps() {
  const { data } = await axios.get('https://rickandmortyapi.com/api/episode');
  return {
    props: {
      episodeList: data.results.slice(0, 3),
    },
  };
}
