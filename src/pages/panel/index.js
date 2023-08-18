import Link from 'next/link';
import { useRouter } from 'next/router';

const Panel = ({ children }) => {
    const router = useRouter();

  const clickHandler = () => {
    router.push('/panel/complexities');
  };

  return (
    <>
      <nav>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button onClick={clickHandler}>Complexities</button>
          <Link href={'/panel/users'}>Users</Link>
          <Link href={'/panel/episodes'}>Episodes</Link>
          <Link href={'/panel/posts'}>Posts</Link>
          <Link href={'/panel/products'}>Products</Link>
          <Link href={'/panel/blogs'}>blogs</Link>
          <Link className={'text-2xl'} href={'/panel/todos'}>
            todo mini app
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Panel;
