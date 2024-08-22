import Link from "next/link";
import UserInfo from "./UserInfo";
import Image from "next/image";

type UserInformationCardProps = {
  userId: string;
  name: string;
};

const UserInformationCard = ({
  userId,
  name = "User Information",
}: UserInformationCardProps) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">{name}</span>
        <Link
          href="/"
          className="text-xs text-blue-500 font-semibold hover:underline-offset-2 hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex gap-2 items-center">
          <span className="text-black text-xl">Giovanni Djuric</span>
          <span className="text-xs text-gray-500">@GiSocial</span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          voluptas praesentium, doloribus consectetur
        </p>
        <div className="flex flex-col gap-2 ">
          <UserInfo src="/map.png" userInfo="Living in " highlighted="Denver" />
          <UserInfo
            src="/school.png"
            userInfo="Went to "
            highlighted="Edgar High School"
          />
          <UserInfo
            src="/work.png"
            userInfo="Works at "
            highlighted="Apple Inc."
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
              href="/"
              className="text-blue-500 font-medium hover:underline hover:underline-offset-4"
            >
              gi.social
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="date" width={16} height={16} />
            <span className="">Joined August 2024</span>
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
