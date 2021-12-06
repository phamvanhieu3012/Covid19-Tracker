import { Grid } from "@material-ui/core";
import React from "react";
import LineChart from "../Charts/LineChart";

export default function Summary({ report, selectedCountryId }) {
  return (
    <Grid container spacing={3} style={{ marginTop: 10 }}>
      <Grid item sm={12} xs={12}>
        <LineChart data={report} />
      </Grid>
    </Grid>
  );
}
