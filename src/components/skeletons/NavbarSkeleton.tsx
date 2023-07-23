import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import '../../assets/scss/navbar-skeleton.scss';

const NavbarSkeleton = () => (
  <div className="main-navbar-skeleton-container">
    <Container className="navbar-skeleton-containter" maxWidth="xl">
      <Stack>
        <Skeleton variant="circular" width={50} height={50} />
        <Skeleton variant="circular" width={50} height={50} />
      </Stack>
    </Container>
  </div>
);

export default NavbarSkeleton;
