import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const clickHandler = () => {
    router.push('/blogs');
  };

  return (
    <div className={'styles.container'}>
      <h1>Home Page</h1>
      <button onClick={clickHandler}>Blogs</button>
      <Link href={'/users'}>Users</Link>
      <Link href={'/episodes'}>Episodes</Link>
      <Link href={'/posts'}>Posts</Link>
    </div>
  );
}
