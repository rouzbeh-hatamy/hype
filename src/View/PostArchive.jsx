import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Row } from 'reactstrap'
import Pagination from '../Components/Pagination'
function PostArchive() {
    const [posts, setPosts] = useState([])
    const getPosts = ()=>{axios.get('https://jsonplaceholder.ir/posts').then(res=>setPosts(res.data))}
    useEffect(()=>{getPosts()},[])
    return (
            <><Row xs={1}  md={2}  xl={3}>
            <ul>
                {posts.map(posts=><li key={posts.id}>{posts.title}</li>)}
                </ul>
                
            </Row>
            <Pagination/></>
    )
}

export default PostArchive
