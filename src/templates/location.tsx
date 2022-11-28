
import LocationInformation from "../components/locationDetails/LocationInformation";
import * as React from "react";
import { useState, useEffect } from 'react';
import Banner from "../components/locationDetails/banner";
import { JsonLd } from "react-schemaorg";
import Cta from "../components/commons/cta";
import BreadCrumbs from "../components/layouts/BreadCrumbs";
import { fetch } from "@yext/pages/util";
import { AnalyticsProvider, Link } from "@yext/pages/components";
import Header from "../components/layouts/header";
import About from "../components/locationDetails/about";
import NearByLocation from "../components/locationDetails/NearByLocation";
import favicon from "../images/favicon.png"
import { nearByLocation } from "../types/nearByLocation";
import Productcategory from "../components/locationDetails/Productcategores";
import Faqs from "../components/locationDetails/Faqs";
import OpenClose from "../components/commons/openClose";
import TrustBoxContainer from "../components/locationDetails/Trust";
import Aboutbanner from "../components/locationDetails/aboutbanner";
import "../index.css";
import {
  radius,
  api_base_url,
  liveAPIKey,
  savedFilterId,
  entityTypes,
  limit,
  stagingBaseUrl,
  icon,
} from "../types/constants";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import Footer from "../components/layouts/footer";
import Service from "../components/locationDetails/service";
import Opening from "../components/commons/openClose";
import Example from "../components/locationDetails/Example";
import OpenCloseStatus from "../components/commons/OpenCloseStatus";
import Featurecategory from "../components/locationDetails/Featureproduct";
import Brand from "../components/locationDetails/Brand";
import PhotoSlider from "../components/locationDetails/PhotoSlider";
import PhotoGallery from "../components/locationDetails/PhotoGallery";
// import bannerImage from "../../images/banner.png";
import bannerImage from "../images/banner.png";
// import tabbingabout from "../components/locationDetails/tabbingabout";
import Examples from "../components/locationDetails/tabbingabout";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "Diptyque",

    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "yextDisplayCoordinate",
      "neighborhood",
      "photoGallery",
      "description",
      "hours",
      // "c_booking",
      "deliveryHours",
      "slug",
      // "c_aboutStoreDatas",
      // "c_Diptyqueervices",
      // "c_decsec",
      "geocodedCoordinate",
      // "c_bannerimage",
      // "c_Diptyque_icons",
      // "c_Diptyquelink",
      // "c_footerlinks",
      // "c_footerlinks2",
      // "c_footerlinks3",
      // "c_footercondition",
      // "c_footerheading",
      // "c_footerdata",
      // "c_tagline",
      // "c_metaTags",
      // "dm_directoryParents.name",
      // "dm_directoryParents.slug",
      // "dm_directoryParents.meta.entityType",
      // "c_aboutdream",
      // "c_productcategore",
      // "c_featuredsproducts",
      // "c_shopdata",
      // "c_relatedfaqs.question",
      // "c_relatedfaqs.answer",
      // "c_relatedfaqs.c_ctabutton",
      // "c_brand",
      // "c_twittertags",
      // "c_ogtags",
      // "c_heading",
      // "c_ctabutton",
      // "additionalHoursText"

    ],

    filter: {
      entityTypes: ["location"],
      savedFilterIds: ["1100445776"]
    },

    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};


export const getPath: GetPath<TemplateProps> = ({ document }) => {


  //   let region_slug = "";
  //   let city_slug = "";
  //   if (document.address.region) {
  //     region_slug = document.address.region

  //       .toLowerCase()
  //       .replace(/ /g, "-")
  //       .replace(/[^\w-]+/g, "");
  //   }
  //   if (document.address.country) {
  //     city_slug = document.address.city
  //       .toLowerCase()
  //       .replace(/ /g, "-")
  //       .replace(/[^\w-]+/g, "");
  //   }

  //   let locationUrl = document.slug.toString() ;
  //   if (region_slug && city_slug) {
  //     locationUrl =
  //       // "/" +
  //       // city_slug +
  //       // "/" +
  //       // region_slug +
  //       "/" +
  //       document.slug.toString() ;
  //   } else {
  //     locationUrl = document.slug.toString()+".html";
  //   }
  // // console.log(locationUrl,"gergwertg");
  //   return locationUrl;
  // };
  // currentUrl = document.slug.toString() + ".html";
  // return document.slug.toString() + ".html";
  var url = "";
  var name: any = document.name.toLowerCase();
  var string: any = name.toString();
  let removeSpecialCharacters = string.replace(
    /[&\/\\#^+()$~%.'":*?<>{}!@]/g,
    "");
  let result: any = removeSpecialCharacters.replaceAll(" ", "-");
  if (!document.slug) {
    url = `${document.id}-${result}.html`;
  } else {
    url = `${document.slug.toString()}.html`;
  }

  return url;

};

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};


