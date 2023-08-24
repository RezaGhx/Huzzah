import Layout from 'components/layout';
import { useSession, signIn } from 'next-auth/react';

const Profile = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  return (
    <Layout>
      {status === 'loading' ? <div>loading</div> : <h2>{session?.user?.name}, welcome!</h2>}
    </Layout>
  );
};

export default Profile;
