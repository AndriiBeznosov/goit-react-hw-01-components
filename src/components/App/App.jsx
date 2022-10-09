import { Profile } from '../Profile/Profile';
import data from '../data/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
      ></Profile>
    </div>
  );
};
