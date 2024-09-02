import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const AddPost = () => {
  const { userId }: { userId: string | null } = auth();

  const testAction = async (formData: FormData) => {
    "use server";

    const desc = formData.get("description") as string;

    try {
      console.log("starting server action");
      if (!userId) {
        throw new Error("User not logged in");
      }

      const res = await prisma.post.create({
        data: {
          userId: userId,
          desc: desc,
        },
      });

      console.log("logging response from db:", res);
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div className="flex bg-white rounded-lg shadow-md text-sm gap-4 justify-between p-4">
      <Image
        className="w-12 h-12 rounded-full object-cover flex items-center justify-center"
        src="https://images.pexels.com/photos/27582996/pexels-photo-27582996/free-photo-of-a-statue-of-arco-da-rua-augusto-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width={48}
        height={48}
      ></Image>

      <div className="flex flex-col gap-2 w-full">
        <form action={testAction} className="flex justify-between gap-4 flex-1">
          <textarea
            className="bg-slate-100 rounded-lg outline-teal-300 p-2 flex-1"
            name="description"
            id=""
            placeholder="What's on your mind?"
          ></textarea>
          <div className="flex flex-col justify-end gap-2">
            <Image
              className="w-5 h-5 rounded-full object-cover self-end mx-auto"
              src="/emoji.png"
              alt=""
              width={20}
              height={20}
            ></Image>
          </div>
          <button
            type="submit"
            className="border border-teal-300 py-1 px-2 rounded-lg hover:bg-teal-200 transition-all ease-in-out duration-500  hover:font-semibold"
          >
            Create Post
          </button>
        </form>
        <div className="mt-4 flex gap-4 text-gray-400 flex-wrap">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <Image
              className="w-5 h-5"
              src="/addimage.png"
              alt=""
              width={20}
              height={20}
            />
            Photo
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              className="w-5 h-5"
              src="/addVideo.png"
              alt=""
              width={20}
              height={20}
            ></Image>
            Video
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              className="w-5 h-5"
              src="/addEvent.png"
              alt=""
              width={20}
              height={20}
            />
            Event
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              className="w-5 h-5"
              src="/poll.png"
              alt=""
              width={20}
              height={20}
            />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
