
import * as React from "react";
import bannerImage from "../../images/banner.png";
import { Link } from "@yext/pages/components";
export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};
type props = {
  Name: any;
  TagLine:any;
  BackgroundImage: any;
  template: any;
};
type Banner = {
  name?: string;
  address?: Address;
  openTime?: string;
  children?: React.ReactNode;
};

const Banner = (Data: props) => {
  const conversionDetails_primaryCTA = {
    cid: "dc6937a6-345d-4c0f-b63f-79be3c29d7bc",
    cv: "3",
  };
  console.log(Data,"data")
  console.log(Data.BackgroundImage.url,"photos")
  return (
    <>
      <div className="hero">
        <img
          className="hero-img"
        
            src={Data.template == "location" ? Data.BackgroundImage : bannerImage}
    
          alt="banner"
        />
        <div className="container mx-auto text-center">
          <h1>{Data.Name ? Data.Name : ""}</h1>
          <h2>{Data.TagLine ? Data.TagLine : ""}</h2>

        </div>
      </div>
    </>
  );
};

export default Banner;

