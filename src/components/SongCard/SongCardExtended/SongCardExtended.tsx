import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import AttributeList from "../SubComponents/AttributeList";
import dummy from "../../../media/dummy.jpg";
import { ATTRIBUTE } from "../../../models/ATTRIBUTE";
import { SongType } from "../../../models/SongType";

import PlayArrow from "@material-ui/icons/PlayArrow";
import { Typography } from "@material-ui/core";

export default function SongPageCard(props: { song: SongType }) {
  const { song } = props;
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        maxWidth: 800,
        minWidth: 300,
        margin: 24,
      },
      media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
      },
    })
  );

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={song.title ?? ""}
        subheader={song.madeFamousBy ?? ""}
      />
      <CardMedia
        className={classes.media}
        image={song.imageURL ?? dummy}
        title={song.title ?? "title"}
      />
      <CardContent>
        <AttributeList
          items={[
            { attribute: ATTRIBUTE.GENRE, data: song.genre },
            {
              attribute: ATTRIBUTE.DEGREE_OF_DIFFICULTY,
              data: song.degreeOfDifficulty,
            },
            { attribute: ATTRIBUTE.TEMPO, data: song.tempo },
            { attribute: ATTRIBUTE.DECADE, data: song.decade },
          ]}
        />

        <div className="additional">
          <Typography variant="body2" color="textSecondary" component="p">
            {song.composers && song.composers.length > 0
              ? "Composed by: " + song.composers.join(", ")
              : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {song.performanceNotes && song.performanceNotes.length > 0
              ? "Performance notes: " + song.performanceNotes.join(", ")
              : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {song.songFeatures && song.songFeatures.length > 0
              ? "Song features: " + song.songFeatures.join(", ")
              : ""}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {song.studentsStudied && song.studentsStudied.length > 0
              ? "Students studied: " + song.studentsStudied.join(", ")
              : ""}
          </Typography>
        </div>
      </CardContent>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button size="small" variant="contained" color="primary">
          <PlayArrow />
          Listen
        </Button>
      </CardActions>
    </Card>
  );
}
