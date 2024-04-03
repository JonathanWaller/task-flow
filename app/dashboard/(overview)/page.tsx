import { Suspense } from 'react';

import styles from '@/styles/Dashboard.module.css';
import { boardColumns } from '@/app/utils';
import { Column } from '@/app/types';

import CardColumn from '@/app/ui/dashboard/column';
// import { Card } from '@/app/ui/dashboard/cards';
// import CardWrapper from '@/app/ui/dashboard/cards';
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
// import { lusitana } from '@/app/ui/fonts';

// import { fetchLatestInvoices
//   // , fetchCardData 
// } from '@/app/lib/data';
// import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
 
export default async function Page() {
    // const latestInvoices = await fetchLatestInvoices();

    // const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices} = await fetchCardData();


  return (
    <main className={styles.main}>
      {/* <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}> */}
      <h1>
        Dashboardlll
      </h1>
      <div className={styles.columnsWrapper}>
        {
            boardColumns.map( (column: Column, index: number) => (
                <CardColumn
                    key={index}
                    category={column.category}
                    display = {column.display}
                />
            ))
        }

        {/* <CardColumn 

            category='Backlog'
        /> */}
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
        {/* <Suspense fallback={<CardsSkeleton /> } >
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={< LatestInvoicesSkeleton/>}>
        <LatestInvoices />
        </Suspense> */}
      </div>
    </main>
  );
}