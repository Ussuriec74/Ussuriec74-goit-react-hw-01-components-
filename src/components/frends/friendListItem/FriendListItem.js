import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendStatus, FriendImg, FriendName } from 'components/frends/friendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Box
      as="li"
      display="flex"
      width="302px"
      alignItems="center"
      mr="auto"
      mb="8px"
      p="8px"
      bg="white"
      border="1px solid black"
      borderRadius="4px"
      boxShadow="10px 10px 8px 2px rgba(0, 0, 0, 0.3)"
    >
      <FriendStatus status={isOnline}></FriendStatus>
      <FriendImg src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </Box>
  )
}

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}