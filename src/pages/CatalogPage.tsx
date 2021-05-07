import CircularProgress from "@material-ui/core/CircularProgress";

import SongCard from "../components/SongCard/SongCard";
import { SongType } from "../models/SongType";
import { setErrorMessageType } from "../models/StateTypes";

import "./CatalogPage.scss";

export default function CatalogPage(props: {
  songs?: SongType[];
  setErrorMessage: setErrorMessageType;
}) {
  return (
    <div className="CatalogPage">
      <section>
        {props.songs ? (
          props.songs.map((song) => {
            return <SongCard song={song} />;
          })
        ) : (
          <CircularProgress />
        )}
      </section>
    </div>
  );
}
