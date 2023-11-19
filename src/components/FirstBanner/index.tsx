import { Box, Paper, Stack, Typography } from "@mui/material";
import { MantouText } from "@/ui/MantouText";
import { DarkChip } from "@/ui/DarkChip";
import SkyImage from "@/assets/images/sky.svg";
import CandidateImage from "@/assets/images/candidate.png";

export const FirstBanner: React.FC = () => {
  return (
    <Stack
      justifyContent="end"
      alignItems="center"
      useFlexGap
      gap={2}
      flexGrow={1}
    >
      <MantouText>台灣的明天 喵先鋪路</MantouText>
      <Stack direction="row" alignItems="center" useFlexGap gap={2}>
        <DarkChip fontSize="28px">2024 立委參選人</DarkChip>
        <Paper
          sx={{
            boxShadow: "0px 4px 12px 0px rgba(163, 180, 203, 0.20)",
            borderRadius: 2,
            px: 2,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 900,
                fontFamily: "Inter",
                fontSize: "32px",
              }}
            >
              3
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={(theme) => ({ color: theme.palette.primary.main })}
          >
            喵立翰 Miao Li-Han
          </Typography>
        </Paper>
      </Stack>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
            height: "40vh",
            maxHeight: "400px",
            img: { height: "100%", verticalAlign: "bottom" },
          }}
        >
          <img src={SkyImage} alt="sky-background" />
        </Box>
        <Box
          sx={{
            position: "relative",
            height: "50vh",
            maxHeight: "500px",
            display: "flex",
            justifyContent: "center",
            img: { height: "100%" },
          }}
        >
          <img src={CandidateImage} alt="candidate-background" />
        </Box>
      </Box>
    </Stack>
  );
};
