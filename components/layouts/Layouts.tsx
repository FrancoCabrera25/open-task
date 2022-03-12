import { Box } from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import { NavBar } from "../ui";

interface Props {
  title?: string;
}

const Layouts: FC<Props> = ({ title = "Open task", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <Box
        sx={{
          padding: "10px 20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layouts;
