import { Box, BoxProps } from "@mui/material";

export const DarkChip: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      sx={(theme) => ({
        display: "inline-block",
        borderRadius: 4,
        background: theme.palette.textPrimary.main,
        color: "#FFFFFF",
        fontWeight: 700,
        px: 2,
        py: 1.5,
      })}
    >
      {children}
    </Box>
  );
};
