import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { SongType } from "../../models/SongType";
import { ATTRIBUTE } from "../../models/ATTRIBUTE";
import dummy from "../../media/dummy.jpg";
import AttributeList from "./AttributeList";

import Tags from "./tags";
import "./SongCard.scss";
import { FilterType } from "../../models/FilterType";
import { includes } from "../../utils/DataCompare";

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

export default function SongCard(props: {
  song: SongType | undefined;
  filters: FilterType;
}) {
  const classes = useStyles();
  const { song } = props;

  return (
    <div className="SongCard">
      {!song ? (
        ""
      ) : (
        <Card className={classes.root}>
          <CardHeader
            title={song.title ?? ""}
            subheader={song.madeFamousBy ?? ""}
          />
          <CardMedia
            className={classes.media}
            image={song.imageURL ?? dummy}
            title={song.title ?? ""}
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

            <Tags
              tags={[
                {
                  attribute: ATTRIBUTE.GENRE,
                  data: song.genre,
                  activated: !song.genre
                    ? true
                    : includes(song.genre, props.filters.genre) &&
                      props.filters.genre.length > 0,
                },
                {
                  attribute: ATTRIBUTE.DEGREE_OF_DIFFICULTY,
                  data: song.degreeOfDifficulty,
                  activated: !song.degreeOfDifficulty
                    ? true
                    : includes(
                        song.degreeOfDifficulty,
                        props.filters.degreeOfDifficulty
                      ) && props.filters.degreeOfDifficulty.length > 0,
                },
                {
                  attribute: ATTRIBUTE.DECADE,
                  data: song.decade,
                  activated: !song.decade
                    ? true
                    : includes(song.decade, props.filters.decade) &&
                      props.filters.decade.length > 0,
                },
                {
                  attribute: ATTRIBUTE.TEMPO,
                  data: song.tempo,
                  activated: !song.tempo
                    ? true
                    : song.tempo < Math.min(...props.filters.tempoRange) &&
                      song.tempo > Math.max(...props.filters.tempoRange),
                },
              ]}
            />
          </CardContent>
          <CardActions
            disableSpacing
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link to="/catalog">
              <Button size="small" variant="contained" color="primary">
                More
              </Button>
            </Link>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
