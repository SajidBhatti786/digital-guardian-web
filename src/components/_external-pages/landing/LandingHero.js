import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
import { GooglePlay } from '@mui/icons-material'; // Import the GooglePlay icon from Material-UI
import { useState } from 'react';
// material
import { styled } from '@mui/material/styles';
import { 
  Button, 
  Box, 
  Container, 
  Typography, 
  Stack 
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={2} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const fill = isHovered ? 'white' : 'black';
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} />

        <HeroImgStyle alt="hero" src="/static/home/hero.png" variants={varFadeInUp} />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h4" sx={{ color: 'common.white', mt: 0 }}>
                <h1 component="span" variant="h4" sx={{ color: 'primary.main' }}>
                  <br /><br /> Digital Guardian
                </h1>
                
                <Typography component="span" variant="h4" sx={{ color: 'primary.main' }}>
                Your Ultimate Parental Control Solution
                </Typography>
                
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white', mt: 0 }}>
              Digital Guardian offers robust parental control features, empowering parents to safeguard their children online with ease. From content filtering to screen time management, take control of your child's digital experience              </Typography>
            </motion.div>

            {/* <motion.div variants={varFadeInRight}>
              <Typography variant="h5" sx={{ color: 'common.white', mt: 0 }}>Our Solution</Typography>
              <Typography sx={{ color: 'common.white', mt: 0 }}>
                Utilizing cutting-edge technology like real-time data analytics, GPS, and predictive algorithms, SmartQ streamlines appointment scheduling, making it faster, more efficient, and user-friendly.
              </Typography>
            </motion.div> */}

             <motion.div variants={varFadeInRight}>
             <Box
  sx={{
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',

    '& > div': {
      flex: ' auto',
    },
  }}
>
  <Box
    sx={{
      width: 'auto',
      height: 'auto',
      border: '0.001px solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      marginRight: { md: '16px',sm: '16px'},
      padding: '10px',
      margin: '10px',
      transition: 'all 0.5s ease-in-out',
      cursor: 'pointer',
      width: {lg: 'auto', md: 'auto',sm: 'auto'},
      color: 'primary.main',
       '&:hover': {
        backgroundColor: '',
        color: 'primary.lighter'
      }
    }}
  >
    <Box sx={{ marginRight: '8px' }}>
    <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    />
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    />
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    />
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    />
                  </svg>
    </Box>
    <Box>
      <Typography variant="body2" sx={{ fontSize: '0.675rem', fontWeight: 'bold' }}>
        GET IT ON
      </Typography>
      <Typography variant="h6" sx={{ marginTop: '-4px', fontWeight: 'bold' }}>
        Google Play
      </Typography>
    </Box>
  </Box>
  <Box
    sx={{
      width: '48px',
      height: 'auto',
      border: '0.001px solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      marginRight: { md: '16px' },
      padding: { lg: '10px', md: '16px' },
      padding: '10px',
      margin: '10px',
      transition: 'all 0.5s ease-in-out',
      cursor: 'pointer',
      width: 'auto',
      color: 'primary.main',
       '&:hover': {
        backgroundColor: '',
        color: 'primary.lighter'
      }
    }}
  >
    <Box sx={{ marginRight: '8px' }}>
    <svg viewBox="0 0 384 512" width="30"
                 
                  >
                    <path
                      fill='white'
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
    </Box>
    <Box>
      <Typography variant="body2" sx={{ fontSize: '0.675rem', fontWeight: 'bold' }}>
        GET IT ON
      </Typography>
      <Typography variant="h6" sx={{ marginTop: '-4px', fontWeight: 'bold' }}>
        App Store
      </Typography>
    </Box>
  </Box>
</Box>


            </motion.div> 

            {/* <motion.div variants={varFadeInRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DASHBOARD.root}
                startIcon={<Icon icon={flashFill} width={20} height={20} />}
              >
                Live Preview
              </Button>
            </motion.div> */}

          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
