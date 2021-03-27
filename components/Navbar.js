import Link from "next/link"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import Image from "next/image"
import PersonIcon from "@material-ui/icons/Person"
import { Box, Grid, GridList, List, ListItem } from "@material-ui/core"
import Head from "next/head"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs={4}>
            <ListItem>
              <Link href="/">
                <IconButton aria-label="menu">
                  <Image src="/v3.png" height="40px" width="40px" alt="logo" />
                </IconButton>
              </Link>
              <Typography variant="h6">OpenFreeUni</Typography>
            </ListItem>
          </Grid>
          <Grid item xs={10}></Grid>
          <Grid
            item
            xs={4}
            style={{
              justifyContent: " right",
              alignItems: " right",
              display: "flex",
            }}
          >
            <Link href="/cart">
              <Button color="inherit">
                <ShoppingCartIcon />
                Cart
              </Button>
            </Link>
            <Link href="/login">
              <Button color="inherit">
                <PersonIcon />
                Login
              </Button>
            </Link>
            <Button color="inherit">Login</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

export default Navbar
