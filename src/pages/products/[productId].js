import Link from 'next/link';
import axios from 'axios';

const Product = ({ product }) => {
  console.log('====================================');
  console.log(product);
  console.log('====================================');
  return (
    <>
    <Link href={'/products'}>Back</Link>
    <div>
      <h2>
        {product.name} - date: {product.air_date}
      </h2>
    </div>
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const { data } = await axios.get('http://localhost:4000/products');
  const paths = data?.map((item) => {
    return {
      params: { productId: `${item.id}` },
    };
  });
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `http://localhost:4000/products/${params?.episodeId}`
  );
  return {
    props: {
      episode: data,
    },
  };
}
