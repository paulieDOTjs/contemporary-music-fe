import CircularProgress from "@material-ui/core/CircularProgress";

import SongCard from "../components/SongCard/SongCard";
import { SongType } from "../models/SongType";
import { setErrorMessageType } from "../models/stateTypes";

export default function CatalogPage(props: {
  songs?: SongType[];
  setErrorMessage: setErrorMessageType;
}) {
  return (
    <div className="CatalogPage">
      <section>
        {!props.songs ? (
          <CircularProgress />
        ) : (
          <SongCard song={props.songs[1]} />
        )}
      </section>
    </div>
  );
}
