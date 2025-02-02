import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Seguiendo" : "Seguir";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="el avat del midulev"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-username">@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          className={
            isFollowing
              ? "tw-followCard-button is-following"
              : "tw-followCard-button"
          }
          onClick={handleClick}
        >
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
