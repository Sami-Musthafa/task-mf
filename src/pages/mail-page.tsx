import { motion } from "framer-motion";

const MailPage: React.FC = () => {
  return (
    <motion.div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerHeight, transition: { duration: 0.1 } }}
    >
      Slider
    </motion.div>
  );
};

export default MailPage;
