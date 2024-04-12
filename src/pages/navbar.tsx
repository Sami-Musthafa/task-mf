import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const navItems = [
  { name: "Toggle", route: "/" },
  { name: "Slider", route: "/slider" },
  { name: "Message", route: "/message" },
  { name: "Profile Page", route: "/profile" },
  { name: "Error 404", route: "/page404" },
];

const Navbar = () => {
  const LinkNav = (name: string, route: string) => {
    return (
      <Link
        component={RouterLink}
        to={route}
        color="inherit"
        underline="none"
        sx={{
          mr: { xs: 0, md: 2 },
          mb: { xs: 2, md: 0 },
          textDecoration: "none",
        }}
      >
        <Typography variant="h6">{name}</Typography>
      </Link>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: "primary.main",
        color: "white",
        p: 2,
      }}
    >
      {navItems.map((item) => LinkNav(item.name, item.route))}
      {/* {LinkNav("Toggle", "/")}
      {LinkNav("Slider", "/slider")}
      {LinkNav("Message", "/message")}
      {LinkNav("Profile", "/profile")}
      {LinkNav("Error 404", "/page404")} */}
    </Box>
  );
};

export default Navbar;
