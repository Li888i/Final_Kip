import React from "react";
import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);       
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return(
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder='메모 내용을 입력하세요...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small>남은 글자 수: {characterLimit - noteText.length}</small>
                <button className='save' onClick={handleSaveClick}>저장</button>
            </div>
        </div>
    );
};

export default AddNote;