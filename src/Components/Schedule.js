import React from "react";
import Header from "./Header";
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';


const Schedule = () => {
  return (
    <div className="Home">
      <Header />
      <div>
        <h2 class="trainsched">ALS1UTAH Training Schedule</h2>
      </div>
      <CalendarComponent id="calendar" />
    </div>
  );
};

export default Schedule;
