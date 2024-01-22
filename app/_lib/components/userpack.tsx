import * as React from "react";

interface ICurrentUserProps {}

const CurrentUser: React.FC<ICurrentUserProps> = ({}) => {
  return (
    <div
      style={{
        fontSize: "24px",
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
