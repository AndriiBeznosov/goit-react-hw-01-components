import css from './App.module.css';
import { Profile } from '../Profile/Profile';
import { StatisticsTitle } from '../StatisticsTitle/StatisticsTitle';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        paddingTop: 20,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <section className={css.statistics}>
        <StatisticsTitle text="Upload stats" />
        <Statistics events={data} />
      </section>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
