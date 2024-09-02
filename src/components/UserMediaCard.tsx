import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type UserMediaCardProps = {
  user: User;
};

const UserMediaCard = ({ user }: UserMediaCardProps) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">
          {" "}
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
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="relative w-1/5 h-24 ">
          <Image
            src="https://images.pexels.com/photos/27316259/pexels-photo-27316259/free-photo-of-a-field-with-hay-bales-in-it-under-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27316259/pexels-photo-27316259/free-photo-of-a-field-with-hay-bales-in-it-under-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27316259/pexels-photo-27316259/free-photo-of-a-field-with-hay-bales-in-it-under-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27316259/pexels-photo-27316259/free-photo-of-a-field-with-hay-bales-in-it-under-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27316259/pexels-photo-27316259/free-photo-of-a-field-with-hay-bales-in-it-under-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27316259/pexels-photo-27316259/free-photo-of-a-field-with-hay-bales-in-it-under-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover cursor-pointer"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27316259/pexels-photo-27316259/free-photo-of-a-field-with-hay-bales-in-it-under-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/27316259/pexels-photo-27316259/free-photo-of-a-field-with-hay-bales-in-it-under-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
