import { Box, Button } from '@material-ui/core';
import React from 'react';
import blogPosts from '../../../FakeData/BlogData';
import ArticleCard from '../../MyBlogs/ArticleCard';
import './BlogSection.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const BlogSection = () => {
    const randomThree=blogPosts.slice(0,3);
    return (
        <div className="my-5 mx-5">
        <h1 className="section-header">my top articles</h1><br/><br/>
        <div className="blog-section">
            {
                randomThree.map(post=><ArticleCard post={post}></ArticleCard>)
            }
        </div>
        <Box mt={5} textAlign='center'>
        <Link style={{textDecoration:'none'}} to="/blogs"><Button variant="contained" color="secondary">See All Articles</Button></Link></Box>
        </div>
    );
};

export default BlogSection;