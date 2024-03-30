import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent, Typography, Avatar,Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import iqra from '../../../assets/images/iqra.png';
import zulfi from '../../../assets/images/zulfi.png';
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: 'auto',
    justifyContent: 'center',
    maxWidth: 1000,
    minHeight: '100vh'
  },
  cardsRoot:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  card: {
    maxWidth: '100%',
//    width: '500px',
    margin: 'auto',
    padding: theme.spacing(4),
    // margin: theme.spacing(2),
    textAlign: 'center',
    flexBasis: 0,
    color: theme.palette.text.secondary,
    // width: {lg: '300px'}

  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
    margin: '0 auto',
    display: 'block',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  socialIcons: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1),
      cursor: 'pointer',
    },
  },
}));

const teamMembers = [
    {
      name: 'Sajid Bhatti',
      profession: 'Full Stack Developer',
      image: 'https://avatars.githubusercontent.com/u/113120555?v=4',
      social: {
        github: 'https://github.com/SajidBhatti786',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
      
    },
    {
      name: 'Iqra Nadeem',
      profession: 'Full Stack Developer',
      image: iqra,
      social: {
        github: 'https://github.com/SajidBhatti786',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
      
    },
    {
      name: 'Zulfiqar Ali',
      profession: 'Full Stack Developer',
      image: 'https://avatars.githubusercontent.com/u/119655783?v=4',
      social: {
        github: 'https://github.com/Zulfiqarkhokhar',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
      
    },
  
    // Add more team members as needed
  ];
  
  const supervisors = [
    {
        name: 'Riaz Ali Soomro',
        profession: 'ML & AI Specialist',
        image: 'https://facultyimages.iba-suk.edu.pk/INS-0285.jpg',
        social: {
          github: 'https://github.com/SajidBhatti786',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
        },
        
      },
      {
        name: 'Faisal Bin Obaid',
        profession: 'DevOPs Engineer',
        image: 'https://avatars.githubusercontent.com/u/113120555?v=4',
        social: {
          github: 'https://github.com/SajidBhatti786',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
        },
        
      },
     
  ]

const Team = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <Typography variant="h2" align="center" gutterBottom sx={{ color: 'primary.main' }}>
        Our Team
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          padding: '10px',
        }}
      >
        Our team consists of dedicated students pursuing our Bachelor's degree in Computer Science (BSCS). Together, we are working on our final year project (FYP), which is a culmination of our academic journey and practical skills acquired throughout our undergraduate studies.
      </Typography>
      <Grid container className={classes.cardsRoot}>
        {teamMembers.map((member, index) => (
          <Grid key={index} item sm={12}
          style={{
            flexGrow: 1,
            flexBasis: 0,
            width: '90%',
            margin: '5px',
            '@media (min-width: 600px)': { // Adjust for larger screens
                width: '40% !important',
              }
          }}
          >
            <Card className={classes.card}>
              <Avatar alt={member.name} src={member.image} className={classes.avatar} />
              <CardContent>
                <Typography variant="h5" component="h2" align="center">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" align="center">
                  {member.profession}
                </Typography>
                <div className={classes.socialIcons}>
                  <GitHubIcon color="primary" onClick={() => window.open(member.social.github)} />
                  <LinkedInIcon color="primary" onClick={() => window.open(member.social.linkedin)} />
                  <TwitterIcon color="primary" onClick={() => window.open(member.social.twitter)} />
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    
    <div className={classes.root} style={{
        marginTop: '10px',
    }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ color: 'primary.main' }}>
        Our Supervisor
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          padding: '10px',
        }}
      >
We are privileged to have Sir Riaz Soomro as our esteemed supervisor for our project. With his extensive experience and expertise in the field of computer science, Sir Riaz has been an invaluable mentor throughout our project journey.      </Typography>
      <Grid container className={classes.cardsRoot}>
        {supervisors.map((member, index) => (
          <Grid key={index} item sm={12}
          style={{
            flexGrow: 1,
            flexBasis: 0,
            width: '90%',
            margin: '5px',
            '@media (min-width: 600px)': { // Adjust for larger screens
                width: '40% !important',
              }
          }}
          >
            <Card className={classes.card}>
              <Avatar alt={member.name} src={member.image} className={classes.avatar} />
              <CardContent>
                <Typography variant="h5" component="h2" align="center">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" align="center">
                  {member.profession}
                </Typography>
                <div className={classes.socialIcons}>
                  <GitHubIcon color="primary" onClick={() => window.open(member.social.github)} />
                  <LinkedInIcon color="primary" onClick={() => window.open(member.social.linkedin)} />
                  <TwitterIcon color="primary" onClick={() => window.open(member.social.twitter)} />
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </>
  );
};

export default Team;
