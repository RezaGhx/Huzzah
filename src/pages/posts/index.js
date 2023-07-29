import Link from 'next/link';

const Post = () => {
  return (
    <>
      <h1>Posts Main Page</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={'/posts/1'}>Post 1</Link>
        <Link href={'/posts/2'}>Post 2</Link>
        <Link href={'/posts/3'} replace>Post 3</Link>
      </div>
    </>
  );
};

export default Post;
