import Link from 'next/link';
import axios from 'axios';

const Episode = ({ episode }) => {
  return (
    <>
      <Link href={'/panel/episodes'}>Back</Link>
      <div>
        <h2>
          {episode.name} - date: {episode.air_date}
        </h2>
      </div>
    </>
  );
};

export default Episode;

export async function getStaticPaths() {
  const { data } = await axios.get('https://rickandmortyapi.com/api/episode');
  const paths = data?.results?.map((item) => {
    return {
      params: { episodeId: `${item.id}` },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${params?.episodeId}`
  );
  return {
    props: {
      episode: data,
    },
  };
}
