import { Box, Theme, Typography } from '@mui/material';
import React from 'react';
import Contacts from './contacts';

interface LayoutFooterProps {
    // Define any props you want to pass to the component
}

const LayoutFooter = ({ contacts, handleCloseNavMenu, currTheme }: {
    contacts: { link: string; title: string; icon: React.ReactElement }[];
    handleCloseNavMenu: () => void;
    currTheme: Theme;
}
) => {
    return (
        <footer
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                flexGrow: 2,
            }}>
            <div
                style={{
                    backgroundColor: currTheme.palette.background.paper,
                    borderTop: "1px solid",
                    borderColor: currTheme.palette.divider,
                }}
            >
                <Box
                    sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}
                >
                    <Contacts contacts={contacts} handleCloseNavMenu={handleCloseNavMenu} iconSize="large" />
                </Box>
                <Typography
                    variant="body2"
                    align="center"
                    color="textSecondary"
                    style={{ padding: "10px" }}
                >
                    © {new Date().getFullYear()} Nabil Mansour
                </Typography>
            </div>
        </footer>
    );
};

export default LayoutFooter;