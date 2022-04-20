import "./index.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export interface props {
  image: string;
  title: string;
}

function CardGif({ image, title }: props) {
  return (
    // <div className='card'>
    //     <img src={props.image} />
    //     <p>{props.title}</p>
    //     {/* {props.image} */}
    // </div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          aria-label="card-media"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            aria-label="typography"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardGif;
