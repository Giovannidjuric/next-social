import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-md rounded-lg p-4 text-gray-500 text-sm font-semibold">
      <div className="flex justify-between items-center ">
        <div>Friend Requests</div>
        <Link href="/">
          <span className="text-blue-500 text-xs hover:underline hover:underline-offset-2 hover:underline-">
            See all
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image
            src="https://images.pexels.com/photos/20410939/pexels-photo-20410939/free-photo-of-surface-of-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="font-semibold">Mirrirot Akkinor</span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 object-cover rounded-full cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 object-cover rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
