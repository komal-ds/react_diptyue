import * as React from "react";
var currentTime = new Date()
var year = currentTime.getFullYear()

type footer = {
   c_footerServices: any;
   c_footerOrders: any;
   c_footerNewatdiptyque: any;
   c_footerMostpopular: any;
   c_service: any;
};




const Footer = (props: footer) => {
   const { c_footerServices, c_footerOrders, c_footerNewatdiptyque, c_footerMostpopular, c_service } = props;

   return (
      <>
         <div className="services-sec">
         <hr />
            <div className="service px-20 pb-8 ">
               <ul className="flex flex-row">
                  {c_service?.map((service: any) => {
                     return (
                        <li className="flex flex-row text-black serviceimage"><img title={service.logo.alternateText} src={service.logo.url} alt={service.logo.alternateText} width="30" height="25" /><strong className="servicelabel">{service.label}</strong></li>
                     );
                  })}
               </ul>
            </div>
         </div>
         <footer className="footer-sec">
            <div className="footer-sec2">
               <div className=" container-custom">
                  <hr />
               </div>
            </div>
            <div className=" container-custom">
               <div className="footer-sec-copyright">
                  {/* <div className="footer-bx ">
                     <div className="store-finder-sec">
                        <div className="store-img">   <img src={storefinder} alt="" /> </div>
                        <div className="store-desc">Store finder
                           <span>  Over 200 stores nationwide </span>
                        </div>
                     </div>
                     <div className="store-finder-sec">
                        <div className="store-img"> <img src={sleep} alt="" /> </div>
                        <div className="store-desc">Sleep Matters Club
                           <span>  Sleep-related articles & advice </span>
                        </div>
                     </div>
                     <div className="trust-footer">
                        <img src={trustfooter} alt="" />
                     </div>
                  </div> */}
                  <div className="footer-bx footer-link">
                     <h4>SERVICES</h4>
                     <ul>
                        {c_footerServices?.map((footerServices: any) => {
                           return (
                              <li><a href={footerServices.url} title={footerServices.lable} >{footerServices.lable}</a></li>
                           );
                        })}
                     </ul>
                  </div>
                  <div className="footer-bx footer-link">
                     <h4>ORDERS</h4>
                     <ul>
                        {c_footerOrders?.map((footerOrders: any) => {
                           return (
                              <li><a href={footerOrders.url} title={footerOrders.lable} >{footerOrders.lable}</a></li>
                           );
                        })}
                     </ul>
                  </div>
                  <div className="footer-bx footer-link">
                     <h4>NEW AT DIPTYQUE</h4>
                     <ul>
                        {c_footerNewatdiptyque?.map((footerNewatdiptyque: any) => {
                           return (
                              <li><a href={footerNewatdiptyque.url} title={footerNewatdiptyque.lable} >{footerNewatdiptyque.lable}</a></li>
                           );
                        })}
                     </ul>
                  </div>
                  <div className="footer-bx footer-link">
                     <h4>MOST POPULAR</h4>
                     <ul>
                        {c_footerMostpopular?.map((footerMostpopular: any) => {
                           return (
                              <li><a href={footerMostpopular.url} title={footerMostpopular.lable} >{footerMostpopular.lable}</a></li>
                           );
                        })}
                     </ul>
                  </div>
               </div>
               <div className="footer-site-info">
                  <ul>
                     {/* {data3 &&
                data3.map((e: any) => {
                  return (
                    <>
                      <li>
                        <a href="#">{e.label}</a>
                      </li>
                    </>
                  );
                })} */}

                  </ul>
                  {/* <p>    {data4[0]}   </p>
            <p>   {data4[1]}</p>
            <p>   {data4[2]}</p> */}
               </div>
            </div>

            {/* <CookieConsent
               buttonText={"Accept"}
               buttonStyle={{
                  marginLeft: "100px",
                  backgroundColor: '#e36193',
                  color: '#fff'
               }}

            >
               <p>
                  {cookieText}
                  <a className="text-[#e36193]" href="https://www.dreams.co.uk/cookiepolicy">
                     cookies policy
                  </a>
                  .
               </p>
            </CookieConsent> */}
            <div className="footer-sec2">
               <div className=" container-custom">

                  <div className="newssocial-sec">
                     <div className="social-bx">
                        <ul className="footer-social">
                           <li>
                              <a href="#" title="Allurion France Facebook"> <svg xmlns="http://www.w3.org/2000/svg" width="28"
                                 height="28" viewBox="0 0 28 28">
                                 <g id="Group_44" data-name="Group 44" transform="translate(119 -2301)">
                                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="14" cy="14" r="14" transform="translate(-119 2301)"
                                       fill="#fff" />
                                    <path id="Icon_zocial-facebook" data-name="Icon zocial-facebook"
                                       d="M13.257,6.987V4.5h2V3.253a3.27,3.27,0,0,1,.878-2.3A2.793,2.793,0,0,1,18.266,0h1.991V2.485H18.266a.438.438,0,0,0-.351.215.872.872,0,0,0-.156.527V4.5h2.5V6.987h-2.5v6.025h-2.5V6.987Z"
                                       transform="translate(-121.257 2308)" fill="#00363f" />
                                 </g>
                              </svg>
                              </a>
                           </li>
                           <li>
                              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                 <g id="Group_45" data-name="Group 45" transform="translate(63 -2301)">
                                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="14" cy="14" r="14" transform="translate(-63 2301)"
                                       fill="#fff" />
                                    <path id="Icon_awesome-youtube" data-name="Icon awesome-youtube"
                                       d="M15.737,6.15A1.885,1.885,0,0,0,14.41,4.815,44.541,44.541,0,0,0,8.55,4.5a44.541,44.541,0,0,0-5.86.315A1.885,1.885,0,0,0,1.363,6.15,19.772,19.772,0,0,0,1.05,9.784a19.772,19.772,0,0,0,.313,3.634A1.857,1.857,0,0,0,2.69,14.731a44.541,44.541,0,0,0,5.86.315,44.541,44.541,0,0,0,5.86-.315,1.857,1.857,0,0,0,1.326-1.313,19.772,19.772,0,0,0,.313-3.634,19.772,19.772,0,0,0-.313-3.634ZM7.016,12.014V7.554l3.92,2.23-3.92,2.23Z"
                                       transform="translate(-57.05 2305.5)" fill="#00363f" />
                                 </g>
                              </svg>
                              </a>
                           </li>
                           <li>
                              <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                 <g id="Group_46" data-name="Group 46" transform="translate(6 -2301)">
                                    <circle id="Ellipse_3" data-name="Ellipse 3" cx="14" cy="14" r="14" transform="translate(-6 2301)"
                                       fill="#fff" />
                                    <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram"
                                       d="M7,5.648a3.589,3.589,0,1,0,3.589,3.589A3.583,3.583,0,0,0,7,5.648Zm0,5.922A2.333,2.333,0,1,1,9.329,9.236,2.337,2.337,0,0,1,7,11.569ZM11.569,5.5a.837.837,0,1,1-.837-.837A.835.835,0,0,1,11.569,5.5Zm2.377.85a4.142,4.142,0,0,0-1.131-2.933A4.169,4.169,0,0,0,9.882,2.287c-1.156-.066-4.619-.066-5.775,0A4.164,4.164,0,0,0,1.175,3.414,4.156,4.156,0,0,0,.044,6.347c-.066,1.156-.066,4.619,0,5.775a4.142,4.142,0,0,0,1.131,2.933,4.175,4.175,0,0,0,2.933,1.131c1.156.066,4.619.066,5.775,0a4.142,4.142,0,0,0,2.933-1.131,4.169,4.169,0,0,0,1.131-2.933c.066-1.156.066-4.616,0-5.772Zm-1.493,7.012a2.362,2.362,0,0,1-1.331,1.331A15.426,15.426,0,0,1,7,14.974a15.546,15.546,0,0,1-4.126-.281A2.362,2.362,0,0,1,1.54,13.362a15.426,15.426,0,0,1-.281-4.126A15.546,15.546,0,0,1,1.54,5.11,2.362,2.362,0,0,1,2.87,3.78,15.426,15.426,0,0,1,7,3.5a15.546,15.546,0,0,1,4.126.281A2.362,2.362,0,0,1,12.453,5.11a15.426,15.426,0,0,1,.281,4.126A15.417,15.417,0,0,1,12.453,13.362Z"
                                       transform="translate(1.005 2305.762)" fill="#00363f" />
                                 </g>
                              </svg>
                              </a>
                           </li>
                           <li>
                              <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                 <g id="Group_47" data-name="Group 47" transform="translate(-49 -2301)">
                                    <circle id="Ellipse_4" data-name="Ellipse 4" cx="14" cy="14" r="14" transform="translate(49 2301)"
                                       fill="#fff" />
                                    <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in"
                                       d="M3.134,14H.231V4.654h2.9ZM1.681,3.379a1.689,1.689,0,1,1,1.681-1.7A1.7,1.7,0,0,1,1.681,3.379ZM14,14H11.1V9.45c0-1.084-.022-2.475-1.509-2.475-1.509,0-1.74,1.178-1.74,2.4V14h-2.9V4.654H7.736V5.929h.041a3.05,3.05,0,0,1,2.746-1.509C13.46,4.419,14,6.354,14,8.866V14Z"
                                       transform="translate(56 2307.999)" fill="#00363f" />
                                 </g>
                              </svg>
                              </a>
                           </li>
                        </ul>
                     </div>

                     <div className="newsletter-bx">
                        <form className="newsletter-form">
                           <input type="text" name="" placeholder="Sign up for offers and sale info" />
                           <button type="submit" className=""> Sign Up
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>

         </footer>
      </>
   );
};

export default Footer;
