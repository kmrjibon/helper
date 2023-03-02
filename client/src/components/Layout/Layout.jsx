import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='content'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
