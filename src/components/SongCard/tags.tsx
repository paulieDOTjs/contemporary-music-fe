import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

import "./tags.scss";

import { ATTRIBUTE } from "../../models/ATTRIBUTE";
import AttributeIcon from "../AttributeIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
);

export default function Tags(props: {
  tags: {
    attribute: ATTRIBUTE;
    data: string | undefined | number;
    activated: boolean;
  }[];
}) {
  const classes = useStyles();

  return (
    <div className="tags">
      {!props.tags
        ? ""
        : props.tags
            .filter((tag) => tag.data)
            .map((tag) => (
              <div key={"wrapper" + tag.data} className={classes.root}>
                <Chip
                  key={"chip" + tag.data}
                  avatar={<AttributeIcon attribute={tag.attribute} />}
                  label={tag.data}
                  clickable
                  color={tag.activated ? "primary" : "secondary"}
                  deleteIcon={<DoneIcon />}
                  // variant="outlined"
                />
              </div>
            ))}
    </div>
  );
}
