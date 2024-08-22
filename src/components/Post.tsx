import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-between">
        <div>
          <Image
            src="https://images.pexels.com/photos/27582996/pexels-photo-27582996/free-photo-of-a-statue-of-arco-da-rua-augusto-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 self-center">Dan Bilzerian</div>
        <div>
          <Image
            src="/more.png"
            alt="more"
            width={40}
            height={40}
            className="w-10 h-10 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* CENTER */}
        <div className="relative w-full min-h-96">
          <Image
            className="object-cover rounded-md"
            src="https://images.pexels.com/photos/27308308/pexels-photo-27308308/free-photo-of-lofoten-islands-of-norway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt="feed"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          corrupti, quas pariatur animi expedita ratione reprehenderit quis
          repellendus non modi voluptates quaerat, harum aspernatur? Ut ipsa
          unde beatae omnis similique!
        </p>
      </div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 cursor-pointer"
            />
            <div>|</div>
            <span className="text-gray-500">
              123 <span className="hidden md:inline text-gray-500">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 cursor-pointer"
            />
            <div>|</div>
            <span className="text-gray-500">
              123{" "}
              <span className="hidden md:inline text-gray-500">Comments</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-100 p-2">
          <Image
            src="/share.png"
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 cursor-pointer"
          />
          <div>|</div>
          <span className="text-gray-500">
            123 <span className="hidden md:inline text-gray-500">Shares</span>
          </span>
        </div>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
};

export default Post;
