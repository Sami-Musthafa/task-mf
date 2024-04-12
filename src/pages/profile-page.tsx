import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProfileCards from "../components/dashboard/profile-cards/profile-cards";

const ProfilePage = () => {
  return (
    <motion.div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ width: 0, height: 0 }}
      animate={{ width: "100%", height: "100%" }}
      exit={{
        width: 0,
        height: 0,
        transition: { duration: 0.1 },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography variant="h1">Profile Page</Typography>
        <ProfileCards />
      </Box>
    </motion.div>
  );
};

export default ProfilePage;
