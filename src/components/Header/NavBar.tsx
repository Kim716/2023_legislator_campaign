import { Box, Link, LinkProps, Stack, Typography } from "@mui/material";
import CandidateIcon from "src/assets/icons/candidate.svg?react";
import EventsIcon from "src/assets/icons/events.svg?react";
import PoliciesIcon from "src/assets/icons/policies.svg?react";
import DonateIcon from "src/assets/icons/donate.svg?react";
import ServiceMailIcon from "src/assets/icons/serviceMail.svg?react";

interface CustomLinkProps extends LinkProps {
  icon: JSX.Element;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  icon,
  ...props
}) => {
  return (
    <Link
      {...props}
      underline="none"
      sx={(theme) => ({
        ":hover p": {
          color: theme.palette.primary.light,
        },
      })}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        <Box sx={{ display: "none" }}>{icon}</Box>
        <Typography>{children}</Typography>
      </Box>
    </Link>
  );
};

const linksList = [
  { href: "", title: "候選人主張", icon: <CandidateIcon /> },
  { href: "", title: "最新活動", icon: <EventsIcon /> },
  { href: "", title: "政策議題", icon: <PoliciesIcon /> },
  { href: "", title: "小額捐款", icon: <DonateIcon /> },
  { href: "", title: "民眾服務信箱", icon: <ServiceMailIcon /> },
];

export const NavBar: React.FC = () => {
  return (
    <Stack direction="row" useFlexGap spacing={2}>
      {linksList.map((link) => (
        <CustomLink href={link.href} icon={link.icon}>
          {link.title}
        </CustomLink>
      ))}
    </Stack>
  );
};
