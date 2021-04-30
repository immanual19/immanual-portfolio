import React from 'react';
import ArticleCard from './ArticleCard';
import './MyBlogs.css';
import blogPosts from '../../FakeData/FakeData';

const MyBlogs = () => {
    return (
        <div>
        <h1>My all Articles</h1>
        
        <div className="blog-section my-5 mx-5">
        
            {
                blogPosts.map(post=> <ArticleCard post={post}></ArticleCard>)
            }
        </div>
        </div>
    );
};

export default MyBlogs;