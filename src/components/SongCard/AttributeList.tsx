import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { ATTRIBUTE } from "../../models/ATTRIBUTE";
import AttributeIcon from "./AttributeIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function AttributeList(props: {
  items: {
    attribute: ATTRIBUTE;
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
            <ListItemAvatar>
              <Avatar>
                <AttributeIcon attribute={item.attribute} />
              </Avatar>
            </ListItemAvatar>
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
