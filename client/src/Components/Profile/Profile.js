import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";

function Profile() {
  const { user } = useSelector((state) => state.authReducer);
  
  
  return (
    <div>
      <div class="profile-wrapper">
        <div class="profile-header">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM2ODA0NA&ixlib=rb-1.2.1&q=85"
            width="90"
            height="90"
            class="avatar"
          />
          <div class="profile-info">
            <h1 class="display-name">{user && user.username}</h1>
          </div>
          <h3>{user && user.email}</h3>

          <div class="profile-controls">
            <div class="stacked-button">
              <button class="follow" id="following">
                <span class="follow-text">Edit Profile</span>
                
              </button>
              <button class="follow" id="following">
                <span class="follow-text">Post your Ad</span>
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
