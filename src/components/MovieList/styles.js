import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    moviesContainer: {
        display: 'flex',
        flexWrap: 'wrap', // To wrap our movies on multiple lines
        justifyContent: 'space-between',
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
}));