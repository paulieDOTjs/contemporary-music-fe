import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import PlayArrow from "@material-ui/icons/PlayArrow";

import { SongType } from "../../models/SongType";
import { ATTRIBUTE } from "../../models/ATTRIBUTE";
import AttributeList from "./AttributeList";

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
        image="https://via.placeholder.com/350x150"
        title={props.song?.title ?? ""}
      />
      <CardContent>
        <AttributeList
          items={[
            { attribute: ATTRIBUTE.STYLE, data: props.song?.style },
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
              attribute: ATTRIBUTE.STYLE,
              data: props.song?.style,
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
