export const limit = 2; 

export const radius = 50;

export const defaultQuery = "";

export const baseApiUrl = "https://liveapi-sandbox.yext.com/v2/accounts/me";

export const liveAPIKey = "6799219ca0628f2db461adf85417ecaa";
export const entityTypes="location"

// export const googleMapsApiKey = "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18";

export const savedFilterId = "1100445776";

export const googleMapsConfig =  {
    centerLatitude:51.509865,
    centerLongitude: -0.118092,
    googleMapsApiKey: "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"   
};

export const AnswerExperienceConfig =  {
    experienceKey: "diptyque-answer-search",
    locale:"en_GB",
    apiKey: "77c136a21f9ff726cadb951fc0194e11",
    verticalKey: "locations",
    experienceVersion: "STAGING",
    sessionTrackingEnabled: true,
    endpoints:{
        universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
        verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
        questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
        universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
        verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
        filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch"
    }
};



