import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-indigo-500 cursor-none"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 relative">
          <Link
            href="/"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6] cursor-none"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6]"
          >
            ABOUT
          </Link>

          {/* Services Dropdown */}
          {/* <div className="relative group" data-twe-dropdown-ref>
            <Link
              href="/services"
              className="text-black text-[13px] font-semibold hover:text-[#15b8a6] flex items-center"
            >
              SERVICES
              <svg
                className="w-4 h-4 ml-2 text-black group-hover:text-[#15b8a6] transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <div className="absolute left-0 w-56 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="py-2">
                <Link
                  href="/seo"
                  className="block px-4 py-2 text-black hover:bg-[#15b8a6] hover:text-white"
                >
                  SEO
                </Link>
                <Link
                  href="/local-seo"
                  className="block px-4 py-2 text-black hover:bg-[#15b8a6] hover:text-white"
                >
                  Local SEO
                </Link>
                <Link
                  href="/amazon-seo"
                  className="block px-4 py-2 text-black hover:bg-[#15b8a6] hover:text-white"
                >
                  Amazon SEO & PPC
                </Link>
                <Link
                  href="/ecommerce-seo"
                  className="block px-4 py-2 text-black hover:bg-[#15b8a6] hover:text-white"
                >
                  ECommerce SEO
                </Link>
                <Link
                  href="/google-business"
                  className="block px-4 py-2 text-black hover:bg-[#15b8a6] hover:text-white"
                >
                  Google Business Profile Optimization
                </Link>
              </div>
            </div>
          </div> */}
          <div className="relative ms-2 group" data-twe-dropdown-ref>
            {/* <a
              className="flex items-center px-6 pb-2 pt-2.5 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
              href="#"
              type="button"
              id="dropdownMenuButton2"
              data-twe-dropdown-toggle-ref
              aria-expanded="false"
            > */}
            <Link
              href="/services"
              className="text-black text-[13px] font-semibold hover:text-[#15b8a6] flex items-center"
            >
              SERVICES
              <span className="ms-2 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </Link>
            <ul
              className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg group-hover:block dark:bg-surface-dark"
              aria-labelledby="dropdownMenuButton2"
              data-twe-dropdown-menu-ref
            >
              <Link
                href="/seo"
                className="block px-4 py-2 text-black hover:bg-[#15b8a6] hover:text-white"
              >
                SEO
              </Link>
              <Link
                href="/local-seo"
                className="block px-4 py-2 text-black hover:bg-[#15b8a6] hover:text-white"
              >
                Local SEO
              </Link>
              <Link
                href="/amazon-seo"
                className="block px-4 py-2 text-black hover:bg-[#15b8a6] hover:text-white"
              >
                Amazon SEO & PPC
              </Link>
              <Link
                href="/ecommerce-seo"
                className="block px-4 py-2 text-black hover:bg-[#15b8a6] hover:text-white"
              >
                ECommerce SEO
              </Link>
              <Link
                href="/google-business"
                className="block px-4 py-2 text-black hover:bg-[#15b8a6] hover:text-white"
              >
                Google Business Profile Optimization
              </Link>
            </ul>
          </div>
          <Link
            href="/portfolio"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6]"
          >
            PORTFOLIO
          </Link>
          {/* <Link
            href="/blog"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6]"
          >
            BLOG
          </Link> */}
          <Link
            href="/contact"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6]"
          >
            CONTACT
          </Link>
        </nav>
        <div className="flex space-x-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
            <svg
              className="rounded-md transition-all duration-300 group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23.953 4.569c-.883.391-1.83.656-2.825.774 1.016-.608 1.798-1.569 2.165-2.72-.951.564-2.003.975-3.127 1.2-.896-.956-2.174-1.556-3.594-1.556-2.72 0-4.929 2.209-4.929 4.928 0 .388.043.768.127 1.134-4.096-.205-7.72-2.17-10.14-5.15-.424.727-.666 1.576-.666 2.482 0 1.71.869 3.215 2.188 4.099-.805-.026-1.563-.247-2.223-.616v.062c0 2.392 1.703 4.383 3.963 4.83-.415.113-.853.175-1.305.175-.319 0-.629-.031-.936-.085.63 1.963 2.445 3.393 4.604 3.432-1.684 1.319-3.805 2.105-6.115 2.105-.397 0-.788-.023-1.176-.067 2.186 1.398 4.769 2.213 7.558 2.213 9.057 0 14.015-7.496 14.015-14.015 0-.213-.004-.426-.013-.638.962-.695 1.796-1.56 2.459-2.548z"
                fill="#1DA1F2"
              />
            </svg>
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
            <svg
              className="transition-all duration-300 group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                fill="#337FFF"
              />
            </svg>
          </button>

          <button className="w-10 h-10 flex items-center justify-center group rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
            <svg
              className="transition-all duration-300 group-hover:scale-110"
              width="28"
              height="28"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4456 35.7808C27.4456 31.1786 31.1776 27.4468 35.7826 27.4468C40.3875 27.4468 44.1216 31.1786 44.1216 35.7808C44.1216 40.383 40.3875 44.1148 35.7826 44.1148C31.1776 44.1148 27.4456 40.383 27.4456 35.7808ZM22.9377 35.7808C22.9377 42.8708 28.6883 48.618 35.7826 48.618C42.8768 48.618 48.6275 42.8708 48.6275 35.7808C48.6275 28.6908 42.8768 22.9436 35.7826 22.9436C28.6883 22.9436 22.9377 28.6908 22.9377 35.7808ZM46.1342 22.4346C46.1339 23.0279 46.3098 23.608 46.6394 24.1015C46.9691 24.595 47.4377 24.9797 47.9861 25.2069C48.5346 25.4342 49.1381 25.4939 49.7204 25.3784C50.3028 25.2628 50.8378 24.9773 51.2577 24.5579C51.6777 24.1385 51.9638 23.6041 52.0799 23.0222C52.1959 22.4403 52.1367 21.8371 51.9097 21.2888C51.6828 20.7406 51.2982 20.2719 50.8047 19.942C50.3112 19.6122 49.7309 19.436 49.1372 19.4358H49.136C48.3402 19.4361 47.5771 19.7522 47.0142 20.3144C46.4514 20.8767 46.1349 21.6392 46.1342 22.4346ZM25.6765 56.1302C23.2377 56.0192 21.9121 55.6132 21.0311 55.2702C19.8632 54.8158 19.0299 54.2746 18.1538 53.4002C17.2777 52.5258 16.7354 51.6938 16.2827 50.5266C15.9393 49.6466 15.533 48.3214 15.4222 45.884C15.3009 43.2488 15.2767 42.4572 15.2767 35.781C15.2767 29.1048 15.3029 28.3154 15.4222 25.678C15.5332 23.2406 15.9425 21.918 16.2827 21.0354C16.7374 19.8682 17.2789 19.0354 18.1538 18.1598C19.0287 17.2842 19.8612 16.7422 21.0311 16.2898C21.9117 15.9466 23.2377 15.5406 25.6765 15.4298C28.3133 15.3086 29.1054 15.2844 35.7826 15.2844C42.4598 15.2844 43.2527 15.3106 45.8916 15.4298C48.3305 15.5408 49.6539 15.9498 50.537 16.2898C51.7049 16.7422 52.5382 17.2854 53.4144 18.1598C54.2905 19.0342 54.8308 19.8682 55.2855 21.0354C55.6289 21.9154 56.0351 23.2406 56.146 25.678C56.2673 28.3154 56.2915 29.1048 56.2915 35.781C56.2915 42.4572 56.2673 43.2466 56.146 45.884C56.0349 48.3214 55.6267 49.6462 55.2855 50.5266C54.8308 51.6938 54.2893 52.5266 53.4144 53.4002C52.5394 54.2738 51.7049 54.8158 50.537 55.2702C49.6565 55.6134 48.3305 56.0194 45.8916 56.1302C43.2549 56.2514 42.4628 56.2756 35.7826 56.2756C29.1024 56.2756 28.3125 56.2514 25.6765 56.1302ZM25.4694 10.9322C22.8064 11.0534 20.9867 11.4754 19.3976 12.0934C17.7518 12.7316 16.3585 13.5878 14.9663 14.977C13.5741 16.3662 12.7195 17.7608 12.081 19.4056C11.4626 20.9948 11.0403 22.8124 10.9191 25.4738C10.7958 28.1394 10.7676 28.9916 10.7676 35.7808C10.7676 42.57 10.7958 43.4222 10.9191 46.0878C11.0403 48.7494 11.4626 50.5668 12.081 52.156C12.7195 53.7998 13.5743 55.196 14.9663 56.5846C16.3583 57.9732 17.7518 58.8282 19.3976 59.4682C20.9897 60.0862 22.8064 60.5082 25.4694 60.6294C28.138 60.7506 28.9893 60.7808 35.7826 60.7808C42.5759 60.7808 43.4286 60.7526 46.0958 60.6294C48.759 60.5082 50.5774 60.0862 52.1676 59.4682C53.8124 58.8282 55.2066 57.9738 56.5989 56.5846C57.9911 55.1954 58.8438 53.7998 59.4842 52.156C60.1026 50.5668 60.5268 48.7492 60.6461 46.0878C60.7674 43.4202 60.7956 42.57 60.7956 35.7808C60.7956 28.9916 60.7674 28.1394 60.6461 25.4738C60.5248 22.8122 60.1026 20.9938 59.4842 19.4056C58.8438 17.7618 57.9889 16.3684 56.5989 14.977C55.2088 13.5856 53.8124 12.7316 52.1696 12.0934C50.5775 11.4754 48.7588 11.0514 46.0978 10.9322C43.4306 10.811 42.5779 10.7808 35.7846 10.7808C28.9913 10.7808 28.138 10.809 25.4694 10.9322Z"
                fill="url(#paint0_radial_7092_54471)"
              />
              <path
                d="M27.4456 35.7808C27.4456 31.1786 31.1776 27.4468 35.7826 27.4468C40.3875 27.4468 44.1216 31.1786 44.1216 35.7808C44.1216 40.383 40.3875 44.1148 35.7826 44.1148C31.1776 44.1148 27.4456 40.383 27.4456 35.7808ZM22.9377 35.7808C22.9377 42.8708 28.6883 48.618 35.7826 48.618C42.8768 48.618 48.6275 42.8708 48.6275 35.7808C48.6275 28.6908 42.8768 22.9436 35.7826 22.9436C28.6883 22.9436 22.9377 28.6908 22.9377 35.7808ZM46.1342 22.4346C46.1339 23.0279 46.3098 23.608 46.6394 24.1015C46.9691 24.595 47.4377 24.9797 47.9861 25.2069C48.5346 25.4342 49.1381 25.4939 49.7204 25.3784C50.3028 25.2628 50.8378 24.9773 51.2577 24.5579C51.6777 24.1385 51.9638 23.6041 52.0799 23.0222C52.1959 22.4403 52.1367 21.8371 51.9097 21.2888C51.6828 20.7406 51.2982 20.2719 50.8047 19.942C50.3112 19.6122 49.7309 19.436 49.1372 19.4358H49.136C48.3402 19.4361 47.5771 19.7522 47.0142 20.3144C46.4514 20.8767 46.1349 21.6392 46.1342 22.4346ZM25.6765 56.1302C23.2377 56.0192 21.9121 55.6132 21.0311 55.2702C19.8632 54.8158 19.0299 54.2746 18.1538 53.4002C17.2777 52.5258 16.7354 51.6938 16.2827 50.5266C15.9393 49.6466 15.533 48.3214 15.4222 45.884C15.3009 43.2488 15.2767 42.4572 15.2767 35.781C15.2767 29.1048 15.3029 28.3154 15.4222 25.678C15.5332 23.2406 15.9425 21.918 16.2827 21.0354C16.7374 19.8682 17.2789 19.0354 18.1538 18.1598C19.0287 17.2842 19.8612 16.7422 21.0311 16.2898C21.9117 15.9466 23.2377 15.5406 25.6765 15.4298C28.3133 15.3086 29.1054 15.2844 35.7826 15.2844C42.4598 15.2844 43.2527 15.3106 45.8916 15.4298C48.3305 15.5408 49.6539 15.9498 50.537 16.2898C51.7049 16.7422 52.5382 17.2854 53.4144 18.1598C54.2905 19.0342 54.8308 19.8682 55.2855 21.0354C55.6289 21.9154 56.0351 23.2406 56.146 25.678C56.2673 28.3154 56.2915 29.1048 56.2915 35.781C56.2915 42.4572 56.2673 43.2466 56.146 45.884C56.0349 48.3214 55.6267 49.6462 55.2855 50.5266C54.8308 51.6938 54.2893 52.5266 53.4144 53.4002C52.5394 54.2738 51.7049 54.8158 50.537 55.2702C49.6565 55.6134 48.3305 56.0194 45.8916 56.1302C43.2549 56.2514 42.4628 56.2756 35.7826 56.2756C29.1024 56.2756 28.3125 56.2514 25.6765 56.1302ZM25.4694 10.9322C22.8064 11.0534 20.9867 11.4754 19.3976 12.0934C17.7518 12.7316 16.3585 13.5878 14.9663 14.977C13.5741 16.3662 12.7195 17.7608 12.081 19.4056C11.4626 20.9948 11.0403 22.8124 10.9191 25.4738C10.7958 28.1394 10.7676 28.9916 10.7676 35.7808C10.7676 42.57 10.7958 43.4222 10.9191 46.0878C11.0403 48.7494 11.4626 50.5668 12.081 52.156C12.7195 53.7998 13.5743 55.196 14.9663 56.5846C16.3583 57.9732 17.7518 58.8282 19.3976 59.4682C20.9897 60.0862 22.8064 60.5082 25.4694 60.6294C28.138 60.7506 28.9893 60.7808 35.7826 60.7808C42.5759 60.7808 43.4286 60.7526 46.0958 60.6294C48.759 60.5082 50.5774 60.0862 52.1676 59.4682C53.8124 58.8282 55.2066 57.9738 56.5989 56.5846C57.9911 55.1954 58.8438 53.7998 59.4842 52.156C60.1026 50.5668 60.5268 48.7492 60.6461 46.0878C60.7674 43.4202 60.7956 42.57 60.7956 35.7808C60.7956 28.9916 60.7674 28.1394 60.6461 25.4738C60.5248 22.8122 60.1026 20.9938 59.4842 19.4056C58.8438 17.7618 57.9889 16.3684 56.5989 14.977C55.2088 13.5856 53.8124 12.7316 52.1696 12.0934C50.5775 11.4754 48.7588 11.0514 46.0978 10.9322C43.4306 10.811 42.5779 10.7808 35.7846 10.7808C28.9913 10.7808 28.138 10.809 25.4694 10.9322Z"
                fill="url(#paint1_radial_7092_54471)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_7092_54471"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(17.4144 61.017) scale(65.31 65.2708)"
                >
                  <stop offset="0.09" stop-color="#FA8F21" />
                  <stop offset="0.78" stop-color="#D82D7E" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_7092_54471"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(41.1086 63.257) scale(51.4733 51.4424)"
                >
                  <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0" />
                  <stop offset="1" stop-color="#8C3AAA" />
                </radialGradient>
              </defs>
            </svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
            <svg
              className="rounded-md transition-all duration-300 group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z"
                fill="#006699"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          <Link
            href="/"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6]"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6]"
          >
            ABOUT
          </Link>
          {/* <Link
            href="/services"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6]"
          >
            SERVICES
          </Link> */}
          {/* Services Dropdown */}
          <div className="relative w-full">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center w-full text-black text-[13px] font-semibold hover:text-[#15b8a6] justify-between"
            >
              SERVICES
              <svg
                className={`w-4 h-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isServicesOpen && (
              <div className="mt-2 flex flex-col space-y-2">
                <Link
                  href="/services/service1"
                  className="text-black text-[13px] font-normal pl-4 hover:text-[#15b8a6]"
                >
                  Service 1
                </Link>
                <Link
                  href="/services/service2"
                  className="text-black text-[13px] font-normal pl-4 hover:text-[#15b8a6]"
                >
                  Service 2
                </Link>
                <Link
                  href="/services/service3"
                  className="text-black text-[13px] font-normal pl-4 hover:text-[#15b8a6]"
                >
                  Service 3
                </Link>
                <Link
                  href="/services/service4"
                  className="text-black text-[13px] font-normal pl-4 hover:text-[#15b8a6]"
                >
                  Service 4
                </Link>
                <Link
                  href="/services/service5"
                  className="text-black text-[13px] font-normal pl-4 hover:text-[#15b8a6]"
                >
                  Service 5
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/portfolio"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6]"
          >
            PORTFOLIO
          </Link>
          {/* <Link
            href="/blog"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6]"
          >
            BLOG
          </Link> */}
          <Link
            href="/contact"
            className="text-black text-[13px] font-semibold hover:text-[#15b8a6]"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
