import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { BaseButton, DetailButton, SignInput } from '@/shared';

export const Home = () => (
  <>
    <h1>Review with AI</h1>
    <Flex direction="column">
      <BaseButton type="button">로그인</BaseButton>
      <BaseButton type="button">회원가입</BaseButton>
      <SignInput placeholder="아이디" />
      <br />
      <SignInput placeholder="비밀번호" />
      <BaseButton type="submit" theme="highlight">
        로그인
      </BaseButton>
      <BaseButton type="button">AI로 질문을 생성해 보세요</BaseButton>
    </Flex>
    <Flex direction="row" justify="center">
      <Circle>
        <img src="src/assets/react.svg" alt="icon" />
      </Circle>
      <Circle>
        <img src="src/assets/react.svg" alt="icon" />
      </Circle>
      <DetailButton type="button">편집</DetailButton>
    </Flex>
  </>
);

const Circle = styled.button`
  width: 50px;
  height: 50px;
  background-color: #f9f9f9;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 10px;
`;
