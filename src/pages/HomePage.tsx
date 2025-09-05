import { useState } from "react";
import BillForm from "../components/billform/BillForm";
import BillSummary from "../components/BillSummary";
import HistoryTable from "../components/HistoryTable";

const HomePage: React.FC = () => {
  const [amounts, setAmounts] = useState<number[]>([]);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Tip & Bill Calculator
      </h1>
      <BillForm onSave={(perPerson) => setAmounts((prev) => [...prev, perPerson])} />
      <BillSummary amounts={amounts} />
      <HistoryTable />
    </div>
  );
};

export default HomePage;
