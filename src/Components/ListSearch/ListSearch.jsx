import React, { useState } from "react";
import "./listsearch.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const ListSearch = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.Destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="listSearch">
      <h1 className="listTitle">Search</h1>
      <div className="listItem">
        <label>Destination</label>
        <input type="text" placeholder={destination} />
      </div>
      <div className="listItem">
        <label>Chick-in Date</label>
        <span onClick={(e) => setOpenDate(!openDate)}>{`${format(
          date[0].startDate,
          "MM/dd/yyyy"
        )} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
        {openDate && (
          <DateRange
            onChange={(item) => setDate([item.selection])}
            ranges={date}
            minDate={new Date()}
          />
        )}
      </div>
      <div className="listItem">
        <label>Options</label>
        <div className="lsOptions">
          <div className="lsOptionItem">
            <span className="lsOptionText">
              Min price <small>(per night)</small> :
            </span>
            <input type="number" className="lsOptionInput" />
          </div>
          <div className="lsOptionItem">
            <span className="lsOptionText">
              Max price <small>(per night)</small> :
            </span>
            <input type="number" className="lsOptionInput" />
          </div>
          <div className="lsOptionItem">
            <span className="lsOptionText">Adult :</span>
            <input
              type="number"
              min={1}
              className="lsOptionInput"
              placeholder={options.adult}
            />
          </div>
          <div className="lsOptionItem">
            <span className="lsOptionText">Children :</span>
            <input
              type="number"
              min={0}
              className="lsOptionInput"
              placeholder={options.children}
            />
          </div>
          <div className="lsOptionItem">
            <span className="lsOptionText">Room :</span>
            <input
              type="number"
              min={1}
              className="lsOptionInput"
              placeholder={options.room}
            />
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default ListSearch;
