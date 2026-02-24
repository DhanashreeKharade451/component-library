import type { UserProfileCardProps } from "../../types";

function UserProfileCard({
  user,
  showEmail,
  showRole = false,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md p-6 max-w-sm">
      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="w-16 h-16 rounded-full object-cover"
        >
          <path
            fill-rule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {/* {user.avatarUrl && <img src={user.avatarUrl} alt={user.name} className="w-12 h-12 rounded-full object-cover" />} */}

        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>

          {showEmail && <p className="text-sm text-gray-600">{user.email}</p>}

          {showRole && <p className="text-sm text-gray-500">{user.role}</p>}
        </div>
      </div>

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
}

export default UserProfileCard;
