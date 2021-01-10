import BaseLayout from '../components/layouts/BaseLayout/BaseLayout';
import BaseHeader from '../components/jsx-components/BaseHeader/BaseHeader';
import Footer from '../components/jsx-components/Footer/Footer';

// index page is going to be the splash page
const Home = () => {
    return (
        <BaseLayout pageTitle='Clay Kaufmann'>
            <BaseHeader></BaseHeader>
            <h2>MAIN INDEX</h2>
            <Footer></Footer>
        </BaseLayout>
    );
};
export default Home;
