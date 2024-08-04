import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { NavButton, NavContent, NavFooter, Navigation, PATH, Typography } from '@/shared';

export const Nav = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    console.log('home');
    navigate(PATH.HOME);
  };

  const handleClickNewNote = () => {
    console.log('new note');
    navigate(PATH.NOTE);
  };

  const handleClickTrash = () => {
    console.log('trash');
    navigate(PATH.TRASH);
  };

  const handleClickSetting = () => {
    console.log('setting');
    navigate(PATH.ACCOUNT);
  };

  const handleClickLogout = () => {
    console.log('logout');
    navigate(PATH.MAIN);
  };

  // const getCategories = async () => {
  //   try {
  //     const response = await http.get('/api/v1/categories');
  //     console.log(response);
  //   } catch (e) {
  //     handleAxiosError(e);
  //   }
  // };

  // useEffect(() => {
  //   getCategories();
  // }, []);

  return (
    <Navigation>
      <Container>
        <Box
          onClick={handleClickHome}
          style={{
            cursor: 'pointer',
          }}
        >
          <Typography variant="h2">복습할고양</Typography>
        </Box>
        <NavButton onNote={handleClickNewNote} />
        <NavContent onHome={handleClickHome} onTrash={handleClickTrash} />
        <NavFooter onLogout={handleClickLogout} onSetting={handleClickSetting} />
      </Container>
    </Navigation>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1, 1;
`;
