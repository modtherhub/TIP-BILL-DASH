export interface Stats {
  avg: number;
  max: number;
  min: number;
}

export function calculateTotals(bill: number, people: number, tipPercent: number) {
  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;
  const perPerson = total / people;

  return { tip, total, perPerson };
}

export function calculateStats(amounts: number[]): Stats {
  const validAmounts = amounts.filter((amt) => amt > 0);
  if (validAmounts.length === 0) return { avg: 0, max: 0, min: 0 };

  const total = validAmounts.reduce((acc, val) => acc + val, 0);
  const avg = total / validAmounts.length;
  const max = Math.max(...validAmounts);
  const min = Math.min(...validAmounts);
  return { avg, max, min };
}
