import { IconButton, IconButtonProps, Stack } from "@mui/material";
import FacebookIcon from "src/assets/icons/facebook.svg?react";
import InstagramIcon from "src/assets/icons/instagram.svg?react";
import YoutubeIcon from "src/assets/icons/youtube.svg?react";

interface CustomIconButtonProps extends IconButtonProps {
  goToUrl: string;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  children,
  goToUrl,
  ...props
}) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <IconButton {...props} onClick={() => handleClick(goToUrl)} sx={{ p: 0.5 }}>
      {children}
    </IconButton>
  );
};

const SocialMediaList = [
  { icon: <FacebookIcon />, goToUrl: "https://www.facebook.com/?locale=zh_TW" },
  { icon: <InstagramIcon />, goToUrl: "https://www.instagram.com/" },
  { icon: <YoutubeIcon />, goToUrl: "https://www.youtube.com/" },
];

export const SocialMedia: React.FC = () => {
  return (
    <Stack direction="row" useFlexGap spacing={0.5}>
      {SocialMediaList.map((medium) => (
        <CustomIconButton goToUrl={medium.goToUrl}>
          {medium.icon}
        </CustomIconButton>
      ))}
    </Stack>
  );
};
