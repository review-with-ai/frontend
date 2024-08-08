import { useState } from 'react';
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
        <h1>home</h1>
        <NoteList />
      </Body>
      <HomeAside>
        <Calendar
          prev2Label={null}
          next2Label={null}
          formatDay={(_, date) => date.getDate().toString()}
          calendarType="gregory"
          value={date}
          onChange={onChangeDate}
        />
      </HomeAside>
    </>
  );
};
