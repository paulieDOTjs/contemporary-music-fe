import CircularProgress from "@material-ui/core/CircularProgress";

import SongCard from "../components/SongCard/SongCard";
import { SongType } from "../models/SongType";

import "./CatalogPage.scss";
import CatalogTopNav from "../components/CatalogTopNav/CatalogTopNav";

export default function CatalogPage(props: {
  songs?: SongType[];
  loading: boolean;
}) {
  return (
    <div className="CatalogPage">
      <CatalogTopNav allSongs={props.songs} />
      <section>
        {props.loading ? (
          <CircularProgress />
        ) : props.songs && props.songs.length > 0 ? (
          props.songs.map((song) => {
            return <SongCard key={song.title + "card"} song={song} />;
          })
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
