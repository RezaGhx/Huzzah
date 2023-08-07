import axios from 'axios';
import Item from 'components/item';

const Category = ({ blogs, category }) => {
  return (
    <div>
      <h1>the Blog details {category}</h1>
      {blogs?.map((blog) => (
        <div key={blog.id}>
          <h3>{blog?.title}</h3>
          <h4>{blog?.id}</h4>
        </div>
      ))}
    </div>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `http://localhost:4000/blogs?category=${params.category}`
  );
  return {
    props: {
      category: params?.category,
      blogs: data,
    },
  };
}
