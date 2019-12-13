import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link, Route } from "react-router-dom";
// import User from "./User";
import GitHubUser from "./GitHubUser";

const Followers = props => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/users/${props.match.params.username}/followers`
      );
      setFollowers(result.data);
    };
    fetchData();
  }, [props.match.params.username]);

  return !followers ? (
    <div>LOADING FOLLOWERS...</div>
  ) : (
    <div className="followers-page">
      <h2>Followers of {props.match.params.username}</h2>
      {followers.map(user => (
        <GitHubUser user={user} />
      ))}
    </div>
  );
};

export default Followers;
