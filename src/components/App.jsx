import user from '../data/user.json';
import data from '../data/data.json';

import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';

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
    </>
  );
};
