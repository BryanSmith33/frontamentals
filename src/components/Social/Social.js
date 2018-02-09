import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import styled from 'styled-components';

const SocialLinks = styled.div`
  width: 225px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Social = ({ data }) => {
  const TwitterIcon = generateShareIcon('twitter');
  const FacebookIcon = generateShareIcon('facebook');
  const LinkedinIcon = generateShareIcon('linkedin');
  const { FacebookShareButton, LinkedinShareButton, TwitterShareButton } = ShareButtons;
  return (
    <div>
      <h3>Liked what you saw?<br />Your friends will too</h3>
      <SocialLinks>
        <TwitterShareButton url={`https://www.frontamentals.com${data.path}`}
          title={`${data.title} | Frontamentals`}>
          <TwitterIcon size={55} />
        </TwitterShareButton>
        <FacebookShareButton url={`https://www.frontamentals.com${data.path}`}
          quote={`${data.title} | Frontamentals`}>
          <FacebookIcon size={55} />
        </FacebookShareButton>
        <LinkedinShareButton url={`https://www.frontamentals.com${data.path}`}
          title={`${data.title} | Frontamentals`}>
          <LinkedinIcon size={55} />
        </LinkedinShareButton>
      </SocialLinks>
    </div>
  )
}

export default Social;