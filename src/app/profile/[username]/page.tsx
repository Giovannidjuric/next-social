import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { Block } from "@prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const { username } = params;

  const res = await prisma.user.findUnique({
    where: {
      username: username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          posts: true,
        },
      },
    },
  });

  console.log("currentUser page:", res);

  if (!res) return notFound();

  const { userId: user } = auth();

  let isBlocked;

  if (user) {
    isBlocked = await prisma.block.findFirst({
      where: {
        blockerId: res.id,
        blockedId: user,
      },
    });
  }

  if (isBlocked) {
    return notFound();
  } else {
    isBlocked = false;
  }
  return (
    <div className="flex gap-6 pt-6">
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
                src={res.cover || "/noCover.png"}
                fill
                className="object-cover"
                alt=""
              />
              <Image
                src={res.avatar || "/noAvatar.png"}
                width={128}
                height={128}
                className="absolute z-10 rounded-full ring-4 ring-white h-32 w-32 object-cover left-0 right-0 mx-auto -bottom-16"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center h-32 mt-14 gap-4">
              <h1 className="font-medium text-2xl">
                {res.name && res.surname
                  ? `${res.name} ${res.surname}`
                  : `${res.username}`}
              </h1>
              <div className="flex items-center gap-8 justify-center">
                <div className="flex flex-col items-center">
                  <div className="font-medium">{res._count.posts}</div>
                  <div className="text-sm">Posts</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium">{res._count.followers}</div>
                  <div className="text-sm">Followers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium">{res._count.following}</div>
                  <div className="text-sm">Following</div>
                </div>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={res} />
      </div>
    </div>
  );
};

export default ProfilePage;
