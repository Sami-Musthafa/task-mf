import { Box, Typography } from "@mui/material";
import ToggleCard from "../components/dashboard/framer/toggle-card";
import { motion } from "framer-motion";

const TogglePage = () => {
  return (
    <motion.div
      initial={{ width: 0, height: 0 }}
      animate={{ width: "100%", height: "100%" }}
      exit={{
        x: window.innerWidth,
        y: window.innerHeight,
        transition: { duration: 0.1 },
      }}
    >
      <Box>
        <Typography variant="h2" textAlign="center" padding="2rem">
          Animations
        </Typography>
        <Box display="flex" flexWrap="wrap">
          <ToggleCard
            name="Lap 1"
            src="src/assets/images/photos/slider_1.jpg"
          />
          <ToggleCard
            name="Lap 2"
            src="src/assets/images/photos/slider_2.jpg"
          />
          <ToggleCard name="Work" src="src/assets/images/photos/slider_5.jpg" />
          <ToggleCard
            name="WorkSpace"
            src="src/assets/images/photos/slider_3.jpg"
          />
          <ToggleCard
            name="Authentication"
            src="src/assets/images/photos/slider_4.jpg"
          />
          <ToggleCard name="Chip" src="src/assets/images/photos/slider_6.jpg" />
          {/* <ToggleCard name="paypal" src="src/assets/images/photos/paypal.png" /> */}
        </Box>
      </Box>
    </motion.div>
  );
};

export default TogglePage;
