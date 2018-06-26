import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import './index.css';

const Container = styled.div`
  margin: 120px auto 0;
  @media(max-width: 700px){
    margin-top: 20px;
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
