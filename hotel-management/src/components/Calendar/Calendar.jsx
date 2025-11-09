// components/Calendar/Calendar.jsx
import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar({ onDateSelect, minDate }) {
  const [value, setValue] = React.useState(dayjs());
      
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          if (onDateSelect) onDateSelect(newValue);
        }}
       
        
        minDate={minDate || dayjs()} // 🔥 disable all dates before today
        // shouldDisableDate={(date) => date.day() === 0 || date.day() === 6}
        sx={{
          boxShadow: 8,
          backdropFilter: "blur(4px)",
          background:
            "linear-gradient(to bottom right, rgba(156,163,175,0.3), rgba(17,24,39,0.1))",
          borderRadius: 2,
          p: 1.5,
        }}
      />
    </LocalizationProvider>
  );
}
