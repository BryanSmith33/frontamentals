import React from 'react';
import styled from 'styled-components';

const Subscribe = styled.div`
  width: 260px;
  height: 470px;
  border: 1px solid #2C5776;
  background: #fff;
  padding: 15px;
  margin-right: 15px;
  position: sticky;
  top: 82px;
  z-index: 2;
  box-shadow: 0px 4px 11px 3px #d8dde1;
  @media(max-width: 1000px){
    width: initial;
    height: initial;
    border: 1px solid #2C5776;
    background: #fff;
    padding: 15px;
    margin-right: 0;
    margin: 15px 0 50px;
    position: initial;
    z-index: initial;
  }
`;
const SubscribeHeader = styled.h1`
  text-align: center;
  font-weight: 300;
`;
const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  @media(max-width: 1000px){
    margin: 0;
  }
`;
const FormInput = styled.input`
  width: 100%;
  margin: 10px 0;
  font-family: 'True', sans-serif;
`;
const FormButton = styled.button`
  border: none;
  box-shadow: 0px 4px 0px #112534;
  cursor: pointer;
  border-radius: 3px;
  text-transform: capitalize;
  width: 230px;
  height: 60px;
  margin: 10px auto;
  font-size: 18px;
  background: #2C5776;
  color: #fff;
  font-family: 'TrueLite';
  &:active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
`;
const SubscribeBox = () => {
  return (
    <Subscribe>
      <SubscribeHeader>Like What You See?</SubscribeHeader>
      <p>Subscribe and get a weekly update of awesome delivered to your inbox every Monday!</p>
      <SubscribeForm action="https://frontamentals.us17.list-manage.com/subscribe/post" method="POST">
        <FormInput type="hidden" name="u" value="a4a925b2d91aa54f026ee8f4b" />
        <FormInput type="hidden" name="id" value="392f9649f2" />
        <FormInput type="text" placeholder='first name' name="MERGE1" id="MERGE1" />
        <FormInput type="email" placeholder='email' name="MERGE0" id="MERGE0" />
        <FormButton>Send me the goods</FormButton>
      </SubscribeForm>
    </Subscribe>
  )
}

export default SubscribeBox;