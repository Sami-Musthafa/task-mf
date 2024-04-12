// import DashboardPage from "./pages/dashboard-page";
// import ResponsiveDrawer from "./components/responsive-drawer";
// import { Box } from "@mui/material";
// import SimpleSlider from "./components/dashboard/slider/slider";

// import TogglePage from "./components/dashboard/framer/toggle-page";
// import MotionCard from "./components/dashboard/framer/motion-card";

// const App = () => {
// return (
// <>
//  <Box display="flex" gap={5}>
//   <Box>
//     <ResponsiveDrawer />
//   </Box>
//   <Box flex={1}>
//     <DashboardPage />
//   </Box>
// </Box>

//    <SimpleSlider />
//    <TogglePage />
//    <MotionCard />
//  </>
//   );
// };

// export default App;

// App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MessagePage from "./pages/message-page";
import ProfilePage from "./pages/profile-page";
import Page404 from "./pages/page404";
import TogglePage from "./pages/toggle-page";
import Navbar from "./pages/navbar";

import { AnimatePresence } from "framer-motion";
import SimpleSlider from "./components/dashboard/slider/slider";

const App: React.FC = () => {
  // const location = useLocation();
  return (
    <Router>
      <AnimatePresence>
        <Navbar />
        {/* <Routes location={location} key={location.pathname}> */}
        <Routes>
          <Route path="/" element={<TogglePage />} />
          <Route path="/slider" element={<SimpleSlider />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/page404" element={<Page404 />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
