import { useEffect, useState } from "react";
import Project from "../components/project";
import { iProject } from "../interfaces/iProject";
import { Button, CircularProgress, Container, Grid, IconButton, LinearProgress, Link } from "@mui/material";
import TechList from "../components/techList";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from "react-router-dom";
import CircularLoading from "../components/circularLoading";


const technologies = ["Python", "TypeScript", "JavaScript", "C/C++", "C#", "React", "MUI",
  "Three.js", "OpenGL", "WebGL", "Unity", "Pytorch", "SQL", "Common Lisp", "Arduino"];

export const About = () => {
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [currentPos, setCurrentPos] = useState<number>(0);
  const [deleteProfession, setDeleteProfession] = useState<boolean>(false);
  const [profession, setProfession] = useState<string>("");
  const [currentProfession, setCurrentProfession] = useState<number>(0);

  // Type
  useEffect(() => {
    if (currentPos < profession.length && !deleteProfession) {
      const intervalID = setTimeout(() => {
        setCurrentPos(currentPos + 1);
      }, 150);
      return () => clearInterval(intervalID);
    }
  }, [currentPos, profession, deleteProfession]);

  // Reached end
  useEffect(() => {
    const intervalID = setTimeout(() => {
      if (currentPos === profession.length) {
        setDeleteProfession(true);
      }
    }, 3000);
    return () => clearInterval(intervalID);
  }, [currentPos, profession]);

  // Delete
  useEffect(() => {
    const intervalID = setTimeout(() => {
      if (currentPos > 1 && deleteProfession) {
        setCurrentPos(currentPos - 1);
      }
      if (currentPos <= 1) {
        setDeleteProfession(false);
        switch (currentProfession) {
          case 0:
            setProfession("a Graphics Programmer");
            setCurrentProfession(1);
            break;
          case 1:
            setProfession("a Web Developer");
            setCurrentProfession(2);
            break;
          case 2:
            setProfession("a Software Engineer");
            setCurrentProfession(0);
            break;
          default:
            break;
        }
      }
    }, 150);
    return () => clearInterval(intervalID);
  }, [currentPos, currentProfession, deleteProfession, profession]);

  // Cursor
  useEffect(() => {
    const intervalID = setTimeout(() => {
      setShowCursor(!showCursor);
    }, 750);
    return () => clearInterval(intervalID);
  }, [showCursor]);

  // Latest project fetch
  const [projects, setLatestProjects] = useState<iProject[] | null>(null);

  const getProjects = async () => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setLatestProjects(data);
      });
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
      }}
    >
      <img
        src="nabil.webp"
        style={{ width: "250px", height: "250px", borderRadius: "10000px" }}
        loading="lazy"
        alt="Nabil Mansour"
      />
      <h1>Nabil Mansour</h1>
      <h3>
        {profession.slice(0, currentPos)}
        {profession.length !== currentPos ? (
          <span>|</span>
        ) : showCursor ? (
          <span>|</span>
        ) : (
          <span>&nbsp;</span>
        )}
      </h3>
      <Container maxWidth="sm">
        <div>
          A {" "}
          <Link href="https://www.torontomu.ca" target="_blank" rel="noreferrer">
            TMU
          </Link>{" "}
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
      {projects !== null ? (
        <>
          <Grid container spacing={2} justifyContent="center">
            {
              projects.map((project, i) => (
                project.highlight &&
                <Grid key={i} item>
                  <Project key={i} {...project} />
                </Grid>
              ))
            }
          </Grid>
          <Button style={{ margin: "5px" }} variant="text" endIcon={<ArrowForwardIcon />}
            component={RouterLink} to={"projects"}>
            See more projects
          </Button>
        </>
      ) : (
        <CircularLoading />
      )}
    </div>
  );
};

export default About;
