import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./(cards)/month-revenue";
import { MonthOrdersAmountCard } from "./(cards)/month-orders-amount";
import { DaysOrdersAmountCard } from "./(cards)/day-orders-amount";
import { MonthCanceledOrdersAmountCard } from "./(cards)/month-canceled-orders-amount";

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Login" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DaysOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  );
};
