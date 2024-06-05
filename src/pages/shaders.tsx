import { useState } from "react";
import { iShader } from "../interfaces/iShader";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CircularLoading from "../components/circularLoading";
import shadersJson from "../data/shaders.json";

export const Shaders = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("sm"));

  const [iFramesLoaded, setIFramesLoaded] = useState<number>(0);

  const handleIfrmeLoaded = async () => {
    setIFramesLoaded(prevState => prevState + 1);
  };

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
        {iFramesLoaded < shadersJson.length && (
          <CircularLoading />
        )}
        {shadersJson.map((shader, i) => (
          <div key={i}>
            <Grid key={i} item>
              <iframe
                key={i}
                title={shader.name}
                width={isMd ? "400" : "350"}
                height={isMd ? "250" : "300"}
                src={shader.codeLink}
                onLoad={handleIfrmeLoaded}
                hidden={iFramesLoaded < shadersJson.length}
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
