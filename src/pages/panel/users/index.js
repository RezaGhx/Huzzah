import axios from 'axios';
import Item from 'src/components/item';

const Users = ({userList}) => {
  return (
    <div>
      <h1>UZURAZ!</h1>
      <Item list={userList} />
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');
  return {
    props: {
      userList: data,
    },
  };
}