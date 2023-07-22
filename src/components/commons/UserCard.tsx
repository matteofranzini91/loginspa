import { useState } from 'react';
import { UserStateDTO } from 'src/redux/slice/user-slice/types';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import EditUserInfoForm from '../EditUserInfoForm';

type UserCardDTO = {
  user: UserStateDTO;
};

const UserCard = ({ user }: UserCardDTO) => {
  const [showEditUserInfoForm, setShowEditUserInfoForm] = useState(false);
  const showEditUserProfile = () => setShowEditUserInfoForm(!showEditUserInfoForm);
  return (
    <Card className="user-card" sx={{ minWidth: 275 }}>
      <CardContent>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <Tooltip title="Editar datos perfil">
                <EditIcon onClick={showEditUserProfile} />
              </Tooltip>
            </IconButton>
          }
        />
        <img className="user-image" src={user.avatar} />
        {showEditUserInfoForm ? (
          <EditUserInfoForm />
        ) : (
          <>
            <Typography
              className="user-name-position"
              variant="h5">{`${user.name} ${user.surname}`}</Typography>
            <Typography className="user-name-position" paragraph={true}>
              {`${user.company.position} en ${user.company.name}`}
            </Typography>
            <Typography paragraph={true}>
              <CakeIcon className="user-icon" />
              {`${user.birthday}`}
            </Typography>
            <Typography paragraph={true}>
              <EmailIcon className="user-icon" />
              {`${user.email}`}
            </Typography>
            <Typography paragraph={true}>
              <PhoneAndroidIcon className="user-icon" />
              {`${user.phone}`}
            </Typography>
            <Typography paragraph={true}>
              <LinkedInIcon className="user-icon" />
              {`${user.website}`}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default UserCard;
