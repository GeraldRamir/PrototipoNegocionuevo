import type { HoursRow } from "@/data/site";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function toMinutes(time: string) {
  const [h = "0", m = "0"] = time.split(":");
  return Number(h) * 60 + Number(m);
}

function nowInZone(timeZone: string, date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";
  return {
    day: WEEKDAYS.indexOf(get("weekday")),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

export type OpeningStatus = {
  isOpen: boolean;
  /** Index into the hours array for today's row */
  todayRow: number;
  closesAt?: string;
  opensAt?: string;
};

export function getOpeningStatus(hours: readonly HoursRow[], timeZone: string, date = new Date()): OpeningStatus {
  const { day, minutes } = nowInZone(timeZone, date);
  const todayRow = hours.findIndex((row) => row.days.includes(day));
  const row = hours[todayRow];
  if (!row) return { isOpen: false, todayRow };

  const isOpen = minutes >= toMinutes(row.open) && minutes < toMinutes(row.close);
  return {
    isOpen,
    todayRow,
    closesAt: isOpen ? row.close : undefined,
    opensAt: !isOpen && minutes < toMinutes(row.open) ? row.open : undefined,
  };
}
