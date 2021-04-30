import React from 'react';
import BlogSection from '../BlogSection/BlogSection';
import EndSection from '../EndSection/EndSection';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';

const Home = () => {
    return (
        <div>
            
            <HeaderMain></HeaderMain>
            <BlogSection></BlogSection>
            <EndSection></EndSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;