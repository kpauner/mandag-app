type RecurringType = {
  label: string;
  value: string;
};

export const RECURRING_TYPES: Record<string, RecurringType> = {
  MONDAY: {
    label: "Monday",
    value: "monday",
  },
  TUESDAY: {
    label: "Tuesday",
    value: "tuesday",
  },
  WEDNESDAY: {
    label: "Wednesday",
    value: "wednesday",
  },
  THURSDAY: {
    label: "Thursday",
    value: "thursday",
  },
  FRIDAY: {
    label: "Friday",
    value: "friday",
  },
  SATURDAY: {
    label: "Saturday",
    value: "saturday",
  },
  SUNDAY: {
    label: "Sunday",
    value: "sunday",
  },
  LAST_DAY_OF_MONTH: {
    label: "Last day of month",
    value: "lastDayOfMonth",
  },
} as const;
