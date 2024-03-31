// material
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
import ContactPage from 'src/components/_external-pages/contact/ContactPage';
// import { ContactHero, ContactForm, ContactMap } from '../components/_external-pages/contact';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <RootStyle title="Contact us ">
      <h1>ContactPage testing after deployment</h1>
      {/* <ContactHero /> */}
      <ContactPage />
      

      <Container sx={{ my: 10 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            {/* <ContactForm /> */}
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <ContactMap /> */}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
