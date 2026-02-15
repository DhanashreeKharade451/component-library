import type { UserProfileCardProps } from "../../types";

function UserProfileCard({user, showEmail, showRole, onEdit, children }: UserProfileCardProps) {
  const User = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "https://example.com/avatar.jpg", 
  };

  return (
    <div className="UserProfileCard">
     <h2> user: {user} </h2>
      user={user}
      showEmail={true}
      showRole={true}
      onEdit={(userId) => alert(`Editing user ${userId}`)}
    >
      <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
    </UserProfileCard>
</div>
  );
  
}

export default UserProfileCard;
