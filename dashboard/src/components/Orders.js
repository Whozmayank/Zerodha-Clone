import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BoxIcon from "@mui/icons-material/Inventory2";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  CircularProgress,
} from "@mui/material";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3002/newOrder").then((res) => {
      setAllOrders(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <CircularProgress color="primary" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading your orders...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 6, px: 2 }}>
      {allOrders.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h6" color="text.secondary">
            You haven't placed any orders yet
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            sx={{ mt: 3 }}
          >
            Get started
          </Button>
        </Box>
      ) : (
        <>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            sx={{ mb: 4, fontWeight: 600 }}
          >
            Your Orders
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {allOrders.map((order) => (
              <Card
                key={order._id}
                sx={{
                  minWidth: 260,
                  maxWidth: 320,
                  boxShadow: 4,
                  borderRadius: 4,
                  mb: 2,
                  background:
                    "linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)",
                  border: "1px solid #e0e0e0",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  "&:hover": {
                    boxShadow: 8,
                    transform: "translateY(-4px) scale(1.03)",
                    background:
                      "linear-gradient(135deg, #bbdefb 0%, #ffffff 100%)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <BoxIcon color="primary" sx={{ fontSize: 32, mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        maxWidth: 180,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        wordBreak: "break-all",
                        color: "#1976d2",
                      }}
                    >
                      {order._id}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <SwapHorizIcon color="success" sx={{ mr: 1 }} />
                    <Typography sx={{ color: "#388e3c" }}>
                      <strong>Qty:</strong> {order.qty}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CurrencyRupeeIcon color="action" sx={{ mr: 1 }} />
                    <Typography sx={{ color: "#f57c00" }}>
                      <strong>Price:</strong> ₹{order.price}
                    </Typography>
                  </Box>
                  <Typography sx={{ mt: 1, color: "#0288d1" }}>
                    <strong>Mode:</strong> {order.mode}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Orders;
