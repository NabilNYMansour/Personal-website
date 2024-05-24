import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShaderToyIcon from "../icons/shaderToyIcon";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { CssBaseline, Theme, Tooltip } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../themes/themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { YouTube } from "@mui/icons-material";
import MediumIcon from "../icons/mediumIcon";
import Contacts from "../components/contacts";
import LayoutFooter from "./layoutFooter";

const pages = [
  {
    link: "/", // since its the home page
    title: "About",
  },
  {
    link: "projects",
    title: "Projects",
  },
  {
    link: "shaders",
    title: "Shaders",
  },
];
const contacts = [
  {
    link: "https://www.youtube.com/@nabilnymansour",
    title: "YouTube",
    icon: <YouTube />,

  },
  {
    link: "https://medium.com/@nabilnymansour",
    title: "Medium",
    icon: <MediumIcon />,
  },
  {
    link: "https://www.linkedin.com/in/nnym/",
    title: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    link: "https://github.com/NabilNYMansour",
    title: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    link: "https://www.shadertoy.com/user/chickenlegs",
    title: "ShaderToy",
    icon: <ShaderToyIcon />,
  },
  {
    link: "NNYM_Resume.pdf",
    title: "Resume",
    icon: <ContactPageIcon />,
  },
  {
    link: "mailto:nabilnymansour@gmail.com",
    title: "Email",
    icon: <EmailIcon />,
  },
];

export default function Layout() {
  const [currTheme, setCurrTheme] = React.useState<Theme>(darkTheme);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleTheme = () => {
    if (currTheme.palette.mode === "dark") {
      setCurrTheme(lightTheme);
    } else {
      setCurrTheme(darkTheme);
    }
  };

  return (
    <ThemeProvider theme={currTheme}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}>
        <CssBaseline />
        {/* App bar */}
        <AppBar position="static" color="inherit">
          <Container>
            <Toolbar disableGutters>
              {/* For Phone */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                {/* Pages */}
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{
                    my: 2,
                    color: "inherit",
                  }}
                >
                  <MenuIcon />
                </IconButton>
                {/* Pages menu */}
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* Pages */}
                  {pages.map((page) => (
                    <MenuItem
                      key={page.title}
                      onClick={handleCloseNavMenu}
                      component={Link}
                      to={page.link}
                      style={{ fontSize: "1rem" }}
                    >
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>

                {/* Contacts */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                    justifyContent: "right",
                  }}
                >
                  <Contacts
                    contacts={contacts}
                    handleCloseNavMenu={handleCloseNavMenu}
                    iconSize="small" />
                </Box>

                {/* Theme Toggle */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                    justifyContent: "right",
                  }}
                >
                  <Tooltip title={"toggle theme"} arrow={true}>
                    <IconButton
                      sx={{
                        textTransform: "none",
                        my: 2,
                        color: "inherit",
                      }}
                      onClick={toggleTheme}
                    >
                      {currTheme.palette.mode === "dark" ? (
                        <LightModeIcon fontSize="small" />
                      ) : (
                        <DarkModeIcon fontSize="small" />
                      )}
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              {/* --------------------------------------------------- */}

              {/* For Desktop */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-between",
                }}
              >
                {/* Pages */}
                <Box maxWidth={300}
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page.title}
                      color="inherit"
                      onClick={handleCloseNavMenu}
                      component={Link}
                      to={page.link}
                      sx={{ my: 2 }}
                    >
                      {page.title}
                    </Button>
                  ))}
                </Box>

                {/* Theme Toggle */}
                <Tooltip title={"toggle theme"} arrow={true}>
                  <Button sx={{ my: 2 }} onClick={toggleTheme} color="inherit">
                    {currTheme.palette.mode === "dark" ? (
                      <LightModeIcon fontSize="small" />
                    ) : (
                      <DarkModeIcon fontSize="small" />
                    )}
                  </Button>
                </Tooltip>

                {/* Contacts */}
                <Box
                  maxWidth={300}
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "right",
                  }}
                >
                  <Contacts
                    contacts={contacts}
                    handleCloseNavMenu={handleCloseNavMenu}
                    iconSize="large" />
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* --------------------------------------------------- */}

        {/* Main page */}
        <Container style={{ padding: "50px 10px 50px 10px" }}>
          <Outlet />
        </Container>
        {/* Footer */}
        <LayoutFooter contacts={contacts} handleCloseNavMenu={handleCloseNavMenu} currTheme={currTheme} />
      </div>
    </ThemeProvider >

  );
}
