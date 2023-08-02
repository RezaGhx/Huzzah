import axios from 'axios';
import Link from 'next/link';
import Item from 'src/components/item';

const Products = ({ productList }) => {
  return (
    <div>
      <h1>HUhah</h1>
      {productList?.map((item) => (
        <Link key={item.id} href={`/panel/products/${item.id}`}>
          <h4>{item.title}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const { data } = await axios.get('http://localhost:4000/products');
  return {
    props: {
      productList: data,
    },
    revalidate: 10,
  };
}
