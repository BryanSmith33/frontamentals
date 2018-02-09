import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import './index.css';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 7rem 1.0875rem 4.7rem;
  @media(max-width: 700px){
    padding-top: 2em;
  }
`;

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Frontamentals | Your source for Front End Development"
        meta={[
          { name: 'description', content: 'Frontamentals. Your source for Front End Development Fundamentals.' },
          { name: 'keywords', content: 'HTMLS, CSS, JavaScript, Tutorial, Front End, Development, Frontamentals' },
        ]}
      />
      <Header />
      <Container>
        {children()}
      </Container>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
