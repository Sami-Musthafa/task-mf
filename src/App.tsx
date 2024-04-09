import DashboardPage from "./pages/dashboard-page";
import ResponsiveDrawer from "./components/responsive-drawer";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Box display="flex" gap={5}>
        <Box>
          <ResponsiveDrawer />
        </Box>
        <Box flex={1}>
          <DashboardPage />
        </Box>
      </Box>
    </>
  );
};

export default App;
