import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { log } from "console";
import Image from "next/image";

const ProfileCard = async () => {
  const loggedInUser = auth();

  if (loggedInUser.userId != null) {
    const user = await prisma.user.findUnique({
      where: {
        id: loggedInUser.userId,
      },
      include: {
        _count: {
          select: { followers: true },
        },
      },
    });
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-6">
      <div className="h-20 z-10 relative">
        <Image
          src="https://images.pexels.com/photos/5758468/pexels-photo-5758468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className="object-cover rounded-lg"
        />
        <Image
          src="https://images.pexels.com/photos/18723456/pexels-photo-18723456/free-photo-of-portrait-of-woman-in-front-of-a-petrol-station.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 rounded-full ring-1 ring-white hover:ring-blue-600 transition-all ease-in cursor-pointer object-cover absolute z-10 mx-auto left-0 right-0 -bottom-6"
        />
      </div>
      <div className="flex flex-col h-20 gap-2 items-center">
        <span className="font-semibold">Giovanni Djuric</span>
        <div className="flex items-center gap-2">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/18723456/pexels-photo-18723456/free-photo-of-portrait-of-woman-in-front-of-a-petrol-station.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 rounded-full"
            />
            <Image
              src="https://images.pexels.com/photos/18723456/pexels-photo-18723456/free-photo-of-portrait-of-woman-in-front-of-a-petrol-station.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 rounded-full"
            />
            <Image
              src="https://images.pexels.com/photos/18723456/pexels-photo-18723456/free-photo-of-portrait-of-woman-in-front-of-a-petrol-station.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 rounded-full"
            />
          </div>
          <span className="text-xs text-gray-500">500 followers</span>
        </div>
        <button className="rounded-md py-1 px-2 text-white text-sm bg-blue-500 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
