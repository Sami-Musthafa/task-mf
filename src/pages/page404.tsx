import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Page404: React.FC = () => {
  return (
    <motion.div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        p="300px 0"
      >
        <Typography variant="h1">Error 404</Typography>
      </Box>
    </motion.div>
  );
};

export default Page404;
