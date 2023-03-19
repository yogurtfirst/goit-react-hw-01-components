import user from './user.json';
import data from './data.json';
import transactions from './transactions.json';
import friends from './friends.json';
import Profile from './Profile/Profile.js';
import Statistics from './Statistics/Statistics.js';
import FriendList from './FriendList/FriendList.js';
import TransactionHistory from './TransactionHistory/TransactionHistory.js';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </>  
  );
};
