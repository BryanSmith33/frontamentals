import React from 'react';
import Link from 'gatsby-link';
import { Date, Month, Year, Details, PostTags, OldTitle, Tease, SearchInput, Emoji, NoPosts, Container } from '../components/UIComponents';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPosts: this.props.data.allMarkdownRemark.edges,
      postsToFilter: this.props.data.allMarkdownRemark.edges
    }
  }

  componentDidMount() {
    this.input.focus();
  }

  handleSearch() {
    let results = this.state.postsToFilter.filter(post => post.node.frontmatter.title.toLowerCase().includes(this.input.value.toLowerCase()) || post.node.frontmatter.tags.includes(this.input.value.toLowerCase()));
    this.setState({
      filteredPosts: results
    });
  }

  render() {
    return (
      <Container>
        <SearchInput className='search'
          aria-label='Search by title or tags'
          innerRef={input => this.input = input}
          type="text"
          placeholder='Search by Title or Tags'
          onChange={() => this.handleSearch()}
        />
        {this.state.filteredPosts.length ? this.state.filteredPosts.map(({ node: post }, index) => {
          const { frontmatter } = post;
          return (
            <Link key={index} to={frontmatter.path}>
              <Tease>
                <Date>
                  <Month>{frontmatter.month}</Month>
                  <div>{frontmatter.day}</div>
                  <Year>{frontmatter.year}</Year>
                </Date>
                <div>
                  <Details>
                    <OldTitle>{frontmatter.title}</OldTitle>
                    <PostTags>{frontmatter.tags.join(', ')}</PostTags>
                  </Details>
                  <p className='no-margin excerpt'>{`${post.excerpt.substring(0, 115)}...`}</p>
                </div>
              </Tease>
            </Link>
          )
        })
      :
          <NoPosts>
            <Emoji>{`🤬`}</Emoji>
            <h1>We searched high and low but we couldn't find any posts that matched <span className='pink'>{this.input.value}...</span></h1>
          </NoPosts>
      }
      </Container>
    )
  }
}

export const query = graphql`
  query SearchQuery {
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
          }
        }
      }
    }
  }
`

export default Search;
