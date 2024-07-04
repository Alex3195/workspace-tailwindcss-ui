import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const ErrorLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const errorFunc = (status) => {
    switch (status) {
      case 400:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                400
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">Bad Request</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 401:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase ">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                401
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">Unauthorized</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 402:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                402
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">Payment Required</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 403:
        return (
          <div cclassName="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase ">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                403
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">Forbidden</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 404:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase underline-offset-3 ">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                404
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono ">Not Found</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 405:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                405
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">Method Not Allowed</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 406:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                406
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">Not Acceptable</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 500:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                500
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">
              Internal Server Error
            </p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 501:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                501
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">Not Implemented</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 502:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                502
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">Bad Gateway</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 503:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                503
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">Service Unavailable</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 504:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                504
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">Gateway Timeout</p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );
      case 505:
        return (
          <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
            <h2 className="text-5xl mb-5 uppercase">
              Status code :
              <span className="text-red-900 text-6xl font-mono font-bold ml-3">
                505
              </span>
            </h2>
            <p className="text-7xl font-bold font-mono">
              HTTP Version Not Supported
            </p>
            <button
              type="button"
              className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Backward
            </button>
          </div>
        );

      default:
        return (
          <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
            {location.state.message && (
              <p className="text-7xl font-bold font-mono">
                {location.state.message}
              </p>
            )}
            {location.state.status && (
              <p className="text-7xl font-bold font-mono">
                The error status code is {location.state.status}
              </p>
            )}
            {(location.state.message || location.state.status) && (
              <button
                type="button"
                className="inline-flex mt-5 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => navigate(-1)}
              >
                <AiOutlineArrowLeft
                  className="-ml-1 mr-3 h-5 w-5"
                  aria-hidden="true"
                />
                Backward
              </button>
            )}
          </div>
        );
    }
  };
  return <>{errorFunc(location.state.status)}</>;
};
export default ErrorLayout;
