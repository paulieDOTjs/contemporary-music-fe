import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router-dom";
import { find } from "lodash";

import { SongType } from "../../models/SongType";
import SongCardExtended from "../../components/SongCard/SongCardExtended/SongCardExtended";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./SongPage.scss";
import { SongPageRoutParams } from "../../models/SongPageRouteParams";
import { useEffect, useState } from "react";

export default function SongPage(props: {
  songs: SongType[];
  loading: boolean;
}) {
  const { songs, loading } = props;
  const params = useParams<SongPageRoutParams>();

  const [song, setSong] = useState<SongType | undefined>();

  useEffect(() => {
    if (songs) {
      setSong(
        find(songs, (indSong: SongType) => {
          return (
            indSong.madeFamousBy === params.madeFamousBy &&
            indSong.title === params.title
          );
        })
      );
    }
  }, [songs, song, params]);

  return (
    <div className="SongPage">
      {loading ? (
        <CircularProgress />
      ) : song ? (
        <SongCardExtended song={song} />
      ) : (
        <section className="NotFound">
          <h1>Song not found</h1>
          <Link to="/catalog">
            <Button variant="contained" color="secondary">
              Return to Catalog
            </Button>
          </Link>
        </section>
      )}
    </div>
  );
}
