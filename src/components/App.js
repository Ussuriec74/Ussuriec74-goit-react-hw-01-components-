import { Profile } from 'components/profile/Profile';
import profile from '../data/user.json';
import { Statistics } from 'components/statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from 'components/frends/friendList/FriendList';
import friends from '../data/friends.json';
import { Box } from 'components/Box';


export const App = () => {
  return (
    <Box>
      <Profile profile={profile} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
    </Box>
  );
};
