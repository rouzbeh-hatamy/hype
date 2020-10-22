import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row } from 'reactstrap'
import './postsStyle.scss'
import InfiniteScroll from 'react-infinite-scroller';

function PostArchive() {
    const [posts, setPosts] = useState([])
    const getPosts = () => { axios.get('https://jsonplaceholder.typicode.com/posts').then(res => setPosts(res.data)) }
    useEffect(() => { getPosts() }, [])
    return (
        <>
            <Row xs={1} md={2} xl={3}>
                <div class="container-posts container">
                    {posts.map(item =>
                        <InfiniteScroll
                            pageStart={0}
                            
                            hasMore={true || false}
                            loader={<div className="loader" key={0}>Loading ...</div>}
                        >

                            <div class="post">
                                <div class="header_post">
                                    <img src={`https://picsum.photos/id/${item.id}/200/300`} alt="" />
                                </div>
                                <div class="body_post">
                                    <div class="post_content">

                                        <h1>{item.title}</h1>
                                        <p>{item.body}</p>

                                        <div class="container_infos">
                                            <div class="postedBy">
                                                <span>author</span>
                                              rouzbeh
                                    </div>

                                            <div class="container_tags">
                                                <span>tags</span>
                                                <div class="tags">
                                                    <ul>
                                                        <li>design</li>
                                                        <li>front end</li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </InfiniteScroll>
                    )}
                </div>
            </Row>

        </>
    )
}

export default PostArchive
