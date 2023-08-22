import { useEffect, useState } from "react";
import { iShader } from "../interfaces/iShader";
import { CircularProgress, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Shaders = () => {
  const [shaders, setShaders] = useState<iShader[]>([]);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("sm"));

  const [iFramesLoaded, setIFramesLoaded] = useState<number>(0);

  const handleIfrmeLoaded = async () => {
    setIFramesLoaded(prevState => prevState+1);
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
    <Grid container justifyContent="center">
      {iFramesLoaded < shaders.length && (
        <div key={"loading"} style={{ position: "absolute" }}>
          <CircularProgress />
        </div>
      )}
      {shaders.map((shader, i) => (
        <div>
          <Grid key={i} item>
            <iframe
              title={shader.name}
              key={i}
              width={isMd ? "400" : "350"}
              height={isMd ? "250" : "300"}
              src={shader.codeLink}
              onLoad={handleIfrmeLoaded}
              hidden={iFramesLoaded < shaders.length}
            />
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default Shaders;
