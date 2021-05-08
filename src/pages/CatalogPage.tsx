import CircularProgress from "@material-ui/core/CircularProgress";

import SongCard from "../components/SongCard/SongCard";
import { SongType } from "../models/SongType";

import "./CatalogPage.scss";
import CatalogTopNav from "../components/CatalogTopNav/CatalogTopNav";

export default function CatalogPage(props: { songs?: SongType[] }) {
  return (
    <div className="CatalogPage">
      <CatalogTopNav />
      <section>
        {props.songs && props.songs.length > 0 ? (
          props.songs.map((song) => {
            return <SongCard song={song} />;
          })
        ) : (
          <div className="loading">
            <CircularProgress />
          </div>
        )}
      </section>
    </div>
  );
}
