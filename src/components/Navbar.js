import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#0a0a0a",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/youtube-clone"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={logo} alt="logo" height={30} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
