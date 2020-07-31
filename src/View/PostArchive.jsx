import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Container,Row ,Col} from 'reactstrap'
function PostArchive() {
    const [posts, setPosts] = useState([])
    const getPosts = ()=>{axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>setPosts(res.data))}
    useEffect(()=>{getPosts()},[])
    return (
        <Container>
            <Row xs={1}  md={2}  xl={3}>
                {posts.map(posts=><Col key={posts.id}>{posts.id}</Col>)}
            </Row>
        </Container>
    )
}

export default PostArchive
