import React from "react";

const GitHubRepo = ({ user }) => {
  return (
    <div className="github-repo">
      <a href={`/user/${user.login}`}>
        {/* <img className="user-info__avatar" src={user.avatar_url} alt=""/> */}
        <p>{user.full_name}</p>
      </a>
    </div>
  );
};

export default GitHubRepo;
