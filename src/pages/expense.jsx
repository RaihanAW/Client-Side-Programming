
import { useEffect, useState } from "react";
import { Grid, Typography, CircularProgress, Box } from "@mui/material";
import ExpenseComparisonCard from "../components/Fragments/ExpenseComparisonCard";
import { expensesService } from "../services/dataService";
import Icon from "../components/Elements/Icon";
import MainLayout from "../components/Layouts/MainLayout";


export default function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await expensesService();
        console.log("API EXPENSES:", data);
        setExpenses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  const groupedExpenses = expenses.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = { total: 0, items: [] };
    }

    acc[item.category].total += item.amount;
    acc[item.category].items.push({
      name: item.title,
      amount: item.amount,
      date: item.date,
    });

    return acc;
  }, {});

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <MainLayout>
        <Typography variant="h6" mb={3}>
          Expenses Comparison
        </Typography>

        <Grid container spacing={3}>
          {Object.entries(groupedExpenses).map(([category, data]) => (
            <Grid item xs={12} md={4} key={category}>
              <ExpenseComparisonCard
                title={category}
                amount={data.total}
                items={data.items}
                icon={<Icon.Expense />}
              />
            </Grid>
          ))}
        </Grid>
      </MainLayout>
    </>
  );
}
