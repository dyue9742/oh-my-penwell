import * as React from "react";

interface CurrentUserProps { }

const CurrentUser: React.FC<CurrentUserProps> = ({ }) => {
  return (
    <div
      style={{
        fontSize: "16px",
      }}
    >
      <p>This is an overview for the current user.</p>
      <ul>
        <li>Classroom</li>
        <li>Documents</li>
      </ul>
    </div>
  );
};

export default CurrentUser;
