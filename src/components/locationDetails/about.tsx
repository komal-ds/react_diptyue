import * as React from "react";
// import abbanner from "../../images/ab-banner.jpg"
// import dt12 from "../../images/dtl2.jpg"
import PhotoSlider from "./PhotoSlider"

export default function About(props: any) {
  const { c_decsec } = props;
  return (
    <>


      {c_decsec.map((i: any) => {
        return (
          <>
            {i.heading && i.descriprtion ? (
              <div key={i.id} className=" py-10">
                <div className="container mx-auto ab-secmain flex flex-wrap items-center">
                  <div className="w-full md:w-1/2 px-5">
                    <PhotoSlider photoGallery={props.photoGallery} />
                  </div>

                  <div className="w-full md:w-1/2 about-sec px-5">
                    <h3 className="">{i.heading}</h3>
                    <p> {i.descriprtion}</p>

                  </div>

                </div>
              </div>


            ) : ""}
          </>
        )

      })

      }




    </>
  )


}