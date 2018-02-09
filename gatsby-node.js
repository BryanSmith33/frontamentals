const path = require('path');

const createTagPages = (createPage, posts) => {
  const tagPageTemplate = path.resolve(`src/templates/tags.js`);
  const allTagsTemplate = path.resolve(`src/templates/all-tags.js`);

  const postsByTags = {};

  posts.forEach(({node}) => {
    if(node.frontmatter.tags){
      node.frontmatter.tags.forEach(tag => {
        if(!postsByTags[tag]){
          postsByTags[tag] = []
        }
        postsByTags[tag].push(node);
      })
    }
  })
  const tags = Object.keys(postsByTags);

  createPage({
    path: `/tags`,
    component: allTagsTemplate,
    context: {
      tags: tags.sort()
    }
  })
  tags.forEach(tagName => {
    const posts = postsByTags[tagName]
    createPage({
      path:`/${tagName}`,
      component: tagPageTemplate,
      context: {
        posts,
        tagName
      }
    })
  })
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`{
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      limit: 1000
    ) {
      edges {
        node {
          html
          excerpt(pruneLength: 240)
          frontmatter {
            date
            path
            title
            tags
            month
            day
            year
          }
        }
      }
    }
  }`)
    .then(res => {
      if (res.error) {
        return Promise.reject(res.errors)
      }
      const posts = res.data.allMarkdownRemark.edges;

      createTagPages(createPage, posts);

      posts.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {} // additional data can be passed via context
          });
        });
    })
}