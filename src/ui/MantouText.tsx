import { Typography, TypographyProps } from "@mui/material";

export const MantouText: React.FC<TypographyProps> = ({
  children,
  ...props
}) => {
  return (
    <Typography
      {...props}
      sx={{
        fontFamily: "Mantou Sans",
        fontSize: "64px",
        background: "linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%)",
        backgroundClip: "text",

        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </Typography>
  );
};
