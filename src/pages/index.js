import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const clickHandler = () => {
    router.push('/panel/complexities');
  };

  return (
    <div>
      <h1 className={'bg-teal-700 text-2xl'}>Home Page</h1>
      {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={clickHandler}>Complexities</button>
        <Link href={'/panel/users'}>Users</Link>
        <Link href={'/panel/episodes'}>Episodes</Link>
        <Link href={'/panel/posts'}>Posts</Link>
        <Link href={'/panel/products'}>Products</Link>
        <Link href={'/panel/blogs'}>blogs</Link>
      </div> */}
    </div>
  );
}
