import { useAppSelector } from 'src/redux/hooks/redux-hooks';
import { getUserState } from 'src/redux/store';
import Container from '@mui/material/Container';
import UserCardSkeleton from 'src/components/skeletons/UserCardSkeleton';
import UserCard from 'src/components/commons/UserCard';
import '../assets/scss/welcome.scss';

const Welcome = () => {
  const user = useAppSelector(getUserState);

  return (
    <Container className="user-card-main-container" maxWidth="xl">
      <div className="card-container">
        {user.loading ? <UserCardSkeleton /> : <UserCard user={user} />}
      </div>
    </Container>
  );
};

export default Welcome;
