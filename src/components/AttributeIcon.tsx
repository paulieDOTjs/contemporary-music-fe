import React from "react";

import MusicNoteIcon from "@material-ui/icons/MusicNote";
import GradeIcon from "@material-ui/icons/Grade";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SpeedIcon from "@material-ui/icons/Speed";
import MicIcon from "@material-ui/icons/Mic";
import { ATTRIBUTE } from "../models/ATTRIBUTE";

export default function AttributeIcon(props: { attribute: ATTRIBUTE }) {
  return <>{getAttrIcon(props.attribute)}</>;
}

const getAttrIcon = (attr: ATTRIBUTE) => {
  switch (attr) {
    case ATTRIBUTE.STYLE:
      return <MusicNoteIcon />;
    case ATTRIBUTE.DEGREE_OF_DIFFICULTY:
      return <GradeIcon />;
    case ATTRIBUTE.DECADE:
      return <WatchLaterIcon />;
    case ATTRIBUTE.TEMPO:
      return <SpeedIcon />;
    case ATTRIBUTE.MADE_FAMOUS_BY:
      return <MicIcon />;
    default:
      return <MusicNoteIcon />;
  }
};
