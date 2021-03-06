import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import Picker from "./Picker";
import BPMSlider from "./BPMSlider";

import { ATTRIBUTE } from "../../../models/ATTRIBUTE";
import { SongType } from "../../../models/SongType";
import { HandleFilterArgsType } from "../../../models/FilterType";

export default function MobileMenu(props: {
  mobileMoreAnchorEl: any;
  mobileMenuId: any;
  isMobileMenuOpen: any;
  handleMobileMenuClose: any;
  allSongs?: SongType[];
  handleSetFilters: (filt: HandleFilterArgsType) => void;
}) {
  const {
    isMobileMenuOpen,
    mobileMoreAnchorEl,
    mobileMenuId,
    handleMobileMenuClose,
  } = props;
  return (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
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
        </MenuItem>
        <MenuItem>
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
        </MenuItem>
        <MenuItem>
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
        </MenuItem>
        <MenuItem>
          <BPMSlider handleSetFilters={props.handleSetFilters} />
        </MenuItem>
      </Menu>
    </>
  );
}
