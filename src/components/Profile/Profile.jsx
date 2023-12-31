import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = props => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={props.avatar}
          alt="User avatar"
          className={css.avatar}
          width="300px"
          height="300px"
        />
        <p className={css.name}>{props.username}</p>
        <p className={css.tag}>@{props.tag}</p>
        <p className={css.location}>{props.location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{props.stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{props.stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
};
