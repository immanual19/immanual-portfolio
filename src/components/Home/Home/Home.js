import React from 'react';
import BlogSection from '../BlogSection/BlogSection';
import EndSection from '../EndSection/EndSection';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import ProjectSection from '../ProjectSection/ProjectSection';

const Home = () => {
    return (
        <div>
            
            <HeaderMain></HeaderMain>
            <BlogSection></BlogSection>
            <ProjectSection></ProjectSection>
            <EndSection></EndSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;