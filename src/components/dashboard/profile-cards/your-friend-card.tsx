import { Box, Card, CardContent, Typography } from "@mui/material";

const YourFriendCard = () => {
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography
            sx={{ opacity: "0.8" }}
            m="-10px"
            variant="h6"
            fontWeight="600"
          >
            Your Friend
          </Typography>
          <Box display="flex" justifyContent="space-between" mt="1rem">
            <img
              style={{ borderRadius: "50%" }}
              width="50rem"
              src={`src/assets/images/avatars/avatar_1.jpg`}
              alt="avatar"
            />
            <img
              style={{ borderRadius: "50%" }}
              width="50rem"
              src={`src/assets/images/avatars/avatar_3.jpg`}
              alt="avatar"
            />
            <img
              style={{ borderRadius: "50%" }}
              width="50rem"
              src={`src/assets/images/avatars/avatar_4.jpg`}
              alt="avatar"
            />
            <img
              style={{ borderRadius: "50%" }}
              width="50rem"
              src={`src/assets/images/avatars/avatar_5.jpg`}
              alt="avatar"
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default YourFriendCard;
