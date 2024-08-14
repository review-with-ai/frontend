import { Flex, Image, Tag, TagLabel } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Body, NoteList, Typography } from '@/shared';
import { Nav } from '@/shared/components/Nav';

export const Trash = () => (
  <>
    <Nav />
    <Body>
      <Container>
        <Flex
          flexDirection="row"
          justify="space-between"
          style={{
            padding: '29px 35px 28px 47px',
          }}
        >
          <Typography variant="h1" fontWeight={400}>
            휴지통
          </Typography>
          <Tag
            size="md"
            borderRadius="full"
            variant="outline"
            colorScheme="blackAlpha"
            style={{
              padding: '4px 10px',
            }}
          >
            <TagLabel>
              <Flex>
                <Image src="/src/assets/icon/info.svg" alt="info" width="14px" marginRight="6px" />
                <Typography variant="subtitle1">
                  휴지통에 저장된 항목은 1달이 지나면 자동으로 완전히 삭제됩니다.
                </Typography>
              </Flex>
            </TagLabel>
          </Tag>
        </Flex>
        <NoteList noteType="trash" />
      </Container>
    </Body>
  </>
);

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
