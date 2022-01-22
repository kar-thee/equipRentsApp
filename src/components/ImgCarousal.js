import React from "react";

import { Carousel } from "react-responsive-carousel";

const ImgCarousal = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img
            alt="sdc"
            src="
https://cdn.vox-cdn.com/thumbor/EjDc_Jbov4VEHxpyFyvGeTRJ4Bw=/0x0:2040x1360/1570x883/filters:focal(841x1034:1167x1360):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57096919/dseifert_171008_2042_4560_02.1507723815.jpg"
          />
        </div>

        <div>
          <img
            alt="sdc"
            src="https://i.guim.co.uk/img/media/117fb0d94960b88fe2704b8232c0d280881058b6/788_650_3705_2223/master/3705.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=0817b83c4ca3218611a3da5194cd09d0"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            alt="sdc"
            src="
https://cdn.vox-cdn.com/thumbor/EjDc_Jbov4VEHxpyFyvGeTRJ4Bw=/0x0:2040x1360/1570x883/filters:focal(841x1034:1167x1360):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57096919/dseifert_171008_2042_4560_02.1507723815.jpg"
          />
          <p className="legend">Legend 3</p>
        </div>

        <div>
          <img
            alt="sdc"
            src="https://i.guim.co.uk/img/media/117fb0d94960b88fe2704b8232c0d280881058b6/788_650_3705_2223/master/3705.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=0817b83c4ca3218611a3da5194cd09d0"
          />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>
    </>
  );
};

export default ImgCarousal;
