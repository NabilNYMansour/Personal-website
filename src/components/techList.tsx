import { Paper, Stack } from "@mui/material";

export default function TechList({ techList, variant }: { techList: string[], variant: "elevation" | "outlined" }) {
    return (
        <Stack direction='row' flexWrap="wrap">
            {techList.map((techString, i) =>
                <Paper key={i}
                    variant={variant}
                    elevation={variant === "outlined" ? 0 : 2}
                    sx={{
                        padding: '10px', paddingTop: '5px', paddingBottom: '5px',
                        marginTop: '5px', marginLeft: '5px', borderRadius: '100px'
                    }}>{techString}</Paper>
            )}
        </Stack>
    );
}
