import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const clickHandler = () => {
    router.push('/complexities');
  };

  return (
    <div className={'styles.container'}>
      <h1>Home Page</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={clickHandler}>Complexities</button>
        <Link href={'/users'}>Users</Link>
        <Link href={'/episodes'}>Episodes</Link>
        <Link href={'/posts'}>Posts</Link>
        <Link href={'/products'}>Products</Link>
        <Link href={'/blogs'}>blogs</Link>
      </div>
    </div>
  );
}
