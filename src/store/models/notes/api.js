import {v4 as uuid } from 'uuid';
import axios from 'axios';
import { logInfo } from '../../../utils/logs';

const NameSpaces = {
    NOTES_LIST: 'notes-lists',
    NOTE_DETAILS : 'note-',
}

export async function getList () {
    const NAME_SPACE = NameSpaces.NOTES_LIST
    const now = new Date().getTime();
    const listData = localStorage.getItem(NAME_SPACE);
  
    if (!listData) {
        const newData = {};
        newData.dateCreated = now;
        newData.dateModified = now;
        newData.list = {}
        localStorage.setItem(NAME_SPACE, JSON.stringify(newData));
        return newData;
    }
    return JSON.parse(listData);
}

export async function upsertList (list) {
    const NAME_SPACE = NameSpaces.NOTES_LIST;
    const now = new Date().getTime();

    let store = localStorage.getItem(NAME_SPACE);

    if (store) {
        store = JSON.parse(store)
         const newStore = {
             ...store,
             ...list,
             dateModified: now,
         };
         localStorage.setItem(NAME_SPACE, JSON.stringify(newStore));
     } else {
         const newStore = {
             ...list,
             dateCreated: now,
             dateModified: now,
         };
         localStorage.setItem(NAME_SPACE, JSON.stringify(newStore));
     }
}


export async function upsertNote (note) {
    const NAME_SPACE = NameSpaces.NOTE_DETAILS + note.id;
    const now = new Date().getTime();

    let details = localStorage.getItem(NAME_SPACE);

    if (details) {
       details = JSON.parse(details)
        const newNote = {
            ...details,
            ...note,
            dateModified: now,
        };
        localStorage.setItem(NAME_SPACE, JSON.stringify(newNote));
    } else {
        const newNote = {
            ...note,
            dateCreated: now,
            dateModified: now,
        };
        localStorage.setItem(NAME_SPACE, JSON.stringify(newNote));
    }
}

export function upsertToList (note) {
    const listData = getList();
    listData.list[note.id] = note;
    upsertList(listData);
}

export  async function createNote (note) {
    const newNote = {
        ...note,
        id: uuid(),
    };
    upsertNote(newNote);
    upsertToList(newNote);
}

export async function updateNote (note) {
    upsertNote(note);
    upsertToList(note);
}

export async function getClientInfo () {
    const res = await axios.get('https://ipapi.co/json/');
    logInfo('getClientInfo() : ', res.data);
    return res.data;
}
