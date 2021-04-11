import React from 'react'
import { formatDistance, subDays } from "date-fns";

import { PostItemProps } from '../pages/ExperienceBank'
import { FaThumbsUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Post({post, handleLike}: {
  post: PostItemProps, 
  handleLike: (id: string, likeCount: number)=> void
}): JSX.Element {

  return (
    <div className="">
      <div className="postItem">
        <h4> <Link to='/'> {post.title} </Link></h4>
        <small><span style={{fontStyle: 'italic', 'color': 'gray', 'fontSize': '1.3rem'}}>By: {post.author} | 
         Posted: {formatDistance(subDays(new Date(post.createdAt.seconds * 1000), 1), new Date(), { addSuffix: true }) } 
        </span></small>
        <p>{post.content}</p>
        <small onClick={() => handleLike(post.id, post.likes)}><span style={{'color': 'gray', cursor:'pointer'}}> <FaThumbsUp color='#3db6eb'/> {post.likes}  </span></small>
      </div>
    </div>
  )
}
