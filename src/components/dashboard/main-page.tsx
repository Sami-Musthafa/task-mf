import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { top100Films } from "./top100films";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const MainPage = () => {
  return (
    <Box flex={1}>
      <Box
        my={5}
        display="flex"
        flexWrap="wrap"
        justifyContent={"space-around"}
      >
        <Typography variant="h4" my={2} fontWeight="600" color="black">
          Dashboard
        </Typography>
        <Stack
          spacing={2}
          sx={{ width: "200px", borderRadius: "100px", minWidth: "200px" }}
        >
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => <TextField {...params} label="Search" />}
            // PaperComponent={(props) => (
            //   <Paper
            //     sx={{
            //       background: "lightblue",
            //       color: "red",
            //       fontSize: "25px",
            //       borderRadius: " 20%",
            //       "&:hover": {
            //         border: "1px solid #00FF00",
            //         color: "gray",
            //         backgroundColor: "white",
            //       },
            //     }}
            //     {...props}
            //   />
            // )}
          />
        </Stack>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        gap={3}
        mt={3}
      >
        <Card
          sx={{
            flex: "1",
            bgcolor: "#281678",
            color: "white",
            borderRadius: "30px",
            px: "1rem",
            minWidth: "240px",
            maxWidth: "240px",
            pl: "2rem",
          }}
        >
          <CardContent>
            <Typography variant="body1">Name</Typography>
            <Typography variant="h5">Arya Wijaya</Typography>
            <Typography variant="h6">
              {bull}
              {bull}
              {bull}
              {bull} {bull}
              {bull}
              {bull}
              {bull} {bull}
              {bull}
              {bull}
              {bull} 2600
            </Typography>
            <Typography variant="body1">Balance</Typography>
            <Typography variant="h6">
              RP{bull} 10{bull}500{bull}000
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            flex: "1",
            bgcolor: "#8ce8fa",
            color: "white",
            borderRadius: "30px",
            px: "1rem",
            minWidth: "240px",
            maxWidth: "240px",
            pl: "2rem",
          }}
        >
          <CardContent>
            <Typography variant="body1">Name</Typography>
            <Typography variant="h5">Arya Wijaya</Typography>
            <Typography variant="h6">
              {bull}
              {bull}
              {bull}
              {bull} {bull}
              {bull}
              {bull}
              {bull} {bull}
              {bull}
              {bull}
              {bull} 2600
            </Typography>
            <Typography variant="body1">Balance</Typography>
            <Typography variant="h6">
              RP{bull} 2{bull}400{bull}000
            </Typography>
          </CardContent>
        </Card>
        {/* <Cards name={"arya wijaya"} number={"34524"} /> */}
      </Box>
    </Box>
  );
};

export default MainPage;
