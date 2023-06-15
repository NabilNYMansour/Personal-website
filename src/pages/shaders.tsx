import { useEffect, useState } from "react";
import { iShader } from "../interfaces/iShader";
import { Grid } from "@mui/material";

export const Shaders = () => {
  const [shaders, setShaders] = useState<iShader[]>([]);

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
    <Grid container spacing={2} justifyContent="center">
      {shaders.map((shader, i) => (
        <div>
          {/* For Desktop */}
          <Grid key={i} item sx={{ display: { xs: "none", md: "flex" } }}>
            <iframe
              title={shader.name}
              key={i}
              width="400"
              height="250"
              src={shader.codeLink}
            />
          </Grid>

          {/* --------------------------------------------------- */}

          {/* For Phone */}
          <Grid key={i} item sx={{ display: { xs: "flex", md: "none" } }}>
            <iframe
              title={shader.name}
              key={i}
              width="350"
              height="300"
              src={shader.codeLink}
            />
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default Shaders;
