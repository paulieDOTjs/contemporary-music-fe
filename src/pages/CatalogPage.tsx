import CircularProgress from "@material-ui/core/CircularProgress";

import SongCard from "../components/SongCard/SongCard";
import { SongType } from "../models/SongType";
import { SetErrorMessageType } from "../models/MessageType";

import "./CatalogPage.scss";

export default function CatalogPage(props: {
  songs?: SongType[];
  setErrorMessage: SetErrorMessageType;
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
