import { useEffect, useState } from "react";
import Project from "../components/project";
import { Grid } from "@mui/material";
import { iProject } from "../interfaces/iProject";

export const Projects = () => {
  const [projects, setProjects] = useState<iProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getProjects = async () => {
    setLoading(true);
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      {projects.map((project, i) => (
        <Grid key={i} item>
          <Project {...project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
