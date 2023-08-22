import Link from 'next/link';

const Panel = ({ children }) => {
  return (
    <>
      <nav>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
