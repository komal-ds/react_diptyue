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
         <footer className="footer">
         <ul>
            {c_service?.map((service: any) => {
               return (
                  <li className="flex text-black"><img title={service.logo.alternateText} src={service.logo.url} alt={service.logo.alternateText} width="51" height="40" /><strong>{service.label}</strong></li>
               );
            })}
         </ul>
            <div className="container">
               <div className="footer_links">
                  <div className="column">
                     <h5>SERVICES</h5>
                     <ul>
                        {c_footerServices?.map((footerServices: any) => {
                           return (
                           <li><a href={footerServices.url} title={footerServices.lable} >{footerServices.lable}</a></li>
                           );
                        })}
                     </ul>
                  </div>
                  <div className="column">
                     <h5>ORDERS</h5>
                     <ul>
                        {c_footerOrders?.map((footerOrders: any) => {
                           return (
                           <li><a href={footerOrders.url} title={footerOrders.lable} >{footerOrders.lable}</a></li>
                           );
                        })}
                     </ul>
                  </div>
                  <div className="column">
                     <h5>NEW AT DIPTYQUE</h5>
                     <ul>
                        {c_footerNewatdiptyque?.map((footerNewatdiptyque: any) => {
                           return (
                           <li><a href={footerNewatdiptyque.url} title={footerNewatdiptyque.lable} >{footerNewatdiptyque.lable}</a></li>
                           );
                        })}
                     </ul>
                  </div>
                  <div className="column">
                     <h5>MOST POPULAR</h5>
                     <ul>
                        {c_footerMostpopular?.map((footerMostpopular: any) => {
                           return (
                           <li><a href={footerMostpopular.url} title={footerMostpopular.lable} >{footerMostpopular.lable}</a></li>
                           );
                        })}
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
