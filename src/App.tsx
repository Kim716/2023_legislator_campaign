import { Box } from "@mui/material";
import { FirstBanner } from "./components/FirstBanner";
import { Header } from "./components/Header";

export function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxHeight: "1000px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <FirstBanner />
    </Box>
  );
}
