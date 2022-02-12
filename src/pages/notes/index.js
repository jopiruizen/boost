import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import {
    Grid,
} from '@mui/material';

import useNotes from './useNotes';
function Notes () {
    const notes = useNotes();
    console.log('hello are you rendering me...');
    return (
        <Grid>
            HELLO THIS IS THE NOTE
        </Grid>
    );
}


Notes.propTypes = {

};

Notes.defaultProps = {

};

const enhancers = [
    memo,
];

export default compose(...enhancers)(Notes);
