import { Box } from '@chakra-ui/react';
import { Body } from '@/shared';
import { Nav } from '@/shared/components/Nav';
import { NoteList } from '@/shared/components/NoteList';

export const Home = () => (
  <>
    <Nav />
    <Body>
      <Box
        style={{
          margin: 0,
          padding: '0 47px',
          paddingRight: '35px',
          width: '100%',
        }}
      >
        <h1>home</h1>
        <NoteList />
      </Box>
    </Body>
  </>
);
