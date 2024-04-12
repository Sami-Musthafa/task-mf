import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MessagePage: React.FC = () => {
  return (
    <motion.div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{
        x: window.innerWidth,
        y: window.innerHeight,
        transition: { duration: 0.1 },
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        p="300px 0"
      >
        <Typography variant="h1">Message</Typography>
      </Box>
    </motion.div>
  );
};

export default MessagePage;
