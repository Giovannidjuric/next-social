import Link from "next/link";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import LeftMenuItem from "./LeftMenuItem";
import Ad from "./Ad";

type LeftMenuProps = {
  type: "home" | "profile";
};

const LeftMenu = ({ type }: LeftMenuProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div>{type === "profile" && <ProfileCard />}</div>
      <div className="p-4  bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <LeftMenuItem src="/posts.png" alt="" itemText="My Posts" />
        <LeftMenuItem src="/activity.png" alt="" itemText="Activity" />
        <LeftMenuItem src="/market.png" alt="" itemText="Market Place" />
        <LeftMenuItem src="/events.png" alt="" itemText="Events" />
        <LeftMenuItem src="/videos.png" alt="" itemText="Videos" />
        <LeftMenuItem src="/news.png" alt="" itemText="News" />
        <LeftMenuItem src="/lists.png" alt="" itemText="Lists" />
        <LeftMenuItem src="/settings.png" alt="" itemText="Settings" />
      </div>
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;
