import { Player } from "@lottiefiles/react-lottie-player";
import { loadingAnimation } from "@/assets/animations/loading";
import { Box } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        offset: 0,
        zIndex: 99,
        width: "100vw",
        height: "100vh",
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ height: "300px", width: "300px" }}
      />
    </Box>
  );
};
