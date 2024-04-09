import { Box, Card, CardContent, Typography } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Cards = ({ number, name }: any) => {
  return (
    <div>
      <Card
        sx={{
          flex: "1",
          bgcolor: "#281678",
          color: "white",
          borderRadius: "30px",
          px: "1rem",
        }}
      >
        <CardContent>
          <Typography variant="body1">{number}</Typography>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">**** **** **** 2600</Typography>
          <Typography variant="body1">Balance</Typography>
          <Typography variant="h6">
            RP{bull} 10{bull}500{bull}000
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
