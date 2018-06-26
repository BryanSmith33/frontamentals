import React from 'react';
import Link from 'gatsby-link';
import {TagTitle, Date, Month, Year, Details, PostTags, OldTitle, Tease, Container} from '../components/UIComponents';

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext;
  if (posts) {
    return (
      <Container>
        <span>
          <TagTitle>Posts about <span className='pink caps'>{tagName}</span>:</TagTitle>
        </span>
          {posts.map((post,index) => {
            return (
              <Link key={index} to={post.frontmatter.path}>
                <Tease className='tease'>
                  <Date className="date">
                    <Month>{post.frontmatter.month}</Month>
                    <div>{post.frontmatter.day}</div>
                    <Year>{post.frontmatter.year}</Year>
                  </Date>
                  <div>
                    <Details>
                      <OldTitle className='title'>{post.frontmatter.title}</OldTitle>
                      <PostTags className="tags">{post.frontmatter.tags.join(', ')}</PostTags>
                    </Details>
                    <p className='no-margin excerpt'>{`${post.excerpt.substring(0, 115)}...`}</p>
                  </div>
                </Tease>
              </Link>
            )
          })}

      </Container>
    )
  }
}

export default Tags;