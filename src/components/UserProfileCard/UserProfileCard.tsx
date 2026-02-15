import type { UserProfileCardProps } from "../../types";

function UserProfileCard({user, showEmail, showRole=false, onEdit, children} : UserProfileCardProps) {
  return (
  
      <div className="border rounded-lg p-4 shadow-sm bg-white">
			<div className="flex items-center gap-4">
				{user.avatarUrl && <img src={user.avatarUrl} alt={user.name} className="w-12 h-12 rounded-full object-cover" />}

				<div className="flex-1">
					<h2 className="font-semibold text-lg">{user.name}</h2>

					{showEmail && <p className="text-sm text-gray-600">{user.email}</p>}

					{showRole && <p className="text-sm text-gray-500">{user.role}</p>}
				</div>

				{onEdit && (
					<button onClick={() => onEdit(user.id)} className="text-sm font-medium rounded-md bg-blue-500 text-white p-4 hover:underline  ">
						Edit Profile
					</button>
				)}
			</div>

			{children && <div className="mt-4">{children}</div>}

			
		</div>
	);
}

export default UserProfileCard;
