import { Box, Stack } from "@mui/material";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { SocialMedia } from "./SocialMedia";

export const Header: React.FC = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.bgPrimary.main,
        py: 2,
        px: 3,
      })}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ background: "#FFFFFF", py: 1.5, px: 3, borderRadius: 4 }}
      >
        <Logo />
        <NavBar />
        <SocialMedia />
      </Stack>
    </Box>
  );
};
