import { useMemo } from "react";
import { calculateStats } from "../utils/calculations";
import type { Stats } from "../utils/calculations";

interface BillSummaryProps {
  amounts: number[];
}

const NO_DATA_MESSAGE = "No data yet.";

const BillSummary: React.FC<BillSummaryProps> = ({ amounts }) => {
  const summary: Stats = useMemo(() => calculateStats(amounts), [amounts]);

  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-3">Summary</h2>
      {amounts.length === 0 ? (
        <p className="text-gray-500">{NO_DATA_MESSAGE}</p>
      ) : (
        <ul className="space-y-2">
          <li>Average per person: <strong>${summary.avg.toFixed(2)}</strong></li>
          <li>Highest payment: <strong>${summary.max.toFixed(2)}</strong></li>
          <li>Lowest payment: <strong>${summary.min.toFixed(2)}</strong></li>
        </ul>
      )}
    </div>
  );
};

export default BillSummary;
