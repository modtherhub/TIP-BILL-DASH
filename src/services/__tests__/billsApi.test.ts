import { fetchBills } from "../billsApi";
import { saveBill } from "../billsApi";
import { describe, it, expect} from "vitest";

describe("fetchBills", () => {
  it("should return an array of bills", async () => {
    await saveBill({ bill: 10, people: 2, tipPercent: 10, perPerson: 5.5 });
    const bills = await fetchBills();
    expect(Array.isArray(bills)).toBe(true);
    expect(bills.length).toBeGreaterThan(0);
  });
});
