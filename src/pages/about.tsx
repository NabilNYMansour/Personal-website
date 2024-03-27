import { useEffect, useState } from "react";
import Project from "../components/project";
import { iProject } from "../interfaces/iProject";
import { Container, Link } from "@mui/material";
import TechList from "../components/techList";

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
  const [project, setLatestProject] = useState<iProject | null>(null);

  const getProjects = async () => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setLatestProject(data[0]);
      })
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
        src="nabil.jpg"
        style={{ width: "250px", borderRadius: "10000px" }}
        loading="lazy"
        alt="Nabil"
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
          (formerly Ryerson) undergraduate.
        </div>
        <br />
        <div>
          I dabble in everything related to computers, but have been recently
          focusing on AI/ML and Graphics. I hope to one day combine the two.
        </div>
      </Container>
      <b style={{ padding: "50px 0px 10px 0px" }}>
        Here's a list of technologies that I've used:
      </b>
      <TechList key="techList" variant="elevation"
        techList={
          ["Python", "TypeScript", "JavaScript", "C", "C++", "C#", "React", "MUI",
            "Three.js", "OpenGL", "WebGL", "Unity", "Pytorch", "SQL", "Arduino"]} />
      <b style={{ padding: "50px 0px 10px 0px" }}>
        The following is my latest project:
      </b>
      {project !== null ? (
        <div>
          <Project {...project} />
        </div>
      ) : (
        "LOADING..."
      )}
    </div>
  );
};

export default About;
