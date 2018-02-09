import React from 'react';
import Link from 'gatsby-link';
import me from './yo_boy.png';
import styled from 'styled-components';
import { Follow } from 'react-twitter-widgets';

const Me = styled.div`
  min-height: 150px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ccc;
  padding: 20px 0 13px;
  @media (max-width: 700px){
    padding-bottom: 0;
  }
`;
const About = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const BioImg = styled.img`
  max-height: 100px;
  margin-right: 30px;
  margin-bottom: 0;
  @media (max-width: 700px){
    margin-right: 10px;
  }
`;
const Info = styled.p`
  margin-bottom: 15px;
`;
const Strong = styled.strong`
  color: #d42e96;
`;

const Bio = () => (
  <Me>
    <About>
      <BioImg src={me} alt="my ugly mug" />
      <Info>Written with love by <Strong>Bryan Smith</Strong>. Bryan is a designer and developer hailing from Salt Lake City, Utah. <a href="https://imbryan.com">Check out his website site here!</a></Info>
    </About>
    <Follow username="beeg_smith" />
  </Me>
)

export default Bio;