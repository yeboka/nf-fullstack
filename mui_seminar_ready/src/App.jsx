import { useState } from "react";
import axios from "axios";

import { Button, Grid, Typography } from "@mui/material";
import CrewCard from "./components/CrewCard";
import SkeletonCrewCard from "./components/SkeletonCrewCard";
import ErrorPage from "./ErrorPage";

function App() {
  const [crew, setCrew] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const getSpaceXData = () => {
    setLoading(true);
    setError(false);
    axios
      .get("https://api.spacexdata.com/v4/crew")
      .then((res) => {
        setCrew(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
        setError(true);
      });
  };

  if (isLoading) {
    return <Grid container spacing={2} direction="column" p={3}>
    <Grid item>
      <Typography>SpaceX launches</Typography>
    </Grid>
    <Grid item>
      <Button variant="outlined" onClick={getSpaceXData}>
        Get Crew
      </Button>
    </Grid>
   
    <Grid item>
      <Grid container spacing={2}>
        {[1, 2, 3,4 ,5 ,6 ,7 ,8].map((el) => (
          <Grid key={el.id} item xs={12} sm={6} md={4} lg={3}>
            <SkeletonCrewCard />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
  }


  if (isError) {
    return <ErrorPage />
  }


  return (
    <Grid container spacing={2} direction="column" p={3}>
      <Grid item>
        <Typography>SpaceX launches</Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={getSpaceXData}>
          Get Crew
        </Button>
      </Grid>
     
      <Grid item>
        <Grid container spacing={2}>
          {crew.map((el) => (
            <Grid key={el.id} item xs={12} sm={6} md={4} lg={3}>
              <CrewCard data={el}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
