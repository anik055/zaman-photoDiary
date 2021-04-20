import React from 'react';

import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import LatestWork from '../LatestWork/LatestWork';
import Photographers from '../Photographers/Photographers';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <LatestWork></LatestWork>
            <Packages></Packages>
            <Photographers></Photographers>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;