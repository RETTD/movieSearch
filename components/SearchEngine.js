import {
  AppBar,
  TextField,
  Grid,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
  },
});

const SearchEngine = ({ getMovies, handleChange, text }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Find the movie"
              value={text}
              onChange={handleChange}
            />
            <Button
              style={{
                marginLeft: 20,
                marginTop: 10,
                border: "1px solid #D3D3D3",
                borderRadius: 15,
                backgroundColor: 'skyblue'
              }}
              onClick={() => getMovies()}
            >
              Find the movie!
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default SearchEngine;
