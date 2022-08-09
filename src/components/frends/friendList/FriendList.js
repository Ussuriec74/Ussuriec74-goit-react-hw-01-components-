import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendListItem } from 'components/frends/friendListItem/FriendListItem';


export const FriendList = ({ friends }) => {
  return (
    <Box as="ul" display="flex" flexDirection="column" alignItems="center" mx="auto" width={320}>
      {friends.map(({id, avatar, name, isOnline}) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))
      }
    </Box>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  )
}