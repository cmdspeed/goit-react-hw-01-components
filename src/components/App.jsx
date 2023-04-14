import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';

export const App = () => {
  return (
    <>
      <section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />
      <FriendList friends={friends} />;
    </>
  );
};
