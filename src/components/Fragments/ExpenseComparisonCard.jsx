
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export default function ExpenseComparisonCard({
  title,
  amount,
  percentage = 0,
  isUp = false,
  items = [],
  icon,
}) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap={1}>
            {icon}
            <Box>
              <Typography variant="body2" color="text.secondary">
                {title}
              </Typography>
              <Typography fontWeight="bold">${amount}</Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={0.5}>
            {isUp ? (
              <TrendingUpIcon color="error" fontSize="small" />
            ) : (
              <TrendingDownIcon color="success" fontSize="small" />
            )}
            <Typography
              variant="caption"
              color={isUp ? "error.main" : "success.main"}
            >
              {percentage}%
            </Typography>
          </Box>
        </Box>

        <Typography variant="caption" color="text.secondary">
          Compare to the last month
        </Typography>

        <Divider sx={{ my: 2 }} />

        {items.map((item, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            mb={1}
          >
            <Box>
              <Typography variant="body2">{item.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {item.date}
              </Typography>
            </Box>
            <Typography fontWeight="bold">${item.amount}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
