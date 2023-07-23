import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../../assets/scss/navbar-skeleton.scss';

const NavbarSkeleton = () => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Stack spacing={1}>
        <Skeleton className="user-avatar-skeleton" variant="circular" width={100} height={100} />
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={40} />
      </Stack>
    </CardContent>
  </Card>
);

export default NavbarSkeleton;
