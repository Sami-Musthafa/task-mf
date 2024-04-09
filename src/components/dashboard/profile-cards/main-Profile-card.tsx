import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import MoveDownRoundedIcon from "@mui/icons-material/MoveDownRounded";
import RequestQuoteRoundedIcon from "@mui/icons-material/RequestQuoteRounded";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import { Box, Card, CardContent, Typography } from "@mui/material";

const MainProfileCard = () => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <SettingsSuggestRoundedIcon sx={{ opacity: "0.2" }} />
          <NotificationsActiveRoundedIcon sx={{ opacity: "0.2" }} />
        </Box>
        <Box>
          <Box
            py="1rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              style={{ borderRadius: "50%" }}
              width="50%"
              src={`src/assets/images/avatars/avatar_2.jpg`}
              alt="avatar"
            />
          </Box>
        </Box>

        <Box
          mt={2}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            justifyContent="center"
            alignItems="center"
          >
            <MoveDownRoundedIcon sx={{ opacity: 0.5 }} />
            <Typography>Transfer</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            justifyContent="center"
            alignItems="center"
          >
            <RequestQuoteRoundedIcon sx={{ opacity: 0.5 }} />
            <Typography>Request</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            justifyContent="center"
            alignItems="center"
          >
            <LocalAtmRoundedIcon sx={{ opacity: 0.5 }} />
            <Typography>Topup</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            justifyContent="center"
            alignItems="center"
          >
            <PaymentRoundedIcon sx={{ opacity: 0.5 }} />
            <Typography>Bill</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MainProfileCard;
