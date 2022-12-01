import * as React from "react";
import "../index.css";
import { GetPath, Template, TemplateProps, TemplateRenderProps, TemplateConfig, GetHeadConfig,
  HeadConfig } from "@yext/pages";
import { SearchHeadlessProvider, useSearchActions } from "@yext/search-headless-react";
import PageLayout from "../components/layouts/PageLayout";
import SearchLayout from "../components/locatorPage/SearchLayout";
import {  AnswerExperienceConfig  } from "../config/globalConfig";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import favicon from "../images/logo_diptyque_2.png"


export const config: TemplateConfig = {
  stream: {
    $id: "locatorsearch",
    filter: {
      entityIds: ["global-data"]
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "c_header",
      "c_footerServices",
      "c_footerOrders",
      "c_footerNewatdiptyque",
      "c_footerMostpopular",
      "c_service",
      "c_bannerTop"
    ],
    localization: {
      locales: ["en_GB"],
      primary: false
    },
  },
};


// export const getPath: GetPath<TemplateProps> = () => {
//   return `/locatorSearch`;
// };



export const getPath: GetPath<TemplateProps> = ({ document }) => {
  var url = "";
  var name: any = document.name.toLowerCase();
  var string: any = name.toString();
  let result: any = string.replaceAll(" ", "-");
  if (!document.slug) {
    url = `index.html`;
  } else {
    url = `${document.slug.toString()}.html`;
  }

  return url;
};







export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({relativePrefixToRoot, path, document}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: document.description,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: favicon,
        },
      },
    ],
  };
};

const locatorSearch: Template<TemplateRenderProps> = ({relativePrefixToRoot, path, document}) => {

const { _site } = document;

const providerOptions: google.maps.MapOptions = {
  disableDefaultUI: true
}

return (
    <>
    <Header header={_site.c_header} c_bannerTop={_site.c_bannerTop} />
  {/* <img src={_site.c_bannerLocator.bannerImage.url}></img> */}
      <PageLayout>
        <SearchHeadlessProvider
            experienceKey={AnswerExperienceConfig.experienceKey}
            locale={AnswerExperienceConfig.locale}
            apiKey={AnswerExperienceConfig.apiKey}               
            verticalKey={AnswerExperienceConfig.verticalKey}
            experienceVersion={AnswerExperienceConfig.experienceVersion}
            sessionTrackingEnabled={AnswerExperienceConfig.sessionTrackingEnabled}  
            endpoints={AnswerExperienceConfig.endpoints}         
        >
           <SearchLayout/>           
        </SearchHeadlessProvider>   
      </PageLayout>
      <Footer c_footerServices={_site.c_footerServices} c_footerOrders={_site.c_footerOrders} c_footerNewatdiptyque={_site.c_footerNewatdiptyque} c_footerMostpopular={_site.c_footerMostpopular} c_service={_site.c_service} />
    </>
  );
};

export default locatorSearch;