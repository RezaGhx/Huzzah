import Layout from 'components/layout';
import { getSession, useSession } from 'next-auth/react';

const ProtectedSSR = () => {
  const { data: session, status } = useSession();
  return (
    <Layout>
      {status === 'loading' ? <div>wait</div> : <h2>{session?.user?.name}, A PROTECTED welcome!</h2>}
    </Layout>
  );
};

export default ProtectedSSR;

export async function getServerSideProps(context) {
  const session = await getSession();
  return {
    props: {
      session,
    }
  }
}