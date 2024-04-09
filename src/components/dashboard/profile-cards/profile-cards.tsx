import { Box, Divider } from "@mui/material";
import MainProfileCard from "./main-Profile-card";
import YourFriendCard from "./your-friend-card";
import LastActivityCard from "./last-activity-card";

const ProfileCards = () => {
  return (
    <Box width="20rem" mt={3} height="100vh">
      <MainProfileCard />
      <Divider />
      <YourFriendCard />
      <Divider />
      <LastActivityCard />
    </Box>
  );
};

export default ProfileCards;
