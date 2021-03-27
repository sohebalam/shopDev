import React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Link from "next/link"

const AdminMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "white" }}
      >
        Admin Section
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href="/userslist" underline="none">
          <MenuItem onClick={handleClose}>Users</MenuItem>
        </Link>
        <Link href="/upload" underline="none">
          <MenuItem onClick={handleClose}>Products</MenuItem>
        </Link>
        <Link href="/orderslist" underline="none">
          <MenuItem onClick={handleClose}>Orders</MenuItem>
        </Link>
        <Link href="/coursesadmin" underline="none">
          <MenuItem onClick={handleClose}>Courses</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default AdminMenu
