import { IconButton, Tooltip } from '@mui/material';
import React from 'react';

const Contacts = ({ contacts, handleCloseNavMenu, iconSize }: {
    contacts: { link: string; title: string; icon: React.ReactElement }[];
    handleCloseNavMenu: () => void;
    iconSize: "small" | "medium" | "large";
}) => {
    return (
        <>
            {contacts.map((contact, i) => (
                <Tooltip key={i} title={contact.title} arrow={true} placement="top">
                    <IconButton
                        href={contact.link}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            textTransform: "none",
                            my: 1,
                        }}
                        onClick={handleCloseNavMenu}
                        aria-label={contact.title}
                    >
                        {React.cloneElement(contact.icon, {
                            fontSize: iconSize,
                        })}
                    </IconButton>
                </Tooltip>
            ))}
        </>
    );
};

export default Contacts;