import { Grid, Toolbar } from "@material-ui/core";
const Header = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Toolbar>
        <Grid
          container
          style={{
            backgroundImage:
              "url(https://www.cinema-city.pl/static/dam/jcr:0fe4c93b-b15b-49ac-a4b3-1db2aca2de3a)",
            height: 340,
          }}
        ></Grid>
      </Toolbar>
    </div>
  );
};
export default Header;
