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
import { CssBaseline, Tooltip } from "@mui/material";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../themes/themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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
  // {
  //   link: "blogs",
  //   title: "Blogs",
  // },
];
const contacts = [
  {
    link: "mailto:nabilnymansour@gmail.com",
    title: "Email",
    icon: <EmailIcon />,
  },
  {
    link: "https://github.com/NabilNYMansour",
    title: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    link: "https://www.linkedin.com/in/nnym/",
    title: "LinkedIn",
    icon: <LinkedInIcon />,
  },

  {
    link: "https://www.shadertoy.com/user/chickenlegs",
    title: "ShaderToy",
    icon: <ShaderToyIcon />,
  },

  {
    link: "NNYM_Resume_2023.pdf",
    title: "Resume",
    icon: <ContactPageIcon />,
  },
];

export default function Layout() {
  const location = useLocation();
  const [currTheme, setCurrTheme] = React.useState(lightTheme);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // make a function that accepts a string and updates the theme.palette.mode to that string
  const toggleTheme = () => {
    if (currTheme.palette.mode === "dark") {
      setCurrTheme(lightTheme);
    } else {
      setCurrTheme(darkTheme);
    }
  };

  return (
    <ThemeProvider theme={currTheme}>
      <CssBaseline />
      <div>
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
                      style={{fontSize: "1rem"}}
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
                  {contacts.map((contact, i) => (
                    <Tooltip key={i} title={contact.title} arrow={true}>
                      <IconButton
                        href={contact.link}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                          my: 2,
                          color: "inherit",
                        }}
                        onClick={handleCloseNavMenu}
                        aria-label={contact.title}
                      >
                        {contact.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
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
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      
                      key={page.title}
                      onClick={handleCloseNavMenu}
                      component={Link}
                      to={page.link}
                      variant={
                        location.pathname ===
                        (page.link === "/" ? "" : "/") + page.link
                          ? "contained"
                          : "text"
                      }
                      sx={{
                        textTransform: "none",
                        my: 2,
                      }}
                    >
                      {page.title}
                    </Button>
                  ))}
                </Box>

                {/* Theme Toggle */}
                <Tooltip title={"toggle theme"} arrow={true}>
                  <Button
                    
                    sx={{
                      textTransform: "none",
                      my: 2,
                    }}
                    onClick={toggleTheme}
                  >
                    {currTheme.palette.mode === "dark" ? (
                      <LightModeIcon fontSize="small" />
                    ) : (
                      <DarkModeIcon fontSize="small" />
                    )}
                  </Button>
                </Tooltip>

                {/* Contacts */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                  }}
                >
                  {contacts.map((contact, i) => (
                    <Tooltip key={i} title={contact.title} arrow={true}>
                      <IconButton
                        href={contact.link}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                          textTransform: "none",
                          my: 2,
                          color: "primary.main",
                        }}
                        onClick={handleCloseNavMenu}
                        aria-label={contact.title}
                      >
                        {React.cloneElement(contact.icon, {
                          fontSize: "large",
                        })}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* --------------------------------------------------- */}

        {/* Main page */}
        <Container style={{ padding: "50px 10px 50px 10px" }} maxWidth="md">
          <Outlet />
        </Container>
      </div>
    </ThemeProvider>
  );
}
