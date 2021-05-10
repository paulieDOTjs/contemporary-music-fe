import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ATTRIBUTE } from "../../models/ATTRIBUTE";
import AttributeIcon from "../AttributeIcon";
import { FILTER_KEYS, HandleFilterArgsType } from "../../models/FilterType";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

export default function SimpleSelect(props: {
  opts?: string[];
  attribute: ATTRIBUTE;
  handleSetFilters: (filt: HandleFilterArgsType) => void;
}) {
  const classes = useStyles();

  const getFilterKey = (attr: ATTRIBUTE): FILTER_KEYS => {
    switch (attr) {
      case ATTRIBUTE.GENRE:
        return FILTER_KEYS.GENRE;
      case ATTRIBUTE.DEGREE_OF_DIFFICULTY:
        return FILTER_KEYS.DIFFICULTY;
      default:
        return FILTER_KEYS.DECADE;
    }
  };

  return (
    <>
      <FormControl className={classes.formControl} style={{ width: "200px" }}>
        <InputLabel aria-valuetext="Any" id={props.attribute}>
          <AttributeIcon attribute={props.attribute} />
          {props.attribute}
        </InputLabel>
        <Select
          defaultValue="Any"
          labelId={props.attribute}
          id="demo-simple-select-helper"
          onChange={(e) =>
            props.handleSetFilters([
              getFilterKey(props.attribute),
              e.target.value as string,
            ])
          }
        >
          <MenuItem value="Any">
            <em>Any</em>
          </MenuItem>
          {props.opts ? (
            props.opts.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))
          ) : (
            <MenuItem value={"...loading"}>{"...loading"}</MenuItem>
          )}
        </Select>
      </FormControl>
    </>
  );
}
