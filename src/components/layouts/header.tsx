import * as React from "react";


type header = {
  header: any;
  c_bannerTop: any;
};



const Header = (props: header) => {
  const { header ,c_bannerTop } = props;

  return (
    <>
      <div id="header" className="header-nav">
        <div className="header-top">
          <a href={c_bannerTop?.url} className="header-top-text">{c_bannerTop?.lable}</a>
        </div>
        <div className="header-content-middle ">
          <a className="logo" href="https://www.diptyqueparis.com/fstrz/r/s/d1wwvmedxjfrrp.cloudfront.net/logo/default/logo_diptyque_2.png?frz-v=250">
            <img src="https://www.diptyqueparis.com/fstrz/r/s/d1wwvmedxjfrrp.cloudfront.net/logo/default/logo_diptyque_2.png?frz-v=250" alt="diptyque logo" />
          </a>
        </div>
        <div className="gap-12 flex flex-row text-lg pl-40 text-black">

          {header?.map((head: any) => {
            return (
              <>
                <ul>
                  <li ><a href={head.url}>{head.lable}</a></li>
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
