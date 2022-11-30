import { useSearchActions } from "@yext/search-headless-react";
import { useEffect, useState } from 'react';
import * as React from "react";
import { FilterSearch, VerticalResults, ResultsCount, Pagination, LocationBias, NumericalFacets, NumericalFacetsProps, StandardFacets, StandardFacetsProps } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import LocationCard from "./LocationCard";
import { GoogleMaps } from "./GoogleMaps";
import { useSearchState, Result } from "@yext/search-headless-react";
import Modal from 'react-modal';
import { AnswerExperienceConfig, googleMapsConfig, limit } from "..//../config/globalConfig";
import Herobanner from "../commons/Herobanner";
import 'react-perfect-scrollbar/dist/css/styles.css';
import Geocode from "react-geocode";
import PerfectScrollbar from 'react-perfect-scrollbar';
import useFetchResults from "../../hooks/useFetchResults";
import CustomFacets from "../CustomFacets";

const SearchLayout = (): JSX.Element => {

  const searchActions = useSearchActions();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [centerLatitude, setCenterLatitude] = useState(googleMapsConfig.centerLatitude);
  const [centerLongitude, setCenterLongitude] = useState(googleMapsConfig.centerLongitude);
  const [inputvalue, setInputValue] = useState('');
  const [check, setCheck] = useState(false);
  const [optionclick, setOptionClick] = useState(true);
  var searchKey: any;
  let onLoad = true;
  // useEffect(() => {
  //   searchActions.setVertical(AnswerExperienceConfig.verticalKey);
  //   searchActions.setVerticalLimit(3);
  //   searchActions.executeVerticalQuery();
  // }, []);

  // useEffect(() => {
  //   let searchKey = document.getElementsByClassName('FilterSearchInput');
  //   searchKey[0].addEventListener("keydown", function (e) {
  //     if (e.key == "Enter") {
  //       searchActions.setVertical(AnswerExperienceConfig.verticalKey);
  //       searchActions.setQuery(searchKey[0].value);
  //       searchActions.executeVerticalQuery();
  //     }
  //   })
  //   searchKey[0].addEventListener("keydown", function (e) {
  //     if (searchKey[0].value == "") {
  //       searchActions.setVertical(AnswerExperienceConfig.verticalKey);
  //       searchActions.setQuery("");
  //       searchActions.executeVerticalQuery();
  //     }
  //   })

  //   searchKey[0].addEventListener("keyup", function (e) {
  //     if (searchKey[0].value == "") {
  //       searchActions.setVertical(AnswerExperienceConfig.verticalKey);
  //       searchActions.setQuery("");
  //       searchActions.executeVerticalQuery();
  //     }
  //   })

  // }, []);
  useEffect(() => {
    if (onLoad) {
      onLoadData();
      onLoad = false;
    }
    // bindInputKeyup();
    // handleEnterPress();
    // optionClickHandler(); 
  }, []);

  const onLoadData = () => {

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function (position) {                
    //     searchActions.setUserLocation({
    //       latitude:position.coords.latitude,
    //       longitude:position.coords.longitude
    //     });
    //     setCenterLatitude(position.coords.latitude);
    //     setCenterLongitude(position.coords.longitude);
    //     searchActions.setVerticalLimit(limit);
    //     searchActions.executeVerticalQuery();
    //     }, function(error) {
    //       if (error.code == error.PERMISSION_DENIED){
    //       searchActions.setUserLocation({
    //         latitude:centerLatitude,
    //         longitude:centerLongitude
    //       });
    //       searchActions.setVerticalLimit(limit);
    //       searchActions.executeVerticalQuery();
    //     }

    //     });            
    // }

    searchActions.setUserLocation({
      latitude: centerLatitude,
      longitude: centerLongitude
    });
    searchActions.setVerticalLimit(limit);
    searchActions.executeVerticalQuery();
  }

  const bindInputKeyup = () => {
    searchKey = document.getElementsByClassName('FilterSearchInput');
    if (searchKey.length) {
      searchKey[0].addEventListener("keyup", function (e: any) {
        if (searchKey[0].value.trim() == "") {
          setOptionClick(true);
          searchActions.setUserLocation({
            latitude: centerLatitude,
            longitude: centerLongitude
          });
          searchActions.setVertical("locations")
          searchActions.setQuery("");
          searchActions.setVerticalLimit(limit);
          searchActions.executeVerticalQuery();
        }
      })
    }
  }
  const handleEnterPress = () => {
    let searchKey = document.getElementsByClassName('FilterSearchInput');
    searchKey[0].addEventListener("keydown", function (e: any) {
      if (e.key == "Enter") {
        console.log('Press enter')
        setOptionClick(false);
        setCheck(true);
        mapzoom = 16;
        getCoordinates(searchKey[0].value);
        document.querySelector('.z-10').classList.add('hidden');
      }
    })
  }

  const optionClickHandler = () => {

    document.body.addEventListener('click', function (e: any) {
      const isOptionClick = getParents(e.target)
      if (isOptionClick) {
        var text = "";
        if (e.target.children.length) {
          for (let index = 0; index < e.target.children.length; index++) {
            text += e.target.children[index].innerText;
          }
          if (text.trim() != "") {
            searchActions.setQuery("");
            searchActions.executeVerticalQuery();
            getCoordinates(text);
          }
        } else {
          text += e.target.innerText;
          if (text.trim() != "") {
            searchActions.setQuery("");
            searchActions.executeVerticalQuery();
            getCoordinates(text);
          }
        }
      }
    });
  }



  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  const Findinput = () => {
    let searchKey = document.getElementsByClassName('FilterSearchInput');

    setInputValue('');
    getCoordinates(searchKey[0].value);
  }


  // function getCoordinates(address: String) {
  //   fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + '&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18')
  //     .then(response => response.json())
  //     .then(data => {
  //       data.results.map((res: any) => {
  //         const userlatitude = res.geometry.location.lat;
  //         const userlongitude = res.geometry.location.lng;
  //         let params = {
  //           latitude: userlatitude,
  //           longitude: userlongitude
  //         };
  //         console.log(userlatitude, userlongitude)
  //         setCenterLatitude(userlatitude);
  //         setCenterLongitude(userlongitude);
  //         searchActions.setUserLocation(params);
  //         searchActions.setQuery(address);
  //         searchActions.executeVerticalQuery();

  //       })
  //     })
  // }

  //new
  function getCoordinates(address: String) {
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + '&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18')
      .then(response => response.json())
      .then(data => {
        if (data.status == "OK") {
          data.results.map((res: any) => {
            const userlatitude = res.geometry.location.lat;
            const userlongitude = res.geometry.location.lng;
            let params = { latitude: userlatitude, longitude: userlongitude };
            setCenterLatitude(userlatitude);
            setCenterLongitude(userlongitude);
            searchActions.setUserLocation(params);
            searchActions.setQuery(address);
            searchActions.executeVerticalQuery();
          })
        } else {
          console.log('OK');
          searchActions.setUserLocation({ latitude: centerLatitude, longitude: centerLongitude });
          searchActions.setQuery(address);
          searchActions.executeVerticalQuery();
        }

      })
  }
  const locationResults = useFetchResults() || [];

  const locationBias = useSearchState(s => s.location.locationBias);
  // console.log(locationBias);     
  const displayName = locationBias?.displayName;

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
  const getParents = (elem: any) => {
    while (elem.parentNode && elem.parentNode.nodeName.toLowerCase() != 'body') {
      elem = elem.parentNode;
      if (elem.classList.contains('options')) {
        return true;
      }
    }
    return false;
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  return (
    <>
      {/* <div className="header-title  "> */}

        <Herobanner ></Herobanner>
      {/* </div> */}
      {/* <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} >
        <StandardFacets />
      </Modal> */}
      <CustomFacets />
      <div className=" mx-auto px-9 w-full">
        <div className="breadcrumb">
          <div className="boxes">
            <ul>
              <li>
                <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="15.294" height="13" viewBox="0 0 15.294 13">
                  <path id="Icon_material-home" data-name="Icon material-home"
                    d="M9.118,17.5V12.912h3.059V17.5H16V11.382h2.294L10.647,4.5,3,11.382H5.294V17.5Z"
                    transform="translate(-3 -4.5)" fill="#3A356D" />
                </svg>Home</a>
              </li>
              {/* <li><img src={arrowforword} id=""/> </li> */}
              <li>Store Locator</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" mx-auto px-6 w-full xl:h-screen flex flex-col max-h-full xl:max-h-screen">
        <div className="row flex flex-row w-full h-full">
          <div className="left-block-locator">
            <div className="sticky top-0 z-0 bg-slate-50 border-b border-slate-300">

              <ResultsCount
                customCssClasses={{ resultsCountContainer: "mx-2 my-0" }}
              />
            </div>
            {/* <div className=" overflow-y-auto   min-h-[calc(100vh_-_200px)]  max-h-[calc(100vh_-_200px)]  ">  */}
            <PerfectScrollbar className="result-list">
              <div>
                {locationResults && locationResults.length > 0 ? (
                  <VerticalResults<Location>
                    displayAllOnNoResults={false}
                    customCssClasses={{
                      verticalResultsContainer:
                        "flex flex-col divide-y divide-slate-300 result-list-inner ",
                    }}
                    CardComponent={LocationCard}
                  />
                ) : (
                  <div className="p-4 bg-white">
                    <p>No Location found.</p>
                  </div>
                )
                }
                <Pagination /> 
                {/* <div className="pagination-bottom"> <Pagination /> </div> */}
                {/* </div> */}
              </div>
            </PerfectScrollbar>
          </div>
          <div className="right-block-locator">
            {/* <MapboxMap<Location>
                    mapboxAccessToken="pk.eyJ1IjoicmFodWxyYXRob3JlIiwiYSI6ImNsOGVoM2NycjFsMDYzbnFrdGlpbGE4djEifQ.IWRyhB7OIqpBdtUtj0ki_w"
                    getCoordinate={(location) =>
                    location.rawData.yextDisplayCoordinate}
                    PinComponent={MapPin}
                /> */}

            <GoogleMaps
              apiKey={googleMapsConfig.googleMapsApiKey}
              centerLatitude={centerLatitude}
              centerLongitude={centerLongitude}
              defaultZoom={6}
              showEmptyMap={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchLayout;