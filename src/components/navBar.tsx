import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneIcon from "../assets/images/Container.png"; // Local image
import img from "../assets/images/7 - Copy 1.png";
import { keyframes } from "@mui/system";
import { useIsMainHome } from "../hooks/useIsMainHome";


const pages = [
  { name: "Home", link: "/" },
  {
    name: "For Sale",
    link: "/for-sale",
    submenu: [
      { name: "Apartments for Sale", link: "/for-sale/apartments" },
      { name: "Townhouses for Sale", link: "/for-sale/townhouses" },
    ],
  },
  {
    name: "For Rent",
    link: "/for-rent",
    submenu: [
      { name: "Short Term", link: "/for-rent/short-term" },
      { name: "Long Term", link: "/for-rent/long-term" },
    ],
  },
  {
    name: "Off Plan Properties",
    link: "/off-plan",
    submenu: [
      { name: "Developers", link: "/off-plan/developers" },
      { name: "Projects", link: "/off-plan/projects" },
    ],
  },
  {
    name: "Dubai Communities",
    link: "/communities",
    submenu: [
      { name: "Downtown", link: "/communities/downtown" },
      { name: "JVC", link: "/communities/jvc" },
    ],
  },
  {
    name: "Services",
    link: "/services",
    submenu: [
      { name: "Web Development", link: "/services/web" },
      { name: "App Development", link: "/services/app" },
    ],
  },
];

const slide = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

function HomeHero() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEls, setAnchorEls] = React.useState<
    Record<string, HTMLElement | null>
  >({});
  const [openSubmenus, setOpenSubmenus] = React.useState<
    Record<string, boolean>
  >(() =>
    pages.reduce((acc, page) => {
      if (page.submenu) acc[page.name] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleToggleDrawer = () => setDrawerOpen((prev) => !prev);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    pageName: string
  ) => {
    setAnchorEls((prev) => ({ ...prev, [pageName]: event.currentTarget }));
  };

  const handleMenuClose = (pageName: string) => {
    setAnchorEls((prev) => ({ ...prev, [pageName]: null }));
  };

  const handleMobileSubmenuToggle = (pageName: string) => {
    setOpenSubmenus((prev) => {
      const updated = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === pageName ? !prev[pageName] : false;
        return acc;
      }, {} as Record<string, boolean>);
      return updated;
    });
  };

  React.useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";
  }, [drawerOpen]);
   const isHome = useIsMainHome();
  return (
    <>
      <AppBar
        position="static"
        sx={{
           backgroundColor: isHome ? "transparent" : "#0F4C5C",
          color: "black",
          boxShadow: "none",
          justifyContent: "center",
          width: "100vw",
          py: 2,
          pr: { xs: 0, md: 5 },
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Toolbar sx={{ width: "100%", alignItems: "center", px: 3 }}>
            <IconButton
              onClick={handleToggleDrawer}
              sx={{
                display: { xs: "flex", md: "none" },
                p: 0,
                color: "#fff",
                mr: 2,
                position: "absolute",
                left: 2,
              }}
            >
              <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>

            <Box
              component="a"
              href="#"
              sx={{
                display: { xs: "flex" },
                alignItems: "left",
                flexGrow: 1,
                justifyContent: {
                  xs: "center", // ✅ center on small screens
                  md: "space-between", // ✅ normal alignment on medium and larger screens
                },
              }}
            >
              <Box
                sx={{
                  height: { xs: "45px", md: "60px" },
                  right: { xs: "50", md: "20px" },
                }}
              >
                <img
                  src={img}
                  alt="Logo"
                  style={{ width: "auto", height: "100%", borderRadius: 7 }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => {
                if (page.submenu) {
                  return (
                    <React.Fragment key={page.name}>
                      <Button
                        sx={{ color: "#fff", fontSize: "14px" }}
                        onClick={(e) => handleMenuOpen(e, page.name)}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {page.name}
                      </Button>
                      <Menu
                        anchorEl={anchorEls[page.name]}
                        open={Boolean(anchorEls[page.name])}
                        onClose={() => handleMenuClose(page.name)}
                      >
                        {page.submenu.map((sub) => (
                          <MenuItem
                            key={sub.name}
                            onClick={() => handleMenuClose(page.name)}
                            component="a"
                            href={sub.link}
                          >
                            {sub.name}
                          </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  );
                }
                return (
                  <Button
                    key={page.name}
                    sx={{ color: "#fff" }}
                    href={page.link}
                  >
                    {page.name}
                  </Button>
                );
              })}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <Box
                  component="img"
                  src={PhoneIcon}
                  alt="Phone Icon"
                  sx={{
                    width: 24,
                    height: 24,
                    animation: `${slide} 1.5s ease-in-out infinite`,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#fff",
                    whiteSpace: "nowrap",
                  }}
                >
                  +971 54 998 8811
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleToggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: "#fff",
            width: "100%",
            mt: "90px",
            boxShadow: "none",
            border: "none",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          {pages.map((page) => (
            <Box key={page.name}>
              <Button
                fullWidth
                sx={{ justifyContent: "flex-start", color: "#000" }}
                onClick={() =>
                  page.submenu
                    ? handleMobileSubmenuToggle(page.name)
                    : undefined
                }
                href={!page.submenu ? page.link : undefined}
              >
                {page.name}
              </Button>
              <hr
                style={{
                  width: "100%",
                  border: "0.1px solid #ddd",
                  marginBottom: 8,
                }}
              />
              {page.submenu &&
                openSubmenus[page.name] &&
                page.submenu.map((sub) => (
                  <Button
                    key={sub.name}
                    href={sub.link}
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      color: "#666",
                      pl: 3,
                      fontSize: "13px",
                    }}
                  >
                    → {sub.name}
                  </Button>
                ))}
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              mt: 2,
            }}
          >
            <Box
              component="img"
              src={PhoneIcon}
              alt="Phone Icon"
              sx={{
                width: 24,
                height: 24,
                animation: `${slide} 1.5s ease-in-out infinite`,
              }}
            />
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
              +971 54 998 8811
            </Typography>
          </Box>
        </Box>
      </Drawer>

      <hr style={{ width: "100%", border: "0.1px solid #ddd", margin: 0 }} />
    </>
  );
}

export default HomeHero;
