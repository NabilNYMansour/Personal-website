import { useEffect, useState } from "react";
import { iShader } from "../interfaces/iShader";
import { CircularProgress, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CircularLoading from "../components/circularLoading";

export const Shaders = () => {
  const [shaders, setShaders] = useState<iShader[]>([]);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("sm"));

  const [iFramesLoaded, setIFramesLoaded] = useState<number>(0);

  const handleIfrmeLoaded = async () => {
    setIFramesLoaded(prevState => prevState + 1);
  };

  const getShaders = async () => {
    fetch("/shaders.json")
      .then((response) => response.json())
      .then((data) => {
        setShaders(data);
      });
  };

  useEffect(() => {
    getShaders();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1>Shaders</h1>
      <Grid container key={"main container"} justifyContent="center">
        {iFramesLoaded < shaders.length && (
          <CircularLoading />
        )}
        {shaders.map((shader, i) => (
          <div key={i}>
            <Grid key={i} item>
              <iframe
                key={i}
                title={shader.name}
                width={isMd ? "400" : "350"}
                height={isMd ? "250" : "300"}
                src={shader.codeLink}
                onLoad={handleIfrmeLoaded}
                hidden={iFramesLoaded < shaders.length}
                allowFullScreen
              />
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Shaders;
