import styled from 'styled-components';

const FeaturedPost = styled.div`
  position: fixed;
  max-width: 960px;
  top: 110px;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  @media(max-width: 1000px){
    position: initial;
    max-width: initial;
  }
`;
const FeaturedTitle = styled.h1`
  margin: 5px 15px 5px 0;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;
const OldTitle = styled.h2`
  margin: 5px 15px 5px 0;
`;
const Tease = styled.div`
  display: flex;
  margin-bottom: 25px;
  @media(max-width: 1000px){
    display: flex;
    flex-direction: ${props => props.featured ? 'column' : 'inherit'};
  }
`;
const Date = styled.div`
  width: 75px;
  margin-right: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.3em;
  font-family: 'TrueBold';
  color: #2C5776;
`;
const Month = styled.div`
  text-transform: uppercase;
`;
const Year = styled.div`
  color: #BCBCBC;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: 1000px){
    flex-direction: column;
    align-items: flex-start;
  }
`;
const PostTags = styled.span`
  color: #d42e96;
`;
const BTF = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 355px;
  background: #fff;
  padding: 0 1.0875rem 4.7rem;
  max-width: 960px;
  margin: 0 auto;
  @media(max-width: 1000px){
    flex-direction: column;
    top: 0;
  }
`;
const Excerpt = styled.p`
  color: #BCBCBC;
`;
const TagTitle = styled.h1`
  text-align: center;
`;
const SearchInput = styled.input`
  width: 300px;
  height: 50px;
  margin: 1em auto;
  font-size: 1.4em;
  display: block;
  text-align: center;
`;
const NoPosts = styled.div`
  text-align: center;
`;
const Emoji = styled.div`
  font-size: 4em;
  margin: 40px 0;
`;
const Container = styled.div`
  padding: 0rem 1.0875rem 4.7rem;
  max-width: 960px;
  margin: 25px auto;
`

export { FeaturedPost, FeaturedTitle, OldTitle, Tease, Date, Month, Year, Details, PostTags, BTF, Excerpt, TagTitle, SearchInput, NoPosts, Emoji, Container};