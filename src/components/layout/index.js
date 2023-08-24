import Header from 'components/layout/header';
import Footer from 'components/layout/footer';

const Layout = ({ children }) => {
  return (
    <div className={'bg=gray-50 min-h-screen'}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
