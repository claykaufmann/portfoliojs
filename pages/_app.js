// import global stylesheet
import '../styles/global/globals.scss';
import { useRouter } from 'next/router';
import photoStyles from '../styles/global/photoGlobals.scss';
import codingStyles from '../styles/global/codingGlobals.scss';

// set of functions for conditional global css support
const PhotoStyles = () => {
    return (
        <style jsx global>
            {photoStyles}
        </style>
    );
};

export function AppStyles({ photo }) {
    if (photo) {
        return <PhotoStyles />;
    } else {
        return null;
    }
}

const App = ({ Component, pageProps }) => {
    const router = useRouter();
    const isPhoto = router.pathname.startsWith('/photography');

    return (
        <>
            <Component {...pageProps} />
            <AppStyles photo={isPhoto} />
        </>
    );
};

export default App;
