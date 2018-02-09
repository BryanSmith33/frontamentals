import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Bio from '../components/Bio/Bio';
import Social from '../components/Social/Social';
import styled from 'styled-components';
import Img from 'gatsby-image';
import './prism.css';

const PostTitle = styled.h1`
  text-align: center;
`;
const PostDate = styled.h4`
  font-weight: 200;
`;
const PostTags = styled.div`
  color: #BCBCBC;
  margin: 15px 0;
`;
const BackToHome = styled.div`
  margin: 15px 0;
`;
const Template = ({ data, location }) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  const { title, date, tags: postTags, image, path } = frontmatter;
  const { src: imageSrc } = frontmatter.image.childImageSharp.responsiveSizes
  return (
    <div>
      <Helmet>
        <title>{`${title} | Frontamentals`}</title>
        <meta property="og:url" content={`https://www.frontamentals.com${path}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content={`https://www.frontamentals.com${imageSrc}`} />
        <meta property="og:image:secure_url" content={`https://www.frontamentals.com${imageSrc}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Frontamentals. Your source for Front End Funamentals." />
        <meta name="twitter:image" content={`https://www.frontamentals.com${imageSrc}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
        <Img resolutions={image.childImageSharp.resolutions} alt={title}/>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <PostTags>{postTags.join(', ')}</PostTags>
        <Social data={frontmatter} />
        <Link to='/'>
          <BackToHome>{`< Back To Posts`}</BackToHome>
        </Link>
        <Bio />
      </div>
    </div>
  )
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: {path: {eq: $path}}){
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        image {
          childImageSharp {
            resolutions(width: 960){
              ...GatsbyImageSharpResolutions
            }
            responsiveSizes(maxWidth: 960){
              src
            }
          }
        }
      }
    }
  }
`

export default Template;