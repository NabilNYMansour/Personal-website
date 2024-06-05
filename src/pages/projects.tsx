import Project from "../components/project";
import { Grid } from "@mui/material";
import projectsJson from "../data/projects.json";

export const Projects = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1>Projects</h1>
      <Grid container spacing={2} justifyContent="center">
        {projectsJson.map((project, i) => (
          <Grid key={i} item>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
    </div>

  );
};

export default Projects;
