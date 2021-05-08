import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";

import { SongType } from "../../models/SongType";
import { ATTRIBUTE } from "../../models/ATTRIBUTE";
import dummy from "../../media/dummy.jpg";
import AttributeList from "./AttributeList";

import Tags from "./tags";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
      minWidth: 300,
      margin: 24,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  })
);

export default function SongCard(props: { song: SongType | undefined }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.song?.title ?? ""}
        subheader={props.song?.madeFamousBy ?? ""}
      />
      <CardMedia
        className={classes.media}
        image={props.song?.imageURL ?? dummy}
        title={props.song?.title ?? ""}
      />
      <CardContent>
        <AttributeList
          items={[
            { attribute: ATTRIBUTE.GENRE, data: props.song?.genre },
            {
              attribute: ATTRIBUTE.DEGREE_OF_DIFFICULTY,
              data: props.song?.degreeOfDifficulty,
            },
            { attribute: ATTRIBUTE.TEMPO, data: props.song?.tempo },
            { attribute: ATTRIBUTE.DECADE, data: props.song?.decade },
          ]}
        />

        <Tags
          tags={[
            {
              attribute: ATTRIBUTE.GENRE,
              data: props.song?.genre,
              activated: true,
            },
            {
              attribute: ATTRIBUTE.DEGREE_OF_DIFFICULTY,
              data: props.song?.degreeOfDifficulty,
              activated: false,
            },
            {
              attribute: ATTRIBUTE.DECADE,
              data: props.song?.decade,
              activated: false,
            },
            {
              attribute: ATTRIBUTE.TEMPO,
              data: props.song?.tempo,
              activated: false,
            },
            {
              data: props.song?.madeFamousBy,
              attribute: ATTRIBUTE.MADE_FAMOUS_BY,
              activated: false,
            },
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
