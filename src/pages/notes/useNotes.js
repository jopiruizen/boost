import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logInfo } from '../../utils/logs';

function useNote () {
    const notesList = useSelector(state => state.notes.notesList);

    const { 
        getNotesList,
    } = useDispatch().notes;

    useEffect(() => {
        getNotesList();
    }, []);

    useEffect(() => {
        logInfo('Notes is Updated -> ', notesList);
    }, [notesList]);

    return {
        notesList,
    };
}

export default useNote;
