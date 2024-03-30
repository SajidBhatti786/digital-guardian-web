import React from 'react';
import { makeStyles } from '@mui/styles';
import {Grid,Typography,TextField,Button} from "@mui/material"

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
  },
  contactInfo: {
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  form: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const ContactPage = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
      }}
      >
        <Grid item xs={12} md={6}>
          <div className={classes.contactInfo}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <div>
              <EmailIcon className={classes.icon} />
              <Typography variant="body1">
                example@example.com
              </Typography>
            </div>
            <div>
              <PhoneIcon className={classes.icon} />
              <Typography variant="body1">
                +1234567890
              </Typography>
            </div>
            <div>
              <LocationOnIcon className={classes.icon} />
              <Typography variant="body1">
                123 Main Street, City, Country
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Get In Touch
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
