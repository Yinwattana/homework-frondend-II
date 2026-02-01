// import { columns, Payment } from "./columns"
// import { DataTable } from "./data-table"

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [ 
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "328ed52f",
//       amount: 200,
//       status: "processing",
//       email: "m@example.com",
//     },
//     {
//       id: "568ed52f",
//       amount: 300,
//       status: "success",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "328ed52f",
//       amount: 200,
//       status: "processing",
//       email: "m@example.com",
//     },
//     {
//       id: "568ed52f",
//       amount: 300,
//       status: "success",
//       email: "admin@example.com",
//     },
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "byId@example.com",
//     },
//     {
//       id: "328ed52f",
//       amount: 200,
//       status: "processing",
//       email: "somnang@example.com",
//     },
//     {
//       id: "568ed52f",
//       amount: 300,
//       status: "success",
//       email: "banana@example.com",
//     },
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "data@example.com",
//     },
//     {
//       id: "328ed52f",
//       amount: 200,
//       status: "processing",
//       email: "aplle@example.com",
//     },
//     {
//       id: "568ed52f",
//       amount: 300,
//       status: "success",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

// export default async function DemoPage() {
//   const data = await getData()

//   return (
//     <div className="container mx-auto py-10">
//       <DataTable columns={columns} data={data} />
//     </div>
//   )
// }

import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const rawData = await res.json();

  const statuses: Payment["status"][] = ["pending", "processing", "success", "failed"];

  return rawData.map((item: any, index: number) => ({
    id: item.id.toString(),
    amount: Math.floor(Math.random() * 5000), // Random prices
    // This picks a different status for every row dynamically
    status: statuses[index % statuses.length], 
    email: item.title.split(' ')[0] + "@example.com", // Dynamic emails from titles
  }));
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}