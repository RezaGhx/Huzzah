import Link from 'next/link';
import axios from 'axios';

const Product = ({ product }) => {
  return (
    <>
    <Link href={'/panel/products'}>Back</Link>
    <div>
      <h2>
        {product?.id} - {product?.price?.toLocaleString()} - {product?.title} - {product?.description}
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
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `http://localhost:4000/products/${params?.productId}`
  );
  return {
    props: {
      product: data,
    },
    revalidate: 30,
  };
}
