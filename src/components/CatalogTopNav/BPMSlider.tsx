import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import AttributeIcon from "../AttributeIcon";
import { ATTRIBUTE } from "../../models/ATTRIBUTE";

const useStyles = makeStyles({
  root: {
    color: "black",
    width: 200,
  },
});

function valuetext(value: number) {
  return `${value}°C`;
}

export default function BPMSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([40, 200]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className={classes.root}>
      <Typography
        id="range-slider"
        style={{
          marginTop: "12px",
          color: "rgba(0, 0, 0, 0.54)",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AttributeIcon attribute={ATTRIBUTE.TEMPO} /> BPM
      </Typography>
      <Slider
        style={{ color: "black", marginTop: "6px", marginBottom: 0 }}
        min={40}
        max={200}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
