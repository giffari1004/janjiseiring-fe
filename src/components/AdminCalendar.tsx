"use client";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { id } from "date-fns/locale"; // Untuk Bahasa Indonesia
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  id: id,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Nanti kamu panggil <Calendar localizer={localizer} ... /> di dalam komponen.
