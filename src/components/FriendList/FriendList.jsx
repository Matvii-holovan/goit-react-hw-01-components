import PropTypes from 'prop-types'
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';


export default function FriendList({ friends }) {
  return (
    <div className={css.friends}>
      <ul className={css.friend_list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </ul>
    </div>
  );
};

FriendList.prototype = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };