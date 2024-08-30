import Head from "next/head";
import { useState } from "react";
import { Inter } from "next/font/google";
import BannerSlider from "../components/BannerSlider";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter: any) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <Head>
        <title>Dev Queues | Top Web And Mobile App Development Company</title>
        <meta
          name="description"
          content="Dev Queues is a top web and mobile app development company, providing innovative and scalable solutions to enhance your digital presence."
        />
        <meta
          name="keywords"
          content="web development, mobile app development, Dev Queues, IT solutions, software development, digital transformation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className} `}
      >
        <BannerSlider />
        <section id="about-us" className="py-12">
          <div className="container mx-auto" data-aos="fade-up">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 px-4" data-aos="fade-right">
                <h2 className="text-3xl font-semibold mb-4">
                  Eum ipsam laborum deleniti velitena
                </h2>
                <h3 className="text-xl mb-4">
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assum perenda sruen jonee trave
                </h3>
              </div>
              <div
                className="w-full lg:w-1/2 px-4 pt-4 lg:pt-0"
                data-aos="fade-left"
              >
                <p className="mb-4">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li className="flex items-center mb-2 before:content-['\2022'] before:text-[#15b8a6] before:text-xl before:mr-2">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequa
                  </li>
                  <li className="flex items-center mb-2 before:content-['\2022'] before:text-[#15b8a6] before:text-xl before:mr-2">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </li>
                  <li className="flex items-center before:content-['\2022'] before:text-[#15b8a6] before:text-xl before:mr-2">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in
                  </li>
                </ul>
                <p className="italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Services Section =======  */}
        <section id="services" className="py-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 px-4">
              {/* Service Box */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 flex-1 min-w-[250px]">
                <div className="flex items-center justify-center bg-[#15b8a6] text-white w-16 h-16 rounded-full mx-auto mb-4">
                  <svg
                    className="w-10 h-10 animate-spin"
                    fill="#f5f5f5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M12 2v2m6.363 1.636l1.414-1.414M22 12h-2M6.343 3.757L4.929 5.171M2 12H0M12 22v-2m6.363-1.636l1.414 1.414M17.657 6.343l1.414-1.414"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-center mb-4">
                  Mobile App Development
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  We focus on developing highly innovative and scalable mobile
                  apps that enhance customer experience and build brand value.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 flex-1 min-w-[250px]">
                <div className="flex items-center justify-center bg-[#15b8a6] text-white w-16 h-16 rounded-full mx-auto mb-4">
                  <svg
                    className="w-10 h-10 animate-bounce"
                    fill="#f5f5f5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M12 2l-2 7h4l-2 7m0 0v4m4-14l-2 7m2-7H8l2 7m4-14v4m-2-4H8l2 7m2-7v4"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-center mb-4">Web Development</h4>
                <p className="text-gray-600 text-sm text-center">
                  We have plenteous experience in web development, creating
                  websites and web apps that stand out in the crowd and
                  streamline business solutions.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 flex-1 min-w-[250px]">
                <div className="flex items-center justify-center bg-[#15b8a6] text-white w-16 h-16 rounded-full mx-auto mb-4">
                  <svg
                    className="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      className="stroke-current text-[#fffff] animate-pulse"
                      fill="none"
                      strokeWidth="2"
                    />
                    <path
                      fill="none"
                      stroke="#f5f5f5"
                      strokeWidth="2"
                      d="M9 12l2 2l4 -4"
                      className="animate-draw"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-center mb-4">UI/UX Design</h4>
                <p className="text-gray-600 text-sm text-center">
                  Crafting interfaces that engage users visually and
                  emotionally. Establishing a unique brand identity through
                  visual design.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 flex-1 min-w-[250px]">
                <div className="flex items-center justify-center bg-[#15b8a6] text-white w-16 h-16 rounded-full mx-auto mb-4">
                  <svg
                    className="w-10 h-10 animate-spin-slow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L12 6" />
                    <path d="M12 18L12 22" />
                    <path d="M4.93 4.93L7.76 7.76" />
                    <path d="M16.24 16.24L19.07 19.07" />
                    <path d="M2 12L6 12" />
                    <path d="M18 12L22 12" />
                    <path d="M4.93 19.07L7.76 16.24" />
                    <path d="M16.24 7.76L19.07 4.93" />
                  </svg>
                </div>
                <h4 className="font-bold text-center mb-4">QA/Testing</h4>
                <p className="text-gray-600 text-sm text-center">
                  Our quality assurance team ensures quality testing of the
                  product across the entire lifecycle of your app.
                </p>
              </div>
              {/* Repeat similar blocks for other services */}
            </div>
          </div>
        </section>

        {/* <section id="portfolio" className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex justify-center mb-12">
              <ul className="flex space-x-6">
                <li className="filter-active cursor-pointer text-gray-800 font-semibold hover:text-[#15b8a6] transition-colors duration-300">
                  All
                </li>
                <li className="cursor-pointer text-gray-800 font-semibold hover:text-[#15b8a6] transition-colors duration-300">
                  App
                </li>
                <li className="cursor-pointer text-gray-800 font-semibold hover:text-[#15b8a6] transition-colors duration-300">
                  Card
                </li>
                <li className="cursor-pointer text-gray-800 font-semibold hover:text-[#15b8a6] transition-colors duration-300">
                  Web
                </li>
              </ul>
            </div>

            <section id="portfolio" className="portfolio">
              <div className="container">
                <div className="row" data-aos="fade-up">
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">
                        All
                      </li>
                      <li data-filter=".filter-app">App</li>
                      <li data-filter=".filter-card">Card</li>
                      <li data-filter=".filter-web">Web</li>
                    </ul>
                  </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up">
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <Image
                      src="/slide/slide-1.jpg"
                      alt="Banner 1"
                      className="object-cover w-[100px] h-[100px]"
                      width={100}
                      height={100}
                    />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <a
                        href="assets/img/portfolio/strinz.png"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox preview-link"
                        title="App 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <Image
                      src="/slide/slide-1.jpg"
                      alt="Banner 1"
                      className="object-cover w-[100px] h-[100px]"
                      width={100}
                      height={100}
                    />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox preview-link"
                        title="Web 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <Image
                      src="/slide/slide-1.jpg"
                      alt="Banner 1"
                      className="object-cover w-[100px] h-[100px]"
                      width={100}
                      height={100}
                    />
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>App</p>
                      <a
                        href="assets/img/portfolio/portfolio-3.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox preview-link"
                        title="App 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <Image
                      src="/slide/slide-1.jpg"
                      alt="Banner 1"
                      className="object-cover w-[100px] h-[100px]"
                      width={100}
                      height={100}
                    />
                    <div className="portfolio-info">
                      <h4>Card 2</h4>
                      <p>Card</p>
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox preview-link"
                        title="Card 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <Image
                      src="/slide/slide-1.jpg"
                      alt="Banner 1"
                      className="object-cover w-[100px] h-[100px]"
                      width={100}
                      height={100}
                    />
                    <div className="portfolio-info">
                      <h4>Web 2</h4>
                      <p>Web</p>
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox preview-link"
                        title="Web 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <Image
                      src="/slide/slide-1.jpg"
                      alt="Banner 1"
                      className="object-cover w-[100px] h-[100px]"
                      width={100}
                      height={100}
                    />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>App</p>
                      <a
                        href="assets/img/portfolio/portfolio-6.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox preview-link"
                        title="App 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <Image
                      src="/slide/slide-1.jpg"
                      alt="Banner 1"
                      className="object-cover w-[100px] h-[100px]"
                      width={100}
                      height={100}
                    />
                    <div className="portfolio-info">
                      <h4>Card 1</h4>
                      <p>Card</p>
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox preview-link"
                        title="Card 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <Image
                      src="/slide/slide-1.jpg"
                      alt="Banner 1"
                      className="object-cover w-[100px] h-[100px]"
                      width={100}
                      height={100}
                    />
                    <div className="portfolio-info">
                      <h4>Card 3</h4>
                      <p>Card</p>
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox preview-link"
                        title="Card 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <Image
                      src="/slide/slide-1.jpg"
                      alt="Banner 1"
                      className="object-cover w-[100px] h-[100px]"
                      width={100}
                      height={100}
                    />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox preview-link"
                        title="Web 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section> */}
        <section id="portfolio" className="portfolio w-full py-12">
          <div className="container mx-auto">
            <div className="flex justify-center mb-8" data-aos="fade-up">
              <ul
                id="portfolio-flters"
                className="flex space-x-2 items justify-center items-center"
              >
                <li
                  onClick={() => handleFilterClick("all")}
                  // style={{ marginLeft: "0px !important" }}
                  className={`cursor-pointer ${
                    activeFilter === "all"
                      ? "text-[#ffffff] bg-[#15b8a6] text-[14px] rounded-[4px]"
                      : "text-black"
                  } hover:text-[#ffffff] hover:bg-[#15b8a6] hover:text-[14px] hover:rounded-[4px] px-[15px] pt-[5px] pb-[5px] text-[14px]`}
                >
                  ALL
                </li>
                <li
                  onClick={() => handleFilterClick("app")}
                  // style={{ marginLeft: "0px !important" }}
                  className={`cursor-pointer ${
                    activeFilter === "app"
                      ? "text-[#ffffff] bg-[#15b8a6] text-[14px] rounded-[4px]"
                      : "text-black"
                  } hover:text-[#ffffff] hover:bg-[#15b8a6] hover:text-[14px] hover:rounded-[4px] px-[15px] pt-[5px] pb-[5px] text-[14px]`}
                >
                  APP
                </li>
                <li
                  onClick={() => handleFilterClick("web")}
                  // style={{ marginLeft: "0px !important" }}
                  className={`cursor-pointer ${
                    activeFilter === "web"
                      ? "text-[#ffffff] bg-[#15b8a6] text-[14px] rounded-[4px]"
                      : "text-black"
                  } hover:text-[#ffffff] hover:bg-[#15b8a6] hover:text-[14px] hover:rounded-[4px] px-[15px] pt-[5px] pb-[5px] text-[14px]`}
                >
                  WEB
                </li>

                <li
                  onClick={() => handleFilterClick("card")}
                  // style={{ marginLeft: "0px !important" }}
                  className={`cursor-pointer ${
                    activeFilter === "card"
                      ? "text-[#ffffff] bg-[#15b8a6] text-[14px] rounded-[4px]"
                      : "text-black"
                  } hover:text-[#ffffff] hover:bg-[#15b8a6] hover:text-[14px] hover:rounded-[4px] px-[20px] pt-[5px] pb-[5px] text-[14px]`}
                >
                  UI
                </li>
              </ul>
            </div>
            <div>
              {activeFilter === "all" && (
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
                  <div className="flex flex-col rounded-lg md:mb-0 md:w-1/2 gap-4">
                    <div className="h-[200px] md:h-[250px] lg:h-[300px] xl:h-[420px] relative">
                      <Image
                        src="/slide/slide-1.jpg"
                        alt="Card Image "
                        className="rounded-lg mb-4"
                        fill
                        objectFit="cover"
                      />
                    </div>
                    <div className="h-[200px] md:h-[250px] lg:h-[300px] xl:h-[620px] relative">
                      <Image
                        src="/slide/slide-3.jpg"
                        alt="Card Image 5"
                        className="rounded-lg mb-4"
                        fill
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col rounded-lg md:mb-0 md:w-1/2 gap-4">
                    <div className="relative">
                      <div className="h-[200px] md:h-[250px] lg:h-[300px] xl:h-[280px]">
                        <Image
                          src="/slide/slide-1.jpg"
                          alt="Card Image "
                          className="rounded-lg mb-4"
                          fill
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="h-[200px] md:h-[250px] lg:h-[300px] xl:h-[620px]">
                        <Image
                          src="/slide/slide-3.jpg"
                          alt="Card Image 5"
                          className="rounded-lg mb-4"
                          fill
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-lg md:mb-0 md:w-1/2 gap-4">
                    <div className="h-[200px] md:h-[250px] lg:h-[300px] xl:h-[220px] relative">
                      <Image
                        src="/slide/slide-1.jpg"
                        alt="Card Image "
                        className="rounded-lg mb-4"
                        fill
                        objectFit="cover"
                      />
                    </div>
                    <div className="h-[200px] md:h-[250px] lg:h-[300px] xl:h-[320px] relative">
                      <Image
                        src="/slide/slide-3.jpg"
                        alt="Card Image 5"
                        className="rounded-lg mb-4"
                        fill
                        objectFit="cover"
                      />
                    </div>
                    <div className="h-[200px] md:h-[250px] lg:h-[300px] xl:h-[250px] relative">
                      <Image
                        src="/slide/slide-3.jpg"
                        alt="Card Image 5"
                        className="rounded-lg mb-4"
                        fill
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
                // <>
                // <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                //   <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                //     <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                //       <Image
                //         src="/slide/logo.png"
                //         alt="Banner 1"
                //         fill
                //         className="object-cover"
                //         // className="h-full w-full object-cover object-center"
                //       />
                //     </div>
                //   </div>

                //   <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                //     <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                //       <Image
                //         src="/slide/logo.png"
                //         alt="Banner 1"
                //         fill
                //         className="object-cover"
                //         // className="h-full w-full object-cover object-center"
                //       />
                //     </div>

                //     <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                //       <div>
                //         <span className="block text-5xl font-extrabold text-white">
                //           09
                //         </span>
                //         <span className="block text-base font-semibold text-white">
                //           We have
                //         </span>
                //         <span className="block text-base font-medium text-white text-opacity-70">
                //           Years of experience
                //         </span>
                //       </div>
                //       <div>
                //         <span className="absolute left-0 top-0 -z-10">
                //           <svg
                //             width="106"
                //             height="144"
                //             viewBox="0 0 106 144"
                //             fill="none"
                //             xmlns="http://www.w3.org/2000/svg"
                //           >
                //             <rect
                //               opacity="0.1"
                //               x="-67"
                //               y="47.127"
                //               width="113.378"
                //               height="131.304"
                //               transform="rotate(-42.8643 -67 47.127)"
                //               fill="url(#paint0_linear_1416_214)"
                //             ></rect>
                //             <defs>
                //               <linearGradient
                //                 id="paint0_linear_1416_214"
                //                 x1="-10.3111"
                //                 y1="47.127"
                //                 x2="-10.3111"
                //                 y2="178.431"
                //                 gradientUnits="userSpaceOnUse"
                //               >
                //                 <stop stop-color="white"></stop>
                //                 <stop
                //                   offset="1"
                //                   stop-color="white"
                //                   stop-opacity="0"
                //                 ></stop>
                //               </linearGradient>
                //             </defs>
                //           </svg>
                //         </span>
                //         <span className="absolute right-0 top-0 -z-10">
                //           <svg
                //             width="130"
                //             height="97"
                //             viewBox="0 0 130 97"
                //             fill="none"
                //             xmlns="http://www.w3.org/2000/svg"
                //           >
                //             <rect
                //               opacity="0.1"
                //               x="0.86792"
                //               y="-6.67725"
                //               width="155.563"
                //               height="140.614"
                //               transform="rotate(-42.8643 0.86792 -6.67725)"
                //               fill="url(#paint0_linear_1416_215)"
                //             ></rect>
                //             <defs>
                //               <linearGradient
                //                 id="paint0_linear_1416_215"
                //                 x1="78.6495"
                //                 y1="-6.67725"
                //                 x2="78.6495"
                //                 y2="133.937"
                //                 gradientUnits="userSpaceOnUse"
                //               >
                //                 <stop stop-color="white"></stop>
                //                 <stop
                //                   offset="1"
                //                   stop-color="white"
                //                   stop-opacity="0"
                //                 ></stop>
                //               </linearGradient>
                //             </defs>
                //           </svg>
                //         </span>
                //         <span className="absolute bottom-0 right-0 -z-10">
                //           <svg
                //             width="175"
                //             height="104"
                //             viewBox="0 0 175 104"
                //             fill="none"
                //             xmlns="http://www.w3.org/2000/svg"
                //           >
                //             <rect
                //               opacity="0.1"
                //               x="175.011"
                //               y="108.611"
                //               width="101.246"
                //               height="148.179"
                //               transform="rotate(137.136 175.011 108.611)"
                //               fill="url(#paint0_linear_1416_216)"
                //             ></rect>
                //             <defs>
                //               <linearGradient
                //                 id="paint0_linear_1416_216"
                //                 x1="225.634"
                //                 y1="108.611"
                //                 x2="225.634"
                //                 y2="256.79"
                //                 gradientUnits="userSpaceOnUse"
                //               >
                //                 <stop stop-color="white"></stop>
                //                 <stop
                //                   offset="1"
                //                   stop-color="white"
                //                   stop-opacity="0"
                //                 ></stop>
                //               </linearGradient>
                //             </defs>
                //           </svg>
                //         </span>
                //       </div>
                //     </div>
                //   </div>
                // </div>
                // </>
              )}
              {activeFilter === "app" && (
                <div>
                  <Image
                    src="/slide/logo.png"
                    alt="Banner 1"
                    fill
                    // className="object-cover w-full h-full"
                  />
                </div>
              )}
              {activeFilter === "web" && (
                <div>
                  <Image
                    src="/slide/logo.png"
                    alt="Banner 1"
                    fill
                    // className="object-cover w-full h-full"
                  />
                </div>
              )}
              {activeFilter === "card" && (
                <div>
                  <Image src="/slide/logo.png" alt="Banner 1" fill />
                </div>
              )}
            </div>
          </div>
        </section>
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
      </main>
    </>
  );
}
