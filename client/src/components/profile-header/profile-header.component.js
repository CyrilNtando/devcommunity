import React from 'react';
import { PaperContainer } from './profile-header.styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { Link as Linked } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import InstagramIcon from '@material-ui/icons/Instagram';
function ProfileHeader() {
  return (
    <PaperContainer elevation={0}>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Avatar className='header-avatar' />
        <Typography variant='h1' className='header-title'>
          John Doe
        </Typography>
        <Typography paragraph={true}>Developer at Microsoft</Typography>
        <Typography paragraph={true}>Seattle,WA</Typography>
        <div>
          <Link component={Linked} to='/'>
            <LanguageIcon />
          </Link>
          <Link component={Linked} to='/'>
            <TwitterIcon />
          </Link>
          <Link component={Linked} to='/'>
            <FacebookIcon />
          </Link>

          <Link component={Linked} to='/'>
            <LinkedInIcon />
          </Link>
          <Link component={Linked} to='/'>
            <InstagramIcon />
          </Link>
        </div>
      </Grid>
    </PaperContainer>
  );
}

export default ProfileHeader;
