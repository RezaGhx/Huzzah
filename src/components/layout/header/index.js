import Link from 'next/link';
import { signIn, signOut } from "next-auth/react"

const Header = () => {
  return (
    <div className="bg-white w-full shadow-lg">
      <nav
        className={'flex justify-between py-4 mb-6 max-w-screen-xl mx-auto'}
      >
        <h1 className={'font-thin'}>
          <a href='#'>Todo List App</a>
        </h1>
        <ul className='flex items-center gap-x-6'>
          <li>
            <Link href='/'>
              Home
            </Link>
            <Link href='/todos'>
              Todos
            </Link>
            <Link href='/profile'>
              Profile
            </Link>
            <button onClick={() => signIn('github')}>
              SignIn
            </button>
            <button onClick={() => signOut()}>
              LogOut
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
