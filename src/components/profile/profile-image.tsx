import React from "react";

const ProfileImage = () => {
  return (
    <img
      src="/assets/profile.jpg"
      alt="Profile"
      className="w-48 h-48 rounded-full object-cover object-center -translate-y-1/3 border-6 border-slate-300"
    />
  );
};

export default ProfileImage;
