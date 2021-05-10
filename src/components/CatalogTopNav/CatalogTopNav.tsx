import { useState, MouseEvent } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Picker from "./Picker";
import { ATTRIBUTE } from "../../models/ATTRIBUTE";
import { SongType } from "../../models/SongType";
import MobileMenu from "./MobileMenu";
import { useStyles } from "./NavStyles";
import BPMSlider from "./BPMSlider";

import "./CatalogTopNav.scss";

export default function CatalogTopNav(props: { allSongs?: SongType[] }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <MobileMenu
      isMobileMenuOpen={isMobileMenuOpen}
      mobileMoreAnchorEl={mobileMoreAnchorEl}
      mobileMenuId={mobileMenuId}
      handleMobileMenuClose={handleMobileMenuClose}
      allSongs={props.allSongs}
    />
  );

  return (
    <div className="CatalogTopNav">
      <AppBar style={{ backgroundColor: "grey" }} position="static">
        <Toolbar>
          <div className="left">
            <Typography className={classes.title} variant="h6" noWrap>
              Song Catalog
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Song or Artist Name..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onSubmit={() => handleSubmit()}
              />
            </div>
          </div>
          <div className={classes.sectionDesktop}>
            <Typography className={classes.subTitle} variant="h6" noWrap>
              Filter by:
            </Typography>
            <Picker
              attribute={ATTRIBUTE.GENRE}
              opts={
                props.allSongs
                  ? Array.from(
                      new Set(
                        props.allSongs
                          .filter((song) => song.genre)
                          .map((song) => song.genre as string)
                      )
                    ).sort((a, b) => a.localeCompare(b))
                  : undefined
              }
            />
            <Picker
              attribute={ATTRIBUTE.DECADE}
              opts={
                props.allSongs
                  ? Array.from(
                      new Set(
                        props.allSongs
                          .filter((song) => song.decade)
                          .map((song) => song.decade as string)
                      )
                    ).sort((a, b) => a.localeCompare(b))
                  : undefined
              }
            />
            <Picker
              attribute={ATTRIBUTE.DEGREE_OF_DIFFICULTY}
              opts={
                props.allSongs
                  ? Array.from(
                      new Set(
                        props.allSongs
                          .filter((song) => song.degreeOfDifficulty)
                          .map((song) => song.degreeOfDifficulty as string)
                      )
                    ).sort((a, b) => a.localeCompare(b))
                  : undefined
              }
            />

            <BPMSlider />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

function handleSubmit() {
  console.log("hi");
}
