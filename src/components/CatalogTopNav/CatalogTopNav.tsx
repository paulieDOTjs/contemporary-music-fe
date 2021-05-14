import { useState, MouseEvent } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

import Picker from "./SubComponents/Picker";
import { ATTRIBUTE } from "../../models/ATTRIBUTE";
import { SongType } from "../../models/SongType";
import MobileMenu from "./SubComponents/MobileMenu";
import { useStyles } from "./NavStyles";
import BPMSlider from "./SubComponents/BPMSlider";

import "./CatalogTopNav.scss";
import { FILTER_KEYS, HandleFilterArgsType } from "../../models/FilterType";

export default function CatalogTopNav(props: {
  allSongs?: SongType[];
  handleSetFilters: (filt: HandleFilterArgsType) => void;
}) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <MobileMenu
      handleSetFilters={props.handleSetFilters}
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
        <div style={{ display: "flex", justifyContent: "center" }}>
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
                  autoFocus={true}
                  fullWidth={true}
                  onChange={(e) =>
                    props.handleSetFilters([
                      FILTER_KEYS.SEARCH_STRING,
                      e.target.value,
                    ])
                  }
                />
              </div>
            </div>
            <div className={classes.sectionDesktop}>
              <Typography className={classes.subTitle} variant="h6" noWrap>
                Filter by:
              </Typography>
              <Picker
                handleSetFilters={props.handleSetFilters}
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
                handleSetFilters={props.handleSetFilters}
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
                handleSetFilters={props.handleSetFilters}
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

              <BPMSlider handleSetFilters={props.handleSetFilters} />
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
        </div>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
