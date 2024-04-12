import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const MotionCard = () => {
  const [selectedId, setSelectedId] = useState("");

  return (
    <div>
      <motion.div layoutId={"1"} onClick={() => setSelectedId("1")}>
        <motion.h5>free</motion.h5>
        <motion.h2>component</motion.h2>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <motion.h5>free</motion.h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedId("")}
                  >
                    <span className="icon-cross"></span>
                    <span className="visually-hidden">Close</span>
                  </button>
                </div>
                <div>
                  <motion.h2>
                    component component co mponentc ompo ne ntcomp onentcom p
                    onentc ompon entcom ponentcomponen tcom pone ntc omponent
                    compon entcom pone ntco mpon entcom ponent comp nentcom
                  </motion.h2>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MotionCard;
