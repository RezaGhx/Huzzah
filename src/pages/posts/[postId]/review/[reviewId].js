import Link from 'next/link';
import { useRouter } from 'next/router';

const Review = () => {
  const router = useRouter();
  const { postId, reviewId } = router?.query;

  return (
    <>
      <h1>
        Review No.{reviewId} form Post No.{postId}
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={'/posts'}>Back</Link>
      </div>
    </>
  );
};

export default Review;
