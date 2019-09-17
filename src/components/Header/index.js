import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import AuthContext from "../../contexts/AuthContext";
import { Button } from "@material-ui/core";

import URLS from "../../utils/urls";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // position: "sticky",
    // top: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));

const Header = props => {
  let { location = {}, title, user: stateUser, requireAuth } = props;
  const { user, logout, updateCurrentUser } = useContext(AuthContext);
  const classes = useStyles({});
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  location.state = location.state || {};

  if (user == null) {
    updateCurrentUser();
  }

  function clickDeslogar(e) {
    e.preventDefault();
    logout();
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function goTo(page) {
    setAnchorEl(null);
    props.history.push(page);
  }

  return (
    // <div className={classes.root}>
    <AppBar position="sticky" style={{ backgroundColor: "#0E5159" }}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {stateUser || user ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => goTo(URLS.ACCOUNT_PAGE)}>
                Perfil
              </MenuItem>
              <MenuItem onClick={() => goTo(URLS.HOME_PAGE)}>
                Área Logada
              </MenuItem>
              <MenuItem onClick={clickDeslogar}>Sair</MenuItem>
            </Menu>
          </div>
        ) : (
          <>
            {requireAuth && (
              <Redirect
                to={{
                  pathname: URLS.WELLCOME_PAGE,
                  state: { from: props.location }
                }}
              />
            )}
            <Button color="inherit" onClick={() => goTo(URLS.LOGIN_PAGE)}>
              Entrar
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
    // </div>
  );
};

export default Header;
