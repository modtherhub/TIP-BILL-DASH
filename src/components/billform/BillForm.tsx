import { useState, useCallback } from "react";
import { saveBill } from "../../services/billsApi";
import InputField from "./InputField";
import Button from "./Button";

interface BillFormProps {
  onSave: (perPerson: number) => void;
}

const ALERT_MESSAGE = "Please enter valid positive numbers!"
export const DEFAULT_BILL = 0;
export const DEFAULT_PEOPLE = 1;
export const DEFAULT_TIP_PERCENT = 10;

const BillForm: React.FC<BillFormProps> = ({ onSave }) => {
  const [bill, setBill] = useState<number>(DEFAULT_BILL);
  const [people, setPeople] = useState<number>(DEFAULT_PEOPLE);
  const [tipPercent, setTipPercent] = useState<number>(DEFAULT_TIP_PERCENT);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (bill <= 0 || people <= 0 || tipPercent < 0) {
        alert(ALERT_MESSAGE);
        return;
      }

      const perPerson = (bill + bill * (tipPercent / 100)) / people;
      await saveBill({ bill, people, tipPercent, perPerson });
      onSave(perPerson);
    },
    [bill, people, tipPercent, onSave]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-md space-y-4"
    >
      <div className="space-y-4">
        <InputField label="Bill amount" value={bill} onChange={setBill} placeholder="Enter bill amount" />
        <InputField label="Number of people" value={people} onChange={setPeople} placeholder="Enter number of people" />
        <InputField label="Tip %" value={tipPercent} onChange={setTipPercent} placeholder="Enter tip percentage" />
      </div>

      <Button type="submit">Calculate & Save</Button>
    </form>
  );
};

export default BillForm;
