import { useEffect, useState } from "react";
import Project from "../components/project";
import { CircularProgress, Grid } from "@mui/material";
import { iProject } from "../interfaces/iProject";
import CircularLoading from "../components/circularLoading";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1>Projects</h1>
      <Grid container spacing={2} justifyContent="center">
        {loading ?
          <CircularLoading />
          :
          projects.map((project, i) => (
            <Grid key={i} item>
              <Project {...project} />
            </Grid>
          ))
        }
      </Grid>
    </div>

  );
};

export default Projects;
