import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import Hours from '..//../components/commons/hours';
import Address from "..//../components/commons/Address";
import phone from "..//../images/phone.svg";
import GetDirection from "../commons/GetDirection";
import addressicon from "../../images/marker.svg";
import watch from "../../images/watch.svg";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import OpenCloseStatus from "..//../components/commons/OpenCloseStatus";
import OpenClose from "../commons/openClose";
import { Link } from "@yext/pages/components";
const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}

const LocationCard: CardComponent<Location> = ({ result }) => {

  const { address, hours,additionalHoursText, mainPhone, timezone,c_heading } = result.rawData;
  const formattedPhone = formatPhoneNumber(mainPhone);

  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
    } else {
      setTimeStatus("");
    }
  }
  
  var url = "";
                var name: any = result.rawData.name.toLowerCase();
                var string: any = name.toString();
                let removeSpecialCharacters = string.replace(
                  /[&\/\\#^+()$~%.'":*?<>{}!@]/g,
                  "");
                let results: any = removeSpecialCharacters.replaceAll(" ", "-");
                if (!result.rawData.slug) {
                  url = `${result.id}-${results}.html`;
                } else {
                  url = `${result.rawData.slug.toString()}.html`;
                }

  return ( 
    <div className={`location result  onhighLight`} id={`result-${result.index}`}>
     <div className="relative w-full">
        <h2><a href={`${url}`}>{result.rawData.name}</a></h2>
        <div className="miles"><span className="icon"><img src={addressicon} alt="" /></span> {metersToMiles(result.distance ?? 0)} mi</div>
      </div>

      {/* <p className="text-sm text-slate-700">{address.line1}</p>
      <p className="text-sm text-slate-700">{address.city}, {address.region}, {address.postalCode} </p> */}             

      <div className="location-info onhighLight">
        <div className="icon-row onhighLight"><Address address={address} /> </div>
        {mainPhone?
        <div className="icon-row"> <span className="icon">
          <img src={phone} /></span>
          <a href={"tel:"+mainPhone}>{formattedPhone} </a>
          </div>:""}
        <div className="open-close onhighLight">

          <div className="hours-sec ">
            <div className="OpenCloseStatus ">
              <div className="hours-labels icon-row">
                <span className="icon"><img src={watch}></img></span>
                <a className={timeStatus} href="javascript:void(0);" onClick={onOpenHide} >
                  <OpenClose timezone={timezone} hours={hours} deliveryHours={hours}></OpenClose></a>
                <svg onClick={onOpenHide} icon-row xmlns="http://www.w3.org/2000/svg" width="9.585" height="4.793" viewBox="0 0 9.585 4.793">
                  <path id="hrd-drop" d="M9,13.5l4.793,4.793L18.585,13.5Z" transform="translate(-9 -13.5)" fill="#00363f"></path>
                </svg>

              </div>
              <div className={timeStatus + " daylist"} >
                <Hours key={result.rawData.id} hours={hours} additionalHoursText={additionalHoursText}/></div>
            </div>

          </div> </div>
      </div>

      <div className="store-link">
        {/* <a className="button primary-button w-100 px-i" data-type="book" data-restaurantid=""> </a> */}
        {/* <GetDirection></GetDirection> */}
        {/* <GetDirection latitude={result.rawData.yextDisplayCoordinate?.latitude} longitude={result.rawData.yextDisplayCoordinate?.longitude} /> */}

        {result.rawData.displayCoordinate ?
          <GetDirection label="View on Map" buttonText="Direction" address={address} latitude={result.rawData.displayCoordinate?.latitude} longitude={result.rawData.displayCoordinate?.longitude} />
          : <GetDirection label="View on Map" address={address} buttonText="Direction" latitude={result.rawData.yextDisplayCoordinate?.latitude} longitude={result.rawData.yextDisplayCoordinate?.longitude} />}
        {/* <button onClick={getDirectionUrl} >getlocation</button> */}
       {/* {result.rawData.c_heading.viewDetails? */}
        <a className="consulation" href={`${url}`}>
          {/* {result.rawData.c_heading.viewDetails} */}View Store Details
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path id="Icon_ionic-md-arrow-forward" data-name="Icon ionic-md-arrow-forward" d="M5.977,14.977h12.15l-5.6,5.6,1.45,1.4,8-8-8-8-1.4,1.4,5.55,5.6H5.977Z" transform="translate(-5.977 -5.977)"></path>
          </svg>
          </a>
          {/* :"view details"} */}
      </div>
    </div >
  );
}

export default LocationCard;