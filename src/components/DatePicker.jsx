import { useState } from "react";

// Imgs
import calendarIcon from "../assets/icons/dashboard-icons/calendar.svg";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateClick = () => {
    document.getElementById("dateInput").showPicker();
  };

  return (
    <div
      onClick={handleDateClick}
      className="flex items-center border border-gray-300 rounded p-1 cursor-pointer"
    >
      <button className="px-2">
        <img className="h-6" src={calendarIcon} alt="calendar icon" />
      </button>
      <input
        type="date"
        id="dateInput"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{
          visibility: "hidden",
          position: "absolute",
        }}
      />
    </div>
  );
};

export default DatePicker;
