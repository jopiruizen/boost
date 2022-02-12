import { makeStyles } from '@mui/styles';

const styles = (theme) => ({

    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
});

export default styles;
export const useStyles = makeStyles(styles);
 