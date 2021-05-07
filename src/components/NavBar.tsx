import { Link } from "react-router-dom";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function NavBar() {
  return (
    <div>
      <BottomNavigation showLabels>
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to="/catalog">
          <BottomNavigationAction label="Catalog" icon={<LibraryMusicIcon />} />
        </Link>
        <Link to="account">
          <BottomNavigationAction
            label="Account"
            icon={<AccountCircleIcon />}
          />
        </Link>
      </BottomNavigation>
    </div>
  );
}
