import React from "react";
import CountUp from "react-countup";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: (props) => {
    if (props.type === "confirmed")
      return {
        borderLeft: "5px solid red",
      };
    else if (props.type === "recovered")
      return {
        borderLeft: "5px solid green",
      };
    else
      return {
        borderLeft: "5px solid gray",
      };
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default function HighlightCard({ title, count, type }) {
  const styles = useStyles({ type });

  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography component="p" variant="body2" className={styles.title}>
          {title}
        </Typography>
        <Typography component="span" variant="body2" className={styles.count}>
          <CountUp end={count || 0} duration={2} separator=" " />
        </Typography>
      </CardContent>
    </Card>
  );
}
