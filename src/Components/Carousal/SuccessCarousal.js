import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
    return (
      <div className="mt-36">
        <h2 className="text-3xl font-semibold mb-8">Our Graduates</h2>
        <Slider {...settings}>
        <div className="h-52 bg-gray-200 rounded-md">
          <h3 className="px-8 mt-4">I am very glad to be part of GrowHeist. I was in my struggling phase, when I got to know about this Now I am at good position</h3>
          <div className="flex items-center mx-4 my-5 gap-4">
            <div className="h-20 w-20">
              <img src="https://uploads-ssl.webflow.com/60798d9b0b61160814b3d8c3/61718d7e02bbb93d99951054_Screenshot_20211005-180352_Gallery%20-%20Sparsh%20Mehta.jpg"
                  alt="Sparsh Mehta"
                  className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Sparsh Mehta</h1>
              <p>Flutter Developer at Deloitte</p>
            </div>
          </div>
        </div>

        <div className="h-52 bg-bgCol-100 rounded-md">
          <h3 className="px-8 mt-4">I was Not able Find Interships , the more then I was lacking was a mentor and a Path , But GrowHeist Help Me Get IT </h3>
          <div className="flex items-center mx-4 my-5 gap-4">
            <div className="h-20 w-20">
              <img src="https://uploads-ssl.webflow.com/60798d9b0b61160814b3d8c3/61fffae161292b3fcd334621_1627528963227.jpg"
                  alt="Shubham Singh"
                  className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Shubham Singh</h1>
              <p>SDE at GrowHeist</p>
            </div>
          </div>
        </div>

        <div className="h-52 bg-gray-200 rounded-md">
          <h3 className="px-8 mt-4">I am very glad to be part of GrowHeist. I was in my struggling phase, when I got to know about this Now I am at good position</h3>
          <div className="flex items-center mx-4 my-5 gap-4">
            <div className="h-20 w-20">
              <img src="https://uploads-ssl.webflow.com/60798d9b0b61160814b3d8c3/61ff75a15f497ce339f73b81_1608378258165.jpg"
                  alt="Khushi Trivedi"
                  className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Khushi Trivedi</h1>
              <p>Marketing Manager at SpaceX</p>
            </div>
          </div>
        </div>

        <div className="h-52 bg-bgCol-100 rounded-md">
          <h3 className="px-8 mt-4">I was Not able Find Interships , the more then I was lacking was a mentor and a Path , But GrowHeist Help Me Get IT </h3>
          <div className="flex items-center mx-4 my-5 gap-4">
            <div className="h-20 w-20">
              <img src="https://uploads-ssl.webflow.com/60798d9b0b61160814b3d8c3/607e7422a712179a0d19aad5_5f95c72b99671b87b6a4ad03_Screenshot%202020-10-26%20at%2012.12.03%20AM.png"
                  alt="Bhavya Kala"
                  className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Bhavya Kala</h1>
              <p>Graphic Designer at Secure Solutions</p>
            </div>
          </div>
        </div>

        <div className="h-52 bg-gray-200 rounded-md">
          <h3 className="px-8 mt-4">I am very glad to be part of GrowHeist. I was in my struggling phase, when I got to know about this Now I am at good position</h3>
          <div className="flex items-center mx-4 my-5 gap-4">
            <div className="h-20 w-20">
              <img src="https://uploads-ssl.webflow.com/60798d9b0b61160814b3d8c3/60941199c3e37da695ea2062_mahi.jpg"
                  alt="Mahi Patel"
                  className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Mahi Patel</h1>
              <p>Data Analyst at JIO</p>
            </div>
          </div>
        </div>

        <div className="h-52 bg-bgCol-100 rounded-md">
          <h3 className="px-8 mt-4">I was Not able Find Interships , the more then I was lacking was a mentor and a Path , But GrowHeist Help Me Get IT </h3>
          <div className="flex items-center mx-4 my-5 gap-4">
            <div className="h-20 w-20">
              <img src="https://uploads-ssl.webflow.com/60798d9b0b61160814b3d8c3/617190120d5ca6d803228dd5_Screenshot%202021-10-21%20213624.png"
                  alt="Aman Mehta"
                  className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Aman Mehta</h1>
              <p>SDE at Wipro</p>
            </div>
          </div>
        </div>
        </Slider>
      </div>
    );
  }
}
