import { Box } from "@mui/material";
import MainPage from "../components/dashboard/main-page";
import ProfileCards from "../components/dashboard/profile-cards/profile-cards";

const DashboardPage: React.FC = () => {
  return (
    <Box display="flex" gap={5} flexWrap="wrap">
      <Box flex={1} minWidth="300px">
        <MainPage />
      </Box>
      <ProfileCards />
    </Box>
  );
};

export default DashboardPage;
