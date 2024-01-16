import { Helmet } from 'react-helmet-async'

import { DaysOrdersAmountCard } from './(cards)/day-orders-amount'
import { MonthCanceledOrdersAmountCard } from './(cards)/month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './(cards)/month-orders-amount'
import { MonthRevenueCard } from './(cards)/month-revenue'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Início" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DaysOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