// export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
//   relativePrefixToRoot,
//   path,
//   document,

// }): HeadConfig => {
//   return {
//     title: document.name,
//     charset: "UTF-8",
//     viewport: "width=device-width, initial-scale=1",
//     tags: [
//       {
//         type: "link",
//         attributes: {
//           rel: "icon",
//           type: "image/x-icon",
//           href: favicon,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           description: "This site was generated by the Yext SSG",
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           name: "description",
//           content: `${document.c_metaTags.description ? document.c_metaTags.description : ""}`,
//         },
//       },

//       {
//         type: "meta",
//         attributes: {
//           name: "title",
//           content: `${document.c_metaTags.title ? document.c_metaTags.title : ""}`,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           name: "author",
//           content: `${document.c_metaTags.title ? document.c_metaTags.title : ""}`,
//         },
//       },

//       {
//         type: "meta",
//         attributes: {
//           name: "robots",
//           content: "noindex, nofollow",
//         },
//       },

//       {
//         type: "link",
//         attributes: {
//           rel: "canonical",
//           href:
//             `${document.c_metaTags.conanicalUrl ? document.c_metaTags.conanicalUrl : stagingBaseUrl +  document.slug + '.html'}`
//         },
//       },
//       // og tags

//       {
//         type: "meta",
//         attributes: {
//           property: "ogurl",
//           content: `${document.c_ogtags.ogurl ? document.c_ogtags.ogurl : stagingBaseUrl +  document.slug + '.html'}`,
//         },
//       },

//       {
//         type: "meta",
//         attributes: {
//           property: "ogdescription",
//           content: `${document.c_metaTags.description ? document.c_metaTags.description : ""}`,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           property: "ogtilte",
//           content: `${document.c_metaTags.title ? document.c_metaTags.title : ""}`,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           property: "ogphoto",
//           content: icon,
//         },
//       },
//       /// twitter tag
//       {
//         type: "meta",
//         attributes: {
//           property: "twitter:title",
//           content: `${document.c_metaTags.title ? document.c_metaTags.title : ""}`,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:card",
//           content: `${document.c_metaTags.title ? document.c_metaTags.title : ""}`,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:url",
//           content: `${document.c_twittertags.twitterurl ? document.c_twittertags.twitterurl : stagingBaseUrl +  document.slug + '.html'}`,
//         },
//       },

//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:description",
//           content: `${document.c_metaTags.description ? document.c_metaTags.description : ""}`,
//         },
//       },

//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:image",
//           content: icon,
//         },
//       },
//     ],
//   };
// };


type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {
  const url = `https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=500&location=${data.document.yextDisplayCoordinate.latitude},${data.document.yextDisplayCoordinate.longitude}&filter={}&api_key=6799219ca0628f2db461adf85417ecaa&v=20181201&resolvePlaceholders=true&entityTypes=location&limit=4&savedFilterIds=1100445776`
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()
  )) as nearByLocation;
  return { ...data, externalApiData };
};




//  type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
//  export const transformProps: TransformProps<ExternalApiData> = async (
//    data: any
//  ) => {
//    const url = `${api_base_url}entities/geosearch?radius=${radius}&location=${
//      data.document.yextDisplayCoordinate &&
//      data.document.yextDisplayCoordinate.latitude
//    },${
//      data.document.yextDisplayCoordinate &&
//      data.document.yextDisplayCoordinate.longitude
//    }&api_key=${liveAPIKey}&v=20181201&resolvePlaceholders=true&entityTypes=${entityTypes}&savedFilterId=${savedFilterId}&limit=${limit}&fields=googlePlaceId,slug,address,addressHidden,hours,name,geocodedCoordinate,isoRegionCode,localPhone,mainPhone,timezone,yextDisplayCoordinate,meta,timeZoneUtcOffset,what3WordsAddress,closed,distances`;
//    const externalApiData = (await fetch(url).then((res: any) =>
//      res.json()
//    )) as nearByLocation;
//    return { ...data, externalApiData };
//  };



