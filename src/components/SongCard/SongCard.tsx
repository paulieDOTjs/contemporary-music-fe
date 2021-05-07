import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import PlayArrow from "@material-ui/icons/PlayArrow";

import { SongType } from "../../models/SongType";
import AttributeList, { attribute } from "./AttributeList";
import Tags from "./tags";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function SongCard(props: { song: SongType }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.song.title ?? ""}
        subheader={props.song.madeFamousBy ?? ""}
      />
      <CardMedia
        className={classes.media}
        image="https://via.placeholder.com/350x150"
        title={props.song.title ?? ""}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary">
          <AttributeList
            items={[
              { attribute: attribute.style, data: props.song.style },
              {
                attribute: attribute.degreeOfDifficulty,
                data: props.song.degreeOfDifficulty,
              },
              { attribute: attribute.tempo, data: props.song.tempo },
              { attribute: attribute.decade, data: props.song.decade },
            ]}
          />
        </Typography>
        <Tags
          tags={[
            { data: props.song.style, activated: true },
            { data: props.song.degreeOfDifficulty, activated: false },
            { data: props.song.decade, activated: true },
            { data: props.song.tempo, activated: false },
          ]}
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className="makeStyles-expand-164">
          <PlayArrow />
        </IconButton>
      </CardActions>
    </Card>
  );
}
