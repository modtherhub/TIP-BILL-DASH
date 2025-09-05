import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBills } from "../services/billsApi";
import type { BillRecord } from "../services/billsApi";

const HistoryTable: React.FC = () => {
  const { data, isLoading } = useQuery<BillRecord[]>({
    queryKey: ["bills"],
    queryFn: fetchBills,
  });

  if (isLoading) return <p>Loading...</p>;
  if (!data || data.length === 0) return <p>No history found.</p>;

  return (
    <div className="mt-6 bg-white shadow-md rounded-xl p-4">
      <h2 className="text-lg font-bold mb-3">History</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Bill</th>
            <th className="p-2">People</th>
            <th className="p-2">Tip %</th>
            <th className="p-2">Per Person</th>
          </tr>
        </thead>
        <tbody>
          {data.map((bill) => (
            <tr key={bill.id} className="border-b">
              <td className="p-2">${bill.bill}</td>
              <td className="p-2">{bill.people}</td>
              <td className="p-2">{bill.tipPercent}%</td>
              <td className="p-2">${bill.perPerson.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
