import styled from '@emotion/styled';

type NoteProps = {
  children: React.ReactNode;
};

export const Body = ({ children }: NoteProps) => <Container>{children}</Container>;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid purple;
`;
