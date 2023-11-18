import { Stack, Typography } from "@mui/material";
import LogoIcon from "@/assets/icons/logo.svg?react";

export const Logo: React.FC = () => {
  return (
    <Stack direction="row" alignItems="center" useFlexGap spacing={1}>
      <LogoIcon />
      <Typography
        variant="h4"
        sx={(theme) => ({ color: theme.palette.primary.main })}
      >
        喵立翰 Miao Li-Han
      </Typography>
    </Stack>
  );
};
