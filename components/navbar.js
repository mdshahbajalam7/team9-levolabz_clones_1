import { useState } from "react";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const dropDown = () => {
    setNav(!nav);
  };

  const dropDownClose = () => {
    setNav(false);
  };

  return (
    <div className="w-[100%] top-0 sticky bg-white scroll drop-shadow-sm z-50 px-5 pb-2 xl:px-0 xl:py-3 xl:pt-5">
      <div className=" lg:w-[80%] mx-[auto]">
        <div className="flex justify-between  ">
          <div className="pl-3 pt-2 xl:pt-1 pb-2">
            {/* <svg
              width="124"
              height="45"
              viewBox="0 0 124 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M46.0151 16.0221H52.5628V11.6616H34.964V16.0221H41.5116V33.4884H46.0169V16.0221H46.0151ZM52.8349 18.607V27.9436C52.8298 28.6919 52.9446 29.4363 53.175 30.1483C53.3931 30.8219 53.7291 31.4515 54.1674 32.0076C54.6253 32.5756 55.2143 33.0239 55.8837 33.314C56.6436 33.6422 57.4648 33.8045 58.2924 33.7901C60.0785 33.7901 61.4622 33.0733 62.4436 31.6395H62.4837V33.4884H66.7709V18.607H62.4296V26.8953C62.4584 27.6418 62.2148 28.3733 61.7442 28.9535C61.2889 29.4924 60.6279 29.7628 59.7558 29.7628C58.8837 29.7628 58.2366 29.5047 57.8093 28.9866C57.382 28.4686 57.1709 27.7762 57.1709 26.9041V18.607H52.8349ZM78.8232 18.4448C78.0359 18.437 77.2598 18.6323 76.5698 19.0116C75.863 19.4172 75.303 20.0364 74.9703 20.7802H74.9302V18.607H70.8V33.4884H75.0593V26.9634C75.0593 25.6122 75.3814 24.5715 76.0256 23.8413C76.6698 23.111 77.5273 22.7453 78.5982 22.7442C79.0658 22.7372 79.5329 22.774 79.9936 22.8541V18.593C79.6115 18.4933 79.2181 18.4434 78.8232 18.4448ZM84.743 16.1023C85.1029 16.1097 85.4605 16.0435 85.794 15.908C86.1275 15.7724 86.4298 15.5703 86.6825 15.314C86.9347 15.0634 87.1348 14.7654 87.2713 14.4371C87.4078 14.1089 87.4781 13.7569 87.4781 13.4015C87.4781 13.046 87.4078 12.694 87.2713 12.3658C87.1348 12.0375 86.9347 11.7396 86.6825 11.489C86.4296 11.2329 86.1272 11.031 85.7938 10.8955C85.4603 10.76 85.1028 10.6936 84.743 10.7006C84.3921 10.6971 84.0442 10.766 83.721 10.9028C83.3978 11.0396 83.1063 11.2415 82.8645 11.4959C82.3596 12.0029 82.076 12.6894 82.076 13.4049C82.076 14.1205 82.3596 14.8069 82.8645 15.314C83.1071 15.5667 83.399 15.7671 83.7221 15.9027C84.0452 16.0383 84.3926 16.1062 84.743 16.1023ZM86.9616 18.607V33.4884H82.6011V18.607H86.9616ZM104.927 33.4831V24.2285C104.932 23.4749 104.824 22.7247 104.608 22.0029C104.402 21.3257 104.079 20.6899 103.653 20.1244C103.21 19.5493 102.63 19.0933 101.967 18.7971C101.203 18.4578 100.373 18.2911 99.5372 18.3087C99.2838 18.3127 99.0312 18.3378 98.7819 18.3837C98.4072 18.4532 98.0373 18.5464 97.6744 18.6628C97.2006 18.8151 96.7581 19.0514 96.368 19.3605C95.9467 19.6812 95.5948 20.0841 95.3337 20.5448H95.2918V18.607H90.9837V33.4884H95.311V25.2227C95.2865 24.477 95.5303 23.7473 95.9982 23.1663C96.4575 22.614 97.1221 22.3372 97.9918 22.336C98.8616 22.3349 99.5081 22.5983 99.9314 23.1262C100.362 23.6529 100.577 24.3506 100.578 25.2192V33.4884L104.927 33.4831ZM119.477 18.607V20.407H119.423C119.081 19.9916 118.68 19.6295 118.231 19.3326C117.832 19.0607 117.394 18.8497 116.932 18.7064C116.571 18.5944 116.203 18.5081 115.83 18.4483C115.532 18.4028 115.232 18.3801 114.931 18.3802C113.925 18.3713 112.931 18.5946 112.026 19.0326C111.166 19.4421 110.405 20.0315 109.793 20.761C109.194 21.4864 108.722 22.3079 108.398 23.1907C108.063 24.0829 107.892 25.0284 107.894 25.9814C107.877 27.3008 108.183 28.6042 108.785 29.7785C109.364 30.9043 110.245 31.8466 111.33 32.4994C112.461 33.1791 113.76 33.5283 115.08 33.5076C116.921 33.5076 118.351 32.8454 119.367 31.5209H119.421V33.2215C119.433 33.8293 119.322 34.4333 119.095 34.9971C118.903 35.4744 118.597 35.8972 118.203 36.2285C117.826 36.5383 117.394 36.7749 116.93 36.9262C116.442 37.0837 115.932 37.162 115.42 37.1581C114.459 37.1581 113.681 36.893 113.086 36.3628C112.505 35.8566 112.114 35.1676 111.977 34.4093L107.965 35.5657C108.098 36.2769 108.37 36.9546 108.767 37.5593C109.676 38.9562 111.047 39.9896 112.639 40.4791C113.598 40.785 114.599 40.9363 115.605 40.9273C116.715 40.94 117.82 40.763 118.871 40.4041C119.825 40.0754 120.703 39.5568 121.451 38.8797C122.214 38.165 122.799 37.2815 123.159 36.3C123.583 35.1553 123.791 33.9416 123.771 32.7209V18.607H119.477ZM118.496 28.6517C117.805 29.3219 116.88 29.6966 115.918 29.6966C114.955 29.6966 114.03 29.3219 113.339 28.6517C112.649 27.9541 112.305 27.0581 112.305 25.964C112.288 25.4705 112.372 24.9789 112.552 24.5192C112.732 24.0595 113.004 23.6413 113.351 23.2901C114.039 22.6159 114.963 22.2383 115.926 22.2383C116.889 22.2383 117.814 22.6159 118.502 23.2901C118.848 23.6401 119.12 24.0572 119.3 24.5157C119.48 24.9742 119.564 25.4647 119.548 25.957C119.549 27.0547 119.201 27.9529 118.502 28.6517H118.496Z"
                fill="#212121"
              ></path>
              <path
                d="M21.2895 12.0471L0.0296512 45V37.7948C0.0296512 35.5517 -0.0889535 33.1884 0.148256 30.9453C0.248506 29.5 0.650769 28.0918 1.32907 26.8116C3.92791 22.5593 6.6436 18.4256 9.36105 14.1732C9.76071 13.4942 10.3296 12.9305 11.0123 12.537C11.6949 12.1436 12.4679 11.9339 13.2558 11.9285C15.8564 12.0471 18.4552 12.0471 21.2895 12.0471Z"
                fill="#212121"
              ></path>
              <path
                d="M28.9657 0C26.3686 2.36163 24.0052 4.725 21.6401 6.85116C19.4546 8.83571 16.6729 10.0398 13.7302 10.275C9.24244 10.5122 4.75465 10.275 0.148256 10.275V0H28.9657Z"
                fill="#212121"
              ></path>
            </svg> */}
            <Image src="/image/logo.png" alt="logo" width={50} height={0} />
          </div>
          {nav ? (
            <XMarkIcon
              className="h-8 m-2 sm:mt-5 xl:hidden"
              onClick={dropDownClose}
            />
          ) : (
            <Bars3Icon
              className="h-8 m-2 sm:mt-6 xl:hidden"
              onClick={dropDown}
            />
          )}

          <div className="hidden xl:flex xl:flex-row xl:gap-12 xl:pr-[10px] pt-3 xl:text-[18px] cursor-pointer">
            <p className=" border-t-0 border-r-0 border-l-0 border-blue-700 hover:border-b-2  font-light">
              How it Works
            </p>
            <p className=" border-t-0 border-r-0 border-l-0 border-blue-700 hover:border-b-2  font-light">
              Portfolio
            </p>
            <p className=" border-t-0 border-r-0 border-l-0 border-blue-700 hover:border-b-2  font-light">
              Contact Us
            </p>
            <div className=" border-t-0 border-r-0 border-l-0 relative group/item">
              <p className="flex gap-2 items-center font-light pb-3">
                Services We Offer{" "}
                <ChevronDownIcon className="w-4 fill-blue-500 group-hover/item:rotate-180 border-2 border-blue-500 rounded-full" />
              </p>

              <div className="absolute w-80 bg-white border border-gray-400 px-4 origin-center -right-[80%] group/edit invisible xl:group-hover/item:visible">
                <p className="flex items-center justify-between py-3 font-400 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                  Web Development{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                  Mobile Applications{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                  Custom Softwares{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                  UI/UX{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                  Graphic Design{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                  SEO Optimization{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                  Performance Marketing{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                  Staff Augmentation{" "}
                </p>
              </div>
            </div>

            <div className=" border-t-0 border-r-0 border-l-0 border-blue-700 hover:border-b-2 relative group/item">
              <p className="flex gap-2 items-center font-light pb-3">
                Login{" "}
                <ChevronDownIcon className="w-4 fill-blue-500 group-hover/item:rotate-180 border-2 border-blue-500 rounded-full" />
              </p>
              <div className="absolute w-60 bg-white border border-gray-400 px-4 py-3 origin-top-left -right-[100px] group/edit invisible xl:group-hover/item:visible">
                <p className="mb-2 font-semibold">Developers</p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500 hover:text-blue-500">
                  AI Services{" "}
                  <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500 hover:text-blue-500">
                  AI Services{" "}
                  <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
                </p>
                <p className="my-2 mt-3 font-semibold">Client</p>
                <p className="flex items-center justify-between py-3 font-semibold text-gray-500 hover:text-blue-500">
                  AI Services{" "}
                  <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
                </p>
              </div>
            </div>
          </div>
        </div>
        {nav && (
          <div className="absolute bg-white sm:w-[94%] md:w-[96%] w-full overflow-y-scroll">
            <div className="flex flex-col px-3 gap-[10px] mt-4">
              <button className="border border-blue-600 rounded-md py-3 font-semibold text-lg text-blue-600">
                Hire a Team
              </button>
              <button className="border border-blue-600 rounded-md py-3 font-semibold text-lg text-blue-600">
                Hire Developers
              </button>
              <button className="border border-blue-600 rounded-md py-3 font-semibold text-lg text-blue-600">
                Apply for Jobs
              </button>
            </div>
            <div className="px-3 mt-5">
              <p className="font-semibold ">Explore Services</p>
              <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500">
                AI Services{" "}
                <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
              </p>
              <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500">
                Cloud Services
                <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
              </p>
              <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500">
                Application Engineering Services{" "}
                <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
              </p>
            </div>
            <div className="px-3 mt-5">
              <p className="font-semibold ">Developers</p>
              <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500">
                Login <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
              </p>
              <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500">
                Create an Account
                <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
              </p>
            </div>
            <div className="px-3 mt-5">
              <p className="font-semibold ">Client</p>
              <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500">
                Login <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
