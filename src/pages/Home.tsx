import { Button, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { BaseButton, DetailButton } from '@/shared';

export const Home = () => (
  <>
    <h1>Review with AI</h1>
    <Flex direction="column" gap="10px">
      <Button>
        <span>로그인</span>
      </Button>
      <Button>
        <span>회원가입</span>
      </Button>
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
