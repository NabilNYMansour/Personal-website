import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton, LinearProgress, Tooltip } from "@mui/material";
import { iProject } from "../interfaces/iProject";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SteamIcon from "../icons/steamIcon";
import TechList from "./techList";
import { useState } from "react";

export default function Project(project: iProject) {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        href={project.link ? project.link : project.gitLink ? project.gitLink : "/"}
        target="_blank"
        rel="noreferrer"
      >
        {project.imgLink ?
          <>
            {loading && <LinearProgress color="inherit" />}
            <CardMedia
              component="img"
              height={loading ? 0 : 140}
              image={project.imgLink}
              alt={project.name}
              onLoad={() => setLoading(false)}
              loading="lazy"
            />
          </>
          : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {project.desc}
          </Typography>
        </CardContent>
      </CardActionArea>

      {project.techList ? <TechList techList={project.techList} variant="outlined" /> : null}

      <CardActions>
        {project.link ? (
          <Tooltip title={"Link"} arrow={true} placement="bottom">
            <IconButton
              href={project.link}
              target="_blank"
              rel="noreferrer"
              size="small"
              color="inherit"
            >
              <LaunchIcon />
            </IconButton>
          </Tooltip>
        ) : null}
        {project.youtubeLink ? (
          <Tooltip title={"YouTube"} arrow={true} placement="bottom">
            <IconButton
              href={project.youtubeLink}
              target="_blank"
              rel="noreferrer"
              size="small"
              color="inherit"
            >
              <YouTubeIcon />
            </IconButton>
          </Tooltip>
        ) : null}
        {project.gitLink ? (
          <Tooltip title={"GitHub"} arrow={true} placement="bottom">
            <IconButton
              href={project.gitLink}
              target="_blank"
              rel="noreferrer"
              size="small"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        ) : null}
        {project.steamLink ? (
          <Tooltip title={"Steam"} arrow={true} placement="bottom">
            <IconButton
              href={project.steamLink}
              target="_blank"
              rel="noreferrer"
              size="small"
              color="inherit"
            >
              <SteamIcon />
            </IconButton>
          </Tooltip>
        ) : null}
      </CardActions>
    </Card>
  );
}
