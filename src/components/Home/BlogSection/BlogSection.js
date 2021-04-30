import { Box, Button } from '@material-ui/core';
import React from 'react';
import blogPosts from '../../../FakeData/FakeData';
import ArticleCard from '../../MyBlogs/ArticleCard';
const BlogSection = () => {
    const randomThree=blogPosts.slice(0,3);
    return (
        <div className="my-5 mx-5">
        <h1>Here is my Articles</h1><br/><br/>
        <div className="blog-section">
            {
                randomThree.map(post=><ArticleCard post={post}></ArticleCard>)
            }
        </div>
        <Box mt={5} textAlign='center'>
        <a style={{textDecoration:'none'}} href="http://localhost:3000/blogs"><Button variant="contained" color="secondary">See All Articles</Button></a></Box>
        </div>
    );
};

export default BlogSection;