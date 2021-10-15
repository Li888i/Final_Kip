import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./NoteList";

const Mypage_memo = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "2011.01.15",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "2022.10.15",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "2021.10.15",
    },
]);

  return (
    <div className='container'>
      <NoteList notes={notes} />
    </div>
  );
};

export default Mypage_memo;