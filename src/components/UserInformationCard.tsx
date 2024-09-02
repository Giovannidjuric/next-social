import Link from "next/link";
import UserInfo from "./UserInfo";
import Image from "next/image";
import { User } from "@prisma/client";

type UserInformationCardProps = {
  user: User;
};

const UserInformationCard = ({ user }: UserInformationCardProps) => {
  const createdDate = new Date(user.createdAt);
  const formattedDate = createdDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">
          {user.name && user.surname
            ? `${user.name} ${user.surname}`
            : `${user.username}`}
        </span>
        <Link
          href="/"
          className="text-xs text-blue-500 font-semibold hover:underline-offset-2 hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex gap-2 items-center">
          <span className="text-black text-xl">
            {user.name && user.surname
              ? `${user.name} ${user.surname}`
              : `${user.username}`}
          </span>
          <span className="text-xs text-gray-500">@{user.username}</span>
        </div>
        <p>
          {user.description
            ? user.description
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita quod vitae alias accusantium, deleniti iste reprehenderit adipisci in quisquam nam maxime rem nobis voluptatum tempora exercitationem quibusdam doloremque ex!"}
        </p>
        <div className="flex flex-col gap-2 ">
          <UserInfo
            src="/map.png"
            userInfo="Living in "
            highlighted={user.city || "unknown"}
          />
          <UserInfo
            src="/school.png"
            userInfo="Went to "
            highlighted={user.school || "unknown"}
          />
          <UserInfo
            src="/work.png"
            userInfo="Works at "
            highlighted={user.work || "unknown"}
          />
        </div>
        <div className="flex justify-between items-center">
          {user.website && (
            <div className="flex items-center gap-1">
              <Image src="/link.png" alt="" width={16} height={16} />
              <Link
                href={user.website}
                className="text-blue-500 font-medium hover:underline hover:underline-offset-4"
              >
                {user.website ? user.website : "unknown"}
              </Link>
            </div>
          )}
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="date" width={16} height={16} />
            <span className="">Joined {formattedDate}</span>
          </div>
        </div>
        <button className="hover:ring-1 hover:ring-black transition-all ease-in-out bg-blue-500 px-2 py-1 rounded-lg text-white">
          Follow
        </button>
        <span className="text-red-400 text-xs flex justify-end items-center cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInformationCard;
