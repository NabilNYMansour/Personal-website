import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import { iProject } from "../interfaces/iProject";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SteamIcon from "../icons/steamIcon";
import TechList from "./techList";

export default function Project(project: iProject) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        href={project.link ? project.link : project.gitLink}
        target="_blank"
        rel="noreferrer"
      >
        {project.imgLink ? (
          <CardMedia
            component="img"
            height="140"
            image={project.imgLink}
            alt={project.name}
            loading="lazy"
          />
        ) : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {project.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      {project.techList ? <TechList techList={project.techList} variant="outlined"/> : null}

      <CardActions>
        {project.link ? (
          <IconButton
            href={project.link}
            target="_blank"
            rel="noreferrer"
            size="small"
            color="primary"
          >
            <LaunchIcon />
          </IconButton>
        ) : null}
        {project.youtubeLink ? (
          <IconButton
            href={project.youtubeLink}
            target="_blank"
            rel="noreferrer"
            size="small"
            color="primary"
          >
            <YouTubeIcon />
          </IconButton>
        ) : null}
        {project.gitLink ? (
          <IconButton
            href={project.gitLink}
            target="_blank"
            rel="noreferrer"
            size="small"
            color="primary"
          >
            <GitHubIcon />
          </IconButton>
        ) : null}
        {project.steamLink ? (
          <IconButton
            href={project.steamLink}
            target="_blank"
            rel="noreferrer"
            size="small"
            color="primary"
          >
            <SteamIcon />
          </IconButton>
        ) : null}
      </CardActions>
    </Card>
  );
}
