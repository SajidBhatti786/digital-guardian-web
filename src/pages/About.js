// material
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Team from 'src/components/_external-pages/about/Team';
import Page from '../components/Page';
// import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../components/_external-pages/about';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootStyle title="About us ">
      <Team />
      <Divider />
    </RootStyle>
  );
}
