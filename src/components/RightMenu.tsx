import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";

const RightMenu = ({ user }: { user?: User }) => {
  console.log("we have an user", user);

  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <UserInformationCard user={user} />
          <UserMediaCard user={user} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
