import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export enum attribute {
  style = "STYLE",
  decade = "DECADE",
  degreeOfDifficulty = "DEGREE OF DIFFICULT",
  tempo = "TEMPO",
}

export default function AttributeList(props: {
  items: {
    attribute: attribute;
    data: string | undefined | number;
  }[];
}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.items
        .filter((item) => item.data)
        .map((item) => (
          <ListItem key={"listItem" + item.attribute}>
            <ListItemText
              key={"test" + item.attribute}
              primary={item.attribute}
              secondary={item.data}
            />
          </ListItem>
        ))}
    </List>
  );
}
