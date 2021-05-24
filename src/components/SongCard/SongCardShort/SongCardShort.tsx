import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { SongType } from "../../../models/SongType";
import { ATTRIBUTE } from "../../../models/ATTRIBUTE";
import dummy from "../../../media/dummy.jpg";

import Tags from "../SubComponents/tags";
import "./SongCardShort.scss";
import {
  DEFAULT_FILTERS,
  FilterType,
  HandleFilterArgsType,
} from "../../../models/FilterType";
import { includes } from "../../../utils/DataCompare";

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
  handleSetFilters: (filt: HandleFilterArgsType) => void;
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
            <Tags
              handleSetFilters={props.handleSetFilters}
              tags={[
                {
                  attribute: ATTRIBUTE.GENRE,
                  data: song.genre,
                  activated: !song.genre
                    ? false
                    : includes(song.genre, props.filters.genre) &&
                      props.filters.genre.length > 0,
                },
                {
                  attribute: ATTRIBUTE.DEGREE_OF_DIFFICULTY,
                  data: song.degreeOfDifficulty,
                  activated: !song.degreeOfDifficulty
                    ? false
                    : includes(
                        song.degreeOfDifficulty,
                        props.filters.degreeOfDifficulty
                      ) && props.filters.degreeOfDifficulty.length > 0,
                },
                {
                  attribute: ATTRIBUTE.DECADE,
                  data: song.decade,
                  activated: !song.decade
                    ? false
                    : includes(song.decade, props.filters.decade) &&
                      props.filters.decade.length > 0,
                },
                {
                  attribute: ATTRIBUTE.TEMPO,
                  data: song.tempo,
                  activated:
                    !song.tempo ||
                    (Math.max(...props.filters.tempoRange) ===
                      Math.max(...DEFAULT_FILTERS.tempoRange) &&
                      Math.min(...props.filters.tempoRange) ===
                        Math.min(...DEFAULT_FILTERS.tempoRange))
                      ? false
                      : song.tempo > Math.min(...props.filters.tempoRange) &&
                        song.tempo < Math.max(...props.filters.tempoRange),
                },
              ]}
            />
          </CardContent>
          <CardActions
            disableSpacing
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link to={`/song/${song.madeFamousBy}/${song.title}`}>
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
