import { useEffect, useState } from "react";
import Project from "../components/project";
import { iProject } from "../interfaces/iProject";
import { Button, CircularProgress, Container, Grid, IconButton, LinearProgress, Link } from "@mui/material";
import TechList from "../components/techList";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from "react-router-dom";
import CircularLoading from "../components/circularLoading";
import ProfessionTyping from "../components/professionTyping";
import projectsJson from "../data/projects.json";


const technologies = ["Python", "TypeScript", "JavaScript", "C/C++", "C#", "React", "MUI",
  "Three.js", "OpenGL", "WebGL", "Unity", "Pytorch", "SQL", "Common Lisp", "Arduino"];

export const About = () => {
  const [loadingImg, setLoadingImg] = useState<boolean>(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="images/nabil.webp"
        style={{ width: "250px", height: "250px", borderRadius: "10000px", opacity: loadingImg ? 0 : 1 }}
        loading="lazy"
        alt="Nabil Mansour"
        onLoad={() => setLoadingImg(false)}
      />
      <h1>Nabil Mansour</h1>
      <h2>
        <ProfessionTyping professions={["Software Engineer", "Web Developer", "Graphics Programmer", "Content Creator"]} />
      </h2>
      <Container maxWidth="sm">
        <div>
          A {" "}
          <a href="https://www.torontomu.ca" target="_blank" rel="noreferrer">
            TMU
          </a>{" "}
          (formerly Ryerson) CS new grad.
        </div>
        <br />
        <div>
          I dabble in everything related to computers, but have been recently
          focusing Graphics and webdev.
        </div>
      </Container>
      <b style={{ padding: "50px 0px 10px 0px" }}>
        Here's a list of technologies that I've used:
      </b>
      <TechList key="techList" variant="elevation"
        techList={technologies} />
      <b style={{ padding: "50px 0px 10px 0px" }}>
        And here's some of my highlighted projects:
      </b>

      <Grid container spacing={2} justifyContent="center">
        {projectsJson.map((project, i) => (
          project.highlight &&
          <Grid key={i} item>
            <Project key={i} {...project} />
          </Grid>
        ))}
      </Grid>
      <Button style={{ margin: "5px" }} variant="text" endIcon={<ArrowForwardIcon />}
        component={RouterLink} to={"projects"}>
        See more projects
      </Button>
    </div>
  );
};

export default About;
