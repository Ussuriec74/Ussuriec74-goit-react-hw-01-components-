import { Profile } from 'components/profile/Profile';
import profile from '../data/user.json';
import { Statistics } from 'components/statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from 'components/frends/friendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import { Box } from 'components/Box';

const { username, tag, location, avatar, stats } = profile;

export const App = () => {
  return (
    <Box>
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
