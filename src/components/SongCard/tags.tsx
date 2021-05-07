import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

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
    data: string | undefined | number;
    activated: boolean;
  }[];
}) {
  const classes = useStyles();

  return (
    <>
      {!props.tags
        ? ""
        : props.tags
            .filter((tag) => tag.data)
            .map((tag) => (
              <div className={classes.root}>
                <Chip
                  avatar={<Avatar>M</Avatar>}
                  label={tag.data}
                  clickable
                  color="primary"
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
              </div>
            ))}
    </>
  );
}
