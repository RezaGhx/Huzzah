import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <div className="bg-white w-full shadow-lg">
      <nav className={'flex justify-between py-4 mb-6 max-w-screen-xl mx-auto'}>
        <h1 className={'font-thin'}>
          <a href="#">Todo List App</a>
        </h1>
        <ul
          className={`flex items-center gap-x-6 ${
            !session && status === 'loading' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <li>
            <Link href="/">Home</Link>
            <Link href="/protectedSSR">ProtectedSSR</Link>
            <Link href="/profile">Profile</Link>
            {!session && status !== 'loading' && (
              <button onClick={() => signIn('github')}>SignIn</button>
            )}
            {session && <button onClick={() => signOut()}>LogOut</button>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
