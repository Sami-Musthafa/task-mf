import { Box } from "@mui/material";
import ResponsiveDrawer from "../../components/responsive-drawer";
import Main from "./main";

const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <Box display="flex">
        <ResponsiveDrawer />
        <Main>{children}</Main>
      </Box>
    </>
  );
};

export default DashboardLayout;
