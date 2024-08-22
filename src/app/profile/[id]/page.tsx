import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 h-[calc(100vh-96px)] pt-6">
      {/* LEFT */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>

      {/* CENTER */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 rounded-lg  p-2 ">
            <div className="h-64 relative">
              <Image
                src="https://images.pexels.com/photos/27372370/pexels-photo-27372370/free-photo-of-a-view-of-a-mountain-range-through-an-open-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                fill
                className="object-cover"
                alt=""
              />
              <Image
                src="https://images.pexels.com/photos/27540338/pexels-photo-27540338/free-photo-of-a-woman-in-a-white-dress-is-leaning-on-a-log.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                width={128}
                height={128}
                className="absolute z-10 rounded-full ring-4 ring-white h-32 w-32 object-cover left-0 right-0 mx-auto -bottom-16"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center h-32 mt-14 gap-4">
              <h1 className="font-medium text-2xl">Tanjiro Hinito</h1>
              <div className="flex items-center gap-8 justify-center">
                <div className="flex flex-col items-center">
                  <div className="font-medium">142</div>
                  <div className="text-sm">Posts</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium">1.2K</div>
                  <div className="text-sm">Followers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium">1.4K</div>
                  <div className="text-sm">Following</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default ProfilePage;
