import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId = "1" }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInformationCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
