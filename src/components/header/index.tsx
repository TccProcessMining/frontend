import { AppBar, Avatar, Grid, makeStyles, Toolbar } from "@material-ui/core"
import { deepOrange } from '@material-ui/core/colors';
import React from "react"

const useStyles = makeStyles((theme) => ({
  header: {
    margin: -theme.spacing(1),
    backgroundColor: "rgba(0,0,255)"
  },
  appBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  }
}))

export default function Header() {
  const classes = useStyles()
	return (
      <AppBar
      className={classes.appBar}
      position="static"
      color="default"
      elevation={0}
      >
        <Toolbar className={classes.header}>
          <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                  <h1>Logo</h1>
              </Grid>
              <Grid item  >
                <Avatar className={classes.orange}>L</Avatar>
              </Grid>
          </Grid>
      </Toolbar>
    </AppBar>
	)
}