import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/shared/components/Calendar/CustomCalendar.css';
import { Body, HomeAside } from '@/shared';
import { Nav } from '@/shared/components/Nav';
import { NoteList } from '@/shared/components/NoteList';

export const Home = () => {
  const [date, setDate] = useState(new Date());

  const onChangeDate = (newDate: Date) => {
    setDate(newDate);
  };

  return (
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
      <HomeAside>
        <Calendar
          prev2Label={null}
          next2Label={null}
          formatDay={(_, date) => date.getDate().toString()}
          calendarType="gregory"
          value={date}
          onChange={onChangeDate}
          style={{
            border: 'none',
          }}
        />
      </HomeAside>
    </>
  );
};
