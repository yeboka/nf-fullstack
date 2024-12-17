import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CrewCard({ data }) {    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <Typography>Agency: {data.agency}</Typography>
            <Typography>Status: {data.status}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show more</Button>
      </CardActions>
    </Card>
  );
}
