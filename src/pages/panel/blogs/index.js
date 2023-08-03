import axios from 'axios';
import Item from '@/components/item';

const Blogs = ({ blogList }) => {
  return (
    <div>
      <h1>Blogzzzz</h1>
      {blogList?.map((blog) => (
        <h3 key={blog.id}>
          {blog?.title} {blog?.category}
        </h3>
      ))}
    </div>
  );
};

export default Blogs;

export async function getServerSideProps() {
  const { data } = await axios.get('http://localhost:4000/blogs');
  return {
    props: {
      blogList: data,
    },
  };
}
