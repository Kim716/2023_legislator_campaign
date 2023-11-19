import { Box } from "@mui/material";
import { FirstBanner } from "./components/FirstBanner";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { useRef } from "react";
import { useFontsImagesLoading } from "./hooks/useFontImageLoading";

export function App() {
  const appRef = useRef<HTMLElement | null>(null);
  const isLoading = useFontsImagesLoading(appRef);

  return (
    <Box
      ref={appRef}
      sx={{
        minHeight: "100vh",
        maxHeight: "1000px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isLoading && <Loading />}
      <Header />
      <FirstBanner />
    </Box>
  );
}
