import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Subscribe from '../components/Subscribe/Subscribe';
import Img from 'gatsby-image';
import { FeaturedPost, FeaturedTitle, OldTitle, Tease, Date, Month, Year, Details, PostTags, BTF, Excerpt } from '../components/UIComponents';

const HeroImg = styled(Img)`
  margin-right: 27px;
  width: 530px;
  @media(max-width: 1000px){
    margin: 0 0 15px;
    width: 100%;
  }
`;

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.map(({ node: post }, index) => {
        const { frontmatter } = post;
        if (index === 0) {
          return (
            <FeaturedPost key={index}>
              <Link to={frontmatter.path}>
                <Tease featured={true}>
                  <HeroImg sizes={frontmatter.image.childImageSharp.sizes} alt={frontmatter.title} />
                  <div>
                    <FeaturedTitle>{frontmatter.title}</FeaturedTitle>
                    <Excerpt className='no-margin'>{post.excerpt}</Excerpt>
                    <PostTags>{frontmatter.tags.join(', ')}</PostTags>
                  </div>
                </Tease>
              </Link>
            </FeaturedPost>
          )
        }
      })}
      <BTF>
        <Subscribe />
        <div className="old-posts">
          {posts.map(({ node: post }, index) => {
            const { frontmatter } = post;
            if (index !== 0) {
              return (
                <Link key={index} to={frontmatter.path}>
                  <Tease>
                    <Date>
                      <Month className='month'>{frontmatter.month}</Month>
                      <div>{frontmatter.day}</div>
                      <Year className='year'>{frontmatter.year}</Year>
                    </Date>
                    <div>
                      <Details>
                        <OldTitle>{frontmatter.title}</OldTitle>
                        <PostTags>{frontmatter.tags.join(', ')}</PostTags>
                      </Details>
                      <Excerpt className='no-margin excerpt'>{`${post.excerpt.substring(0, 115)}...`}</Excerpt>
                    </div>
                  </Tease>
                </Link>
              )
            }
          })}
        </div>
      </BTF>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 240)
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            month
            day
            year
            path
            tags
            image {
              childImageSharp {
                sizes{
                  ...GatsbyImageSharpSizes
                }
                responsiveSizes{
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage;
