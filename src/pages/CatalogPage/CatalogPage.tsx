import { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import SongCardShort from "../../components/SongCard/SongCardShort/SongCardShort";
import { SongType } from "../../models/SongType";

import "./CatalogPage.scss";
import CatalogTopNav from "../../components/CatalogTopNav/CatalogTopNav";
import {
  DEFAULT_FILTERS,
  FilterType,
  FILTER_KEYS,
  HandleFilterArgsType,
} from "../../models/FilterType";
import { includes } from "../../utils/DataCompare";

export default function CatalogPage(props: {
  songs?: SongType[];
  loading: boolean;
}) {
  const [filters, setFilters] = useState<FilterType>(DEFAULT_FILTERS);

  const handleSetFilters = (filt: HandleFilterArgsType | "clear") => {
    if (filt === "clear") {
      setFilters(DEFAULT_FILTERS);
    } else {
      if (filt[1] === "Any" && filt[0] !== FILTER_KEYS.SEARCH_STRING) {
        filt[1] = "";
      }
      switch (filt[0]) {
        case FILTER_KEYS.SEARCH_STRING:
          setFilters({ ...filters, searchString: filt[1] });
          break;
        case FILTER_KEYS.GENRE:
          setFilters({ ...filters, genre: filt[1] });
          break;
        case FILTER_KEYS.DIFFICULTY:
          setFilters({ ...filters, degreeOfDifficulty: filt[1] });
          break;
        case FILTER_KEYS.DECADE:
          setFilters({ ...filters, decade: filt[1] });
          break;
        case "BPM":
          setFilters({ ...filters, tempoRange: filt[1] });
      }
    }
  };

  const handleFilter = (song: SongType): boolean => {
    //if song decade does not include filter decade return false
    if (
      (filters.decade.length > 0 && !song.decade) ||
      (song.decade && !includes(song.decade, filters.decade))
    )
      return false;

    //if song decade does not include filter decade return false
    if (
      (filters.genre.length > 0 && !song.genre) ||
      (song.genre && !includes(song.genre, filters.genre))
    )
      return false;

    //if song decade does not include filter decade return false
    if (
      (filters.degreeOfDifficulty.length > 0 && !song.degreeOfDifficulty) ||
      (song.degreeOfDifficulty &&
        !includes(song.degreeOfDifficulty, filters.degreeOfDifficulty))
    )
      return false;

    // if the current filters match default skip.
    //else if no tempo don't return
    // else if out of tempo range don't return
    if (
      Math.min(...filters.tempoRange) ===
        Math.min(...DEFAULT_FILTERS.tempoRange) &&
      Math.max(...filters.tempoRange) ===
        Math.max(...DEFAULT_FILTERS.tempoRange)
    ) {
    } else if (!song.tempo) {
      return false;
    } else if (
      song.tempo < Math.min(...filters.tempoRange) ||
      song.tempo > Math.max(...filters.tempoRange)
    ) {
      return false;
    }

    if (
      (song.title && includes(song.title, filters.searchString)) ||
      (song.madeFamousBy && includes(song.madeFamousBy, filters.searchString))
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="CatalogPage">
      <CatalogTopNav
        handleSetFilters={handleSetFilters}
        allSongs={props.songs}
      />
      <section>
        {props.loading ? (
          <CircularProgress />
        ) : props.songs && props.songs.length > 0 ? (
          props.songs.filter(handleFilter).map((song) => {
            return (
              <SongCardShort
                handleSetFilters={handleSetFilters}
                key={song.title + "card"}
                filters={filters}
                song={song}
              />
            );
          })
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
