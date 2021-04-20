import React from 'react';

import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import LatestWork from '../LatestWork/LatestWork';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <LatestWork></LatestWork>
            <Packages></Packages>
            <Blogs></Blogs>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;