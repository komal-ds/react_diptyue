import * as React from "react";
import FilterAwesome from "../locatorPage/Filter";
import { FilterSearch, VerticalResults, ResultsCount, Pagination, LocationBias, NumericalFacets, NumericalFacetsProps, StandardFacets, StandardFacetsProps } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import { useSearchState, Result } from "@yext/search-headless-react";
import { useSearchActions } from "@yext/search-headless-react";
import { useEffect, useState } from 'react';
import { AnswerExperienceConfig, googleMapsConfig } from "..//../config/globalConfig";
import herobanner from "../../images/hero-banner.jpg";
import Geocode from "react-geocode";
const Herobanner = () => {
  const searchActions = useSearchActions();
  const [centerLatitude, setCenterLatitude] = useState(googleMapsConfig.centerLatitude);
  const [centerLongitude, setCenterLongitude] = useState(googleMapsConfig.centerLongitude);
  const [inputvalue,setInputValue]= useState('');

  
  useEffect(() => {
    let searchKey = document.getElementsByClassName('FilterSearchInput');
    searchKey[0].addEventListener("keydown", function (e) {
      if (e.key == "Enter") {
        searchActions.setVertical(AnswerExperienceConfig.verticalKey);
        searchActions.setQuery(searchKey[0].value);
        searchActions.executeVerticalQuery();
      }
    })
    searchKey[0].addEventListener("keydown", function (e) {
      if (searchKey[0].value == "") {
        searchActions.setVertical(AnswerExperienceConfig.verticalKey);
        searchActions.setQuery("");
        searchActions.executeVerticalQuery();
      }
    })

    searchKey[0].addEventListener("keyup", function (e) {
      if (searchKey[0].value == "") {
        searchActions.setVertical(AnswerExperienceConfig.verticalKey);
        searchActions.setQuery("");
        searchActions.executeVerticalQuery();
      }
    })

  }, []);
  // useEffect(() => {
  //   searchActions.setVertical(AnswerExperienceConfig.verticalKey);
  //   searchActions.setVerticalLimit(10);
  //   searchActions.executeVerticalQuery();
  // }, []);

  // const getUsersLocation = () => {
  //   if (navigator.geolocation) {

  //     const error = (error: any) => {
  //       if (error.code == 1) {
  //         setCenterLatitude(googleMapsConfig.centerLatitude);
  //         setCenterLongitude(googleMapsConfig.centerLongitude);
  //         searchActions.setVertical(AnswerExperienceConfig.verticalKey);
  //         searchActions.setQuery('NEAR_ME');
  //         searchActions.executeVerticalQuery();
  //       } else {
  //         setCenterLatitude(googleMapsConfig.centerLatitude);
  //         setCenterLongitude(googleMapsConfig.centerLongitude);
  //         searchActions.setVertical(AnswerExperienceConfig.verticalKey);
  //         searchActions.setQuery('NEAR_ME');
  //         searchActions.executeVerticalQuery();
  //       }
  //     }

  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       searchActions.setUserLocation({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //       setCenterLatitude(position.coords.latitude);
  //       setCenterLongitude(position.coords.longitude);
  //       searchActions.setVertical(AnswerExperienceConfig.verticalKey);
  //       searchActions.setQuery('NEAR_ME');
  //       searchActions.executeVerticalQuery();

  //     }, error, {
  //       timeout: 10000,
  //     });

  //   }
  // }


  // const getUsersLocation = () => {
  //   if (navigator.geolocation) {

  //     const error = (error: any) => {
  //       if (error.code == 1) {
          
  //       } else {
          
  //       }
  //     }
  //     navigator.geolocation.getCurrentPosition(function (position) {

  //     Geocode.setApiKey("AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18");
  //     Geocode.fromLatLng(position.coords.latitude,position.coords.longitude).then(
  //       (response:any) => {
  //         if (response.results[0]) {           
  //           setInputValue(response.results[0].formatted_address);
  //       }
  //     },
  //       (error:any) => {
  //         console.error(error);
  //       }
  //     );

  //       searchActions.setUserLocation({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
        
  //       setCenterLatitude(position.coords.latitude);
  //       setCenterLongitude(position.coords.longitude);
  //       searchActions.setVertical(AnswerExperienceConfig.verticalKey);
  //       searchActions.setQuery('');
  //       searchActions.executeVerticalQuery();

  //     }, error, {
  //       timeout: 10000,
  //     });

  //   }
  // }

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
              setTimeout(function (){
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
      (error:any) => {
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
      {/* <div className="header-title hero-banner "> */}

        {/* <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} >
          <StandardFacets />
        </Modal> */}
        {/* <h4> Find a Diptyque store </h4>
        <p> We have over 200 stores nationwide, pop in or make an appointment </p> */}
{/* {inputvalue} */}
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
                // {
                //   entityType: "location",
                //   fieldApiName: "builtin.location",
                // },
              ]}


            />
       
                      {/* <span className="text-[#eb0000]  text-lg">{inputvalue}</span> */}
            <button
              className="cus_btn search-submit"
              aria-label="Search bar icon"
              id="search-location-button" onClick={Findinput}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg></button>


          </div>
        
          <div className="flex justify-between px-6 ">
            {/* <button className="current-location hide-mob" onClick={openModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17.005" viewBox="0 0 17 17.005">
                <path id="filter" d="M19.056,4.889h-1.1a2.834,2.834,0,0,0-5.346,0H3.944a.944.944,0,0,0,0,1.889h8.661a2.834,2.834,0,0,0,5.346,0h1.1a.944.944,0,0,0,0-1.889ZM15.278,6.778a.944.944,0,1,0-.944-.944A.944.944,0,0,0,15.278,6.778ZM3,11.5a.944.944,0,0,1,.944-.944H5.049a2.834,2.834,0,0,1,5.346,0h8.661a.944.944,0,1,1,0,1.889H10.4a2.834,2.834,0,0,1-5.346,0H3.944A.944.944,0,0,1,3,11.5Zm4.722.944a.944.944,0,1,0-.944-.944A.944.944,0,0,0,7.722,12.444ZM3.944,16.222a.944.944,0,0,0,0,1.889h8.661a2.834,2.834,0,0,0,5.346,0h1.1a.944.944,0,0,0,0-1.889h-1.1a2.834,2.834,0,0,0-5.346,0Zm12.278.944a.944.944,0,1,1-.944-.944A.944.944,0,0,1,16.222,17.167Z" transform="translate(-3 -2.998)" fill="#f089b1" fill-rule="evenodd" />
              </svg>
              Filters</button> */}
              <FilterAwesome></FilterAwesome>
            <button className="current-location hide-mob" title="Search using your current location!" id="useLocation" onClick={getUsersLocation}>

              <svg xmlns="http://www.w3.org/2000/svg" width="17.036" height="17.036" viewBox="0 0 17.036 17.036">
                <path id="location_" data-name="location " d="M10.018,6.921a3.1,3.1,0,1,0,3.1,3.1A3.1,3.1,0,0,0,10.018,6.921Zm6.923,2.323A6.965,6.965,0,0,0,10.792,3.1V1.5H9.244V3.1A6.965,6.965,0,0,0,3.1,9.244H1.5v1.549H3.1a6.965,6.965,0,0,0,6.148,6.148v1.6h1.549v-1.6a6.965,6.965,0,0,0,6.148-6.148h1.6V9.244Zm-6.923,6.195a5.421,5.421,0,1,1,5.421-5.421A5.417,5.417,0,0,1,10.018,15.439Z" transform="translate(-1.5 -1.5)" fill="#f089b1" />
              </svg>

              Use My Location </button>
            
          </div>
        


          

        </div>
      {/* </div> */}
    </>
  )
}
export default Herobanner;