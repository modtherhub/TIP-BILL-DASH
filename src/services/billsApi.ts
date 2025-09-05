export type BillRecord = {
  id: number;
  bill: number;
  people: number;
  tipPercent: number;
  perPerson: number;
};

let history: BillRecord[] = [];
let idCounter = 1;

export async function fetchBills() {
  return new Promise<BillRecord[]>((resolve) => {
    setTimeout(() => resolve(history), 500);
  });
}

export async function saveBill(record: Omit<BillRecord, "id">) {
  return new Promise<BillRecord>((resolve) => {
    setTimeout(() => {
      const newRecord: BillRecord = { id: idCounter++, ...record };
      history.push(newRecord);
      resolve(newRecord);
    }, 500);
  });
}
