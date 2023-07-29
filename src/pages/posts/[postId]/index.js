import Link from 'next/link';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { postId } = router?.query;

  return (
    <>
      <h1>Post No.{postId}</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={'/posts'}>Back</Link>
        <Link href={`/posts/${postId}/review/1`}>Review 1</Link>
        <Link href={`/posts/${postId}/review/2`}>Review 2</Link>
        <Link href={`/posts/${postId}/review/3`}>Review 3</Link>
      </div>
    </>
  );
};

export default Post;
