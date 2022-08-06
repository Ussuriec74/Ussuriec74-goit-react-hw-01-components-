import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Stats } from '../stats/Stats';
import { ProfileWrapper, DescriptionWrapper, Avatar, UserName, UserInfo } from './Profile.styled';

export const Profile = ({ profile: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
  return (
    <ProfileWrapper>
      <DescriptionWrapper>
        <Avatar
          src={avatar}
          alt={`${username} avatar`}
          className="avatar"
        />
        <UserName>{username}</UserName>
        <UserInfo>{`@${tag}`}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </DescriptionWrapper>

      <Box display="flex">
        <Stats label={`Followers`} quantity={followers} />
        <Stats label={`Views`} quantity={views} />
        <Stats label={`Likes`} quantity={likes} />
      </Box>
    </ProfileWrapper>
  )
}

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}

