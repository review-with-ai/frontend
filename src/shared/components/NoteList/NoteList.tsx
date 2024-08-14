import styled from '@emotion/styled';
import { AllNoteItem, HomeNoteItem, TrashNoteItem } from '@/shared';

type NoteListProps = {
  noteType: 'all' | 'home' | 'trash';
};

export const NoteList = ({ noteType }: NoteListProps) => {
  const isHome = noteType === 'home';
  const isAll = noteType === 'all';
  const isTrash = noteType === 'trash';

  return (
    <Container>
      {isHome && <HomeNoteItem />}
      {isAll && <AllNoteItem />}
      {isTrash && <TrashNoteItem />}
    </Container>
  );
};

const Container = styled.div`
  padding: 0 8px 20px;
`;