type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  externalApiData,
  document,
  __meta,
}) => {
  const {
    _site,
    name,
    hours,
    address,
    mainPhone,
    yextDisplayCoordinate,
    dm_directoryParents,
    c_decsec,
    deliveryHours,
    // c_dreamaboutdata,
    // c_dreamfindstore,
    // c_dreamteam,
    c_booking,
    photoGallery,
    c_tagline,
    c_Diptyqueervices,
    slug,
    c_bannerimage,
    timezone,
    c_aboutdream,
    c_productcategore,
    c_featuredsproducts,
    c_shopdata,
    c_relatedfaqs,
    c_brand,
    c_heading,
    c_ctabutton,
    c_aboutStoreDatas,
    additionalHoursText




  } = document;
  let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme: any = [];


  if (hours) {
    for (var key in hours) {
      if (hours.hasOwnProperty(key)) {
        let openIntervalsSchema = "";
        if (key !== "holidayHours") {
          if (hours[key].isClosed) {
            openIntervalsSchema = {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: key,
            };
          } else {
            let end = "";
            let start = "";
            if (typeof hours[key].openIntervals != "undefined") {
              let openIntervals = hours[key].openIntervals;
              for (var o in openIntervals) {
                if (openIntervals.hasOwnProperty(o)) {
                  end = openIntervals[o].end;
                  start = openIntervals[o].start;
                }
              }
            }
            openIntervalsSchema = {
              "@type": "OpeningHoursSpecification",
              closes: end,
              dayOfWeek: key,
              opens: start,
            };
          }
        } else {
        }

        hoursSchema.push(openIntervalsSchema);
      }
    }
  }



  dm_directoryParents &&
    dm_directoryParents.map((i: any, index: any) => {
      if (index != 0) {
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id": `${stagingBaseUrl}/${i.slug}`,
            name: i.name,
          },
        });
      }
    });
  // var buttonLabel = c_booking.button.label ? c_booking.button.label : "Label" ;
  // var buttonLink = c_booking.button.link ? c_booking.button.link : "Link";
  // var ctaLabel   = c_booking.cta.label ? c_booking.cta.label : "CTA Label" ; 
  // var ctaLink = c_booking.cta.link ? c_booking.cta.link : "CTA Link"
  console.log(c_booking, 'externalApiData')
  console.log(c_shopdata, 'c_shopdata')
  return (
    <>
      {/* <JsonLd<Location>
        item={{
          "@context": "https://schema.org",
          "@type": "FurnitureStore",
          name: name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hoursSchema,
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          name: "Diptyque",
          itemListElement: breadcrumbScheme,
          // logo: document.logo.image.url,
        }}
      />
      {c_relatedfaqs ? (
        <>
          <JsonLd<FAQPage>
            item={{
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity:
                c_relatedfaqs &&
                c_relatedfaqs.map((i: any) => {
                  console.log(c_relatedfaqs, "new i")
                  return {
                    "@type": "Question",
                    name: i.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `<p>${i.answer}</p>`,
                    },
                  };
                }),
            }}
          />
        </>
      ) : (
        <></>
      )}

      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Diptyque",
          url: "https://www.Diptyque.co.uk/",
          logo: "https://www.Diptyque.co.uk/medias/Diptyque-logo.svg?context=bWFzdGVyfGltYWdlc3w3NzAzfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g3ZC9oMGIvODk0OTA3OTE0NjUyNi5zdmd8YzQ4NThlNDQ2OTZmMTNlMmQwOTc4NGUzZjZjYjNhNmY2NjE3ZThmYTAyZThmNjMwYmM5YTczZWMwMzZhMTE2MQ",
          address: {
            "@type": "PostalAddress",
            // streetAddress: address.line1,
            // addressLocality: address.city,
            // addressRegion: address.region,
            // postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "contact",
            telephone: "0800 652 6750",
            email: "customerservices@Diptyquebeds.co.uk"
          },
          sameAs: [
            "https://www.facebook.com/Diptyquebeds",
            "https://twitter.com/Diptyque_Beds",
            "https://www.pinterest.com/Diptyquebeds/",
            "https://www.instagram.com/Diptyque_beds/",
            "https://www.youtube.com/user/Diptyque"
          ],
        }}
      /> */}

      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={true}
        enableTrackingCookie={true}
      >
        {/* <PageLayout _site={_site}> */}
        <Header header={_site.c_header} />

        {/* <Banner name={name} address={address} openTime={openTime} /> */}
        {/* <BreadCrumbs
          name={name}
          parents={dm_directoryParents}
          baseUrl={relativePrefixToRoot}
          address={address}
        ></BreadCrumbs> */}
        <Banner
          Name={name}
          TagLine={c_tagline}
          // BackgroundImage={c_bannerimage}
          BackgroundImage={
            c_bannerimage ? c_bannerimage.url : bannerImage
          }
          template={"location"}
        />


        {/* <Opening timezone={timezone} hours={hours}></Opening> */}
        {/* <OpenCloseStatus ></OpenCloseStatus> */}

        {hours ? <>
          <div className="open-heading text-4xl"  >
            <OpenClose timezone={timezone} hours={hours} deliveryHours={hours}></OpenClose>
          </div></> : <></>

        }


        {/* <OpenCloseStatus timezone={timezone} hours={hours}></OpenCloseStatus> */}

        <LocationInformation
          prop={hours}
          deliveryHours={deliveryHours}
          coords={yextDisplayCoordinate}
          address={address}
          phone={mainPhone}
          service={c_Diptyqueervices}
          name={name}
          c_heading={c_heading}
          c_ctabutton={c_ctabutton}
          timezone={timezone}
          additionalHoursText={additionalHoursText}

        />
        <div>

        </div>

        {/* <TrustBoxContainer></TrustBoxContainer> */}


        {/* <>
          <About photoGallery={photoGallery} c_decsec={c_decsec} />
        </> */}

        {/* {c_booking.button.label && c_booking.button.link && c_booking.cta.label && c_booking.cta.link ? ( */}






        {/* 
        {(c_booking.button?.label && c_booking.button?.link) || (c_booking.cta?.label && c_booking.cta?.link) ? (
          <div className="bg-[#3a356d] text-center p-12 ">

            <>
              <h3 className="pb-4 text-white text-4xl text-semibold">{c_booking.title}</h3>

              {c_booking.button ? (
                <>
                  {c_booking.button.label && c_booking.button.link ? (
                    <>

                      <a href={c_booking.button.linkType == "URL" ? `${c_booking.button.link}` : `${c_booking.button.link}`} className="border-2 text-white bg-[#cbb081] border-[#cbb081] p-2"
                        target={c_booking.button.linkType == "URL" ? "_self" : c_booking.button.link == "#" ? "_self" : "_blank"} style={{ marginRight: '15px' }}>
                        {c_booking.button.label ? c_booking.button.label : ""}
                      </a>
                    </>
                  ) : (
                    <></>

                  )}
                </>
              ) : (
                ""
              )}

              {c_booking.cta ? (
                <>
                  {c_booking.cta.label && c_booking.cta.link ? (
                    <>

                      <a href={
                        c_booking.cta.linkType == "URL" ? `tel:${c_booking.cta.link}` : `tel:${c_booking.cta.link}`} className="border-2 text-white bg-[#cbb081] border-[#cbb081] p-2"
                        target={c_booking.cta.linkType == "URL" ? "_self" : c_booking.cta.link == "#" ? "_self" : "_blank"}>
                        {c_booking.cta.label ? c_booking.cta.label : ""}
                      </a>
                    </>
                  ) : (
                    <></>

                  )}
                </>
              ) : (
                <></>
              )}
            </>


          </div>
        ) : <></>} */}




        {/* ) : <></>} */}
        {/* <h2 className="pb-4 text-white text-4xl text-semibold">{c_booking.title}</h2>
        {c_booking.button.label && c_booking.button.link ? (
           <div className="bg-[#3a356d] text-center p-12 ">
             <h2 className="pb-4 text-white text-4xl text-semibold">{c_booking.title}</h2>
               <a  href={
                c_booking.button.linkType == "URL" ? `tel:${c_booking.button.link}` : c_booking.button.link} className="border-2 text-white bg-[#cbb081] border-[#cbb081] p-2"
                target={c_booking.button.linkType == "URL" ? "_self" : c_booking.button.link == "#" ? "_self" : "_blank"}>
                {c_booking.button ? c_booking.button.label : ""}
              </a>
            </div>
          ) : (
            <></>
          )} */}
        {/* <div className="">
          <div><a href="" target="_blank">{c_dreamaboutdata.text}</a></div>
          <div>{c_dreamfindstore.text}</div>
          <div>{c_dreamteam.text}</div>

          <div>
            <div>{c_dreamaboutdata.text}</div>
            <div>{c_dreamaboutdata.description}</div>
          </div>
          <div>
            <div>{c_dreamfindstore.text}</div>
            <div>{c_dreamfindstore.description}</div>
          </div>
          <div>
            <div>{c_dreamteam.text}</div>
            <div>{c_dreamteam.description}</div>
          </div>
        </div> */}
        {/* <Example prop={c_aboutdream} /> */}
        {/* <tabbingabout prop={c_aboutStoreDatas}></tabbingabout> */}
        {/* <Examples prop={c_aboutStoreDatas}></Examples> */}
        <div className="w-full text-center">
          {/* <h4 className="sec_heading font-bold">{c_heading.nearbyLocation}</h4> */}

          <NearByLocation
            prop={externalApiData}
            parents={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
            coords={yextDisplayCoordinate}
            slug={slug}
            service={c_Diptyqueervices}
            c_heading={c_heading}

          />
        </div>

        <div className="border-2 text-white text-center bg-[#cbb081] border-[#cbb081] p-2"> <a href="index.html">View all location</a>
        </div>

        {/* <div className="bg-[#3a356d] text-left p-12 ">
          <p className="pb-2 text-white text-xl text-semibold">{c_shopdata.textlistdata[0]}</p>

          <h4 className="pb-4 text-[#cbb081] text-3xl text-semibold">{c_shopdata.textlistdata[1]}</h4>
          <p className="pb-4 text-white text-xl text-semibold ">{c_shopdata.textlistdata[2]}</p> */}

        {/* {c_shopdata.cta ? (
            <>
            {
              c_shopdata.cta.label && c_shopdata.cta.link ? (
                <>

                  <a href={
                    c_shopdata.cta.linkType == "URL" ? `tel:${c_shopdata.cta.link}` : c_shopdata.cta.link} className="pb-4 text-right text-white text-2xl text-semibold popbtn"
                    target={c_shopdata.cta.linkType == "URL" ? "_self" : c_shopdata.cta.link == "#" ? "_self" : "_blank"}>
                    {c_shopdata.cta.label ? c_shopdata.cta.label : ""}
                  </a>


                </>
              ) : (
                <></>

              )
            }
            </>
            ):<></>} */}
        {/* {c_shopdata.cta? (
                     <>
                  {c_shopdata.cta.label && c_shopdata.cta.link ? (
                <>

              <a href={
                c_shopdata.cta.linkType == "URL" ? `${c_shopdata.cta.link}` : c_shopdata.cta.link} className="border-2 text-white bg-[#cbb081] border-[#cbb081] p-2"
                target={c_shopdata.cta.linkType == "URL" ? "_self" : c_shopdata.cta.link == "#" ? "_self" : "_blank"}>
                {c_shopdata.cta ? c_shopdata.cta.label : ""}
              </a>
              </>
              ) : (
             <></>

          )}
             </>
          ) : (
            <></>
          )} 


         
        </div> */}
        {/* <Aboutbanner c_shopdata={c_shopdata}></Aboutbanner> */}

        {/* <iframe  title="Customer reviews powered by Trustpilot" src="https://widget.trustpilot.com/trustboxes/539ad0ffdec7e10e686debd7/index.html?templateId=539ad0ffdec7e10e686debd7&amp;businessunitId=48fbed8e000064000503d585#locale=en-GB&amp;styleHeight=350px&amp;styleWidth=100%25&amp;theme=light&amp;stars=4%2C5&amp;reviewLanguages=en&amp;textColor=%233a356d"></iframe> */}

        {/* {c_productcategore ?
          <div className="w-full text-center">
            <h4 className="sec_heading font-bold">{c_heading.productCategories ? c_heading.productCategories : "Product categories"}</h4>
            <Productcategory prop={c_productcategore}></Productcategory>
          </div>
          : <></>}
        {c_brand ?
          <div className="w-full text-center">
            <h4 className="sec_heading  font-bold">{c_heading.brands ? c_heading.brands : "Brands"}</h4>
            <Brand prop={c_brand}></Brand>
          </div>
          : <></>}
        {c_featuredsproducts ?
          <div className="w-full text-center">
            <h4 className="sec_heading  font-bold">{c_heading.featuredProducts ? c_heading.featuredProducts : "featured products"}</h4>
            <Featurecategory prop={c_featuredsproducts}></Featurecategory>
          </div>
          : <></>}
        {c_relatedfaqs ? <div className="w-full text-center">
          <h4 className="sec_heading  font-bold">{c_heading.faqs ? c_heading.faqs : "Frequently Asked Questions"}</h4>
          <Faqs prop={c_relatedfaqs}></Faqs>
        </div> : <></>} */}

          <Footer c_footerServices={_site.c_footerServices} c_footerOrders={_site.c_footerOrders} c_footerNewatdiptyque={_site.c_footerNewatdiptyque} c_footerMostpopular={_site.c_footerMostpopular} c_service={_site.c_service} />

      </AnalyticsProvider>
      
    </>
  );
};

export default Location;
