import { Box, Card, CardContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MoreHoriz } from "@mui/icons-material";
import RequestQuoteRoundedIcon from "@mui/icons-material/RequestQuoteRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import { useState } from "react";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

const LastActivityCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography sx={{ opacity: "0.8" }} variant="h6" fontWeight="600">
                Last Activity
              </Typography>
            </Box>

            <Box>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreHoriz />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Box display="flex" flexDirection="column" gap={2}>
        <Card>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              pl={1}
            >
              <RequestQuoteRoundedIcon sx={{ opacity: 0.7 }} />
              <Box ml={2}>
                <Typography
                  sx={{ opacity: "0.8" }}
                  variant="h6"
                  fontWeight="600"
                >
                  Transfer
                </Typography>
                <Typography sx={{ opacity: "0.8" }} variant="body2">
                  Today
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{ opacity: "0.8" }}
                variant="body1"
                fontWeight={600}
              >
                -Rp. 500K
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <img
                width="17%"
                height="17%"
                src="src/assets/images/photos/Paypal.png"
                alt=""
              />
              <Box>
                <Typography
                  sx={{ opacity: "0.8" }}
                  variant="h6"
                  fontWeight="600"
                >
                  Paypal Income
                </Typography>
                <Typography sx={{ opacity: "0.8" }} variant="body2">
                  Today
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{ opacity: "0.8" }}
                variant="body1"
                fontWeight={600}
              >
                +Rp. 500K
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              pl={1}
            >
              <PaymentRoundedIcon sx={{ opacity: 0.7 }} />
              <Box ml={2}>
                <Typography
                  sx={{ opacity: "0.8" }}
                  variant="h6"
                  fontWeight="600"
                >
                  Form Naafi
                </Typography>
                <Typography sx={{ opacity: "0.8" }} variant="body2">
                  Today
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{ opacity: "0.8" }}
                variant="body1"
                fontWeight={600}
              >
                +Rp. 900K
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default LastActivityCard;
