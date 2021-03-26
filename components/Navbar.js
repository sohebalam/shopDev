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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton aria-label="menu">
            <Link href="/">
              <Image src="/v3.png" height="40px" width="40px" alt="logo" />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            OpenFreeUni
          </Typography>
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
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
