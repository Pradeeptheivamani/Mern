import React from 'react'
import UserList from './UserList'
function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}

export default UserCard;
