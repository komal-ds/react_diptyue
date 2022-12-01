import * as React from "react";
import FilterAwesome from "../locatorPage/Filter";
import { FilterSearch } from "@yext/search-ui-react";
import { useSearchActions } from "@yext/search-headless-react";
import { useEffect, useState } from 'react';
import { AnswerExperienceConfig, googleMapsConfig } from "..//../config/globalConfig";
import Geocode from "react-geocode";
import { usemylocation_icon } from "../../../site-global/global";
// import { Staticdata } from "../../types/constants";

const Herobanner = () => {
  const searchActions = useSearchActions();
  const [centerLatitude, setCenterLatitude] = useState(googleMapsConfig.centerLatitude);
  const [centerLongitude, setCenterLongitude] = useState(googleMapsConfig.centerLongitude);
  const [inputvalue, setInputValue] = useState('');


  useEffect(() => {
    let searchKey = document.getElementsByClassName('FilterSearchInput');
    searchKey[0].addEventListener("keydown", function (e) {
      if (e.key == "Enter") {
        searchActions.setVertical(AnswerExperienceConfig.verticalKey);
        searchActions.setQuery(searchKey[0].value);
        searchActions.executeVerticalQuery();
      }
    })
    searchKey[0].addEventListener("keydown", function () {
      if (searchKey[0].value == "") {
        searchActions.setVertical(AnswerExperienceConfig.verticalKey);
        searchActions.setQuery("");
        searchActions.executeVerticalQuery();
      }
    })

    searchKey[0].addEventListener("keyup", function () {
      if (searchKey[0].value == "") {
        searchActions.setVertical(AnswerExperienceConfig.verticalKey);
        searchActions.setQuery("");
        searchActions.executeVerticalQuery();
      }
    })

  }, []);


  const getUsersLocation = () => {
    if (navigator.geolocation) {
      const error = (error: any) => {
        if (error.code == 1) {
          setInputValue('Please allow your Location');
        } else {
          setInputValue('Please allow your Location');
        }
      }
      navigator.geolocation.getCurrentPosition(function (position) {
        Geocode.setApiKey(googleMapsConfig.googleMapsApiKey);
        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
          (response: any) => {
            if (response.results[0]) {
              setInputValue(response.results[0].formatted_address);
              setTimeout(function () {
                document.getElementsByClassName('FilterSearchInput')[0].setAttribute("value", response.results[0].formatted_address);
              }, 1000);
              searchActions.setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
              setCenterLatitude(position.coords.latitude);
              setCenterLongitude(position.coords.longitude);
              searchActions.setVertical(AnswerExperienceConfig.verticalKey);
              searchActions.setQuery('');
              searchActions.executeVerticalQuery();
            }
          },
          (error: any) => {
            console.error(error);
          }
        );
      },
        error, {
        timeout: 10000,
      });
    }
  }



  const Findinput = () => {
    let searchKey = document.getElementsByClassName('FilterSearchInput');
    searchActions.setVertical(AnswerExperienceConfig.verticalKey);
    searchActions.setQuery(searchKey[0].value);
    searchActions.executeVerticalQuery();
  }

  return (
    <>
      <div className="locator-find-block pb-5">
        <div className="search-form">
          <FilterSearch
            customCssClasses={{
              filterSearchContainer: "m-2",
              inputElement: "FilterSearchInput",
            }}
            searchOnSelect={true}
            searchFields={[
              {
                entityType: "location",
                fieldApiName: "name",

              },
              {
                entityType: "location",
                fieldApiName: "address.line1",

              },
              {
                entityType: "location",
                fieldApiName: "address.line2",

              },
              {
                entityType: "location",
                fieldApiName: "address.city",

              },
              {
                entityType: "location",
                fieldApiName: "address.region",

              },
              {
                entityType: "location",
                fieldApiName: "address.postalCode",

              },
              {
                entityType: "location",
                fieldApiName: "builtin.location",
              },
              {
                entityType: "location",
                fieldApiName: "builtin.countryCode",
              },
            ]}


          />


          <button
            className="cus_btn search-submit"
            aria-label="Search bar icon"
            id="search-location-button" onClick={Findinput}>
            <div dangerouslySetInnerHTML={{__html: usemylocation_icon}}/><div/>
          </button>
        </div>

        <div className="flex justify-between px-6 ">
          {/* <FilterAwesome></FilterAwesome> */}
          <button className="current-location hide-mob" title="Search using your current location!" id="useLocation" onClick={getUsersLocation}>
            {/* {svgIcons.usemylocationicon} */}
           Use my location</button>
        </div>
      </div>

    </>
  )
}
export default Herobanner;