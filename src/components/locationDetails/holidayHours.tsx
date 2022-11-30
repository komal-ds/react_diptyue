import * as React from "react";
/**
 * Create HolidayHour for holiday feild
 * @param props
 * @returns html for holiday hours feild
 */

 const Holidayhour = (props: any) => {
    return (
      <>
        {props.hours.map((res: any, index: Number) => {
          const weeks = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
  
          const d = new Date(res.date);
          let day = d.getDay();
          return (
            <>

              <div className="pop-up-holyhrs">
                <div>{res.date}</div>         
                <div>{weeks[day]}</div>      
                {res.openIntervals.map((openinterval: any, index: Number) => {
                  return (
                    <>
                     <div>  
                      <span className="op-time">
                        {openinterval.start}
                      </span>{" "}
                     <span className="spac-bx"> - </span> 
                      {" "}
                      <span className="cl-time">
                        {openinterval.end}
                      </span>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
  
      </>
    );
  };
  export default Holidayhour;