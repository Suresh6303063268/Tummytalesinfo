import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPregnancyDropdown, setShowPregnancyDropdown] = useState(false);
  const [formData, setFormData] = useState({});

  const profileImage = "/image.png";
  const dummyImage = "/dummy-profile.png";

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const existingSurveyId = localStorage.getItem("surveyId");

    if (!userId) return;

    if (!existingSurveyId) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/mom/all/surveys?userId=${userId}`)
        .then((res) => {
          const latestSurvey = res.data?.surveys?.[0];
          if (latestSurvey) {
            localStorage.setItem("surveyId", latestSurvey._id);
            axios
              .get(`${process.env.REACT_APP_BACKEND_URL}/mom/survey/${latestSurvey._id}?userId=${userId}`)
              .then((res) => setFormData(res.data?.survey || {}))
              .catch((err) => console.error("Error fetching survey by ID:", err));
          }
        })
        .catch((err) => console.error("Error fetching all surveys:", err));
    } else {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/mom/survey/${existingSurveyId}?userId=${userId}`)
        .then((res) => setFormData(res.data?.survey || {}))
        .catch((err) => console.error("Error fetching survey by ID:", err));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  // Responsive fix: Close mobile menu if screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isPregnancyMapActive = [
    "/pregnancy-map",
    "/essential-tests",
    "/thali",
    "/set-up-baby",
    "/monitor-health"
  ].includes(location.pathname);

  return (
  <nav className="fixed top-0 left-0 w-full flex flex-wrap justify-between items-center px-4 sm:px-16 py-1 bg-[#FADADD] text-[#C85A7C] shadow-md z-30 h-20">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src="Pregent.png"
          alt="Logo"
          className="w-14 h-14 sm:w-[88px] sm:h-[98px] sm:ml-[-50px] md:w-[100px]  lg:mt-[-5px] lg:h-[74px] md:mt-[-1px] md:h-[74px] "
        />
        <div className="ml-2 border-2 border-red-500 bg-[#dd9292] p-1 sm:p-2 lg:mt-[-5px]">
          <span className="text-xl sm:text-[2rem] md:text-[1.5rem] font-extrabold tracking-wide leading-none">
            <span className="inline-block text-rose-600 -rotate-12">T</span>
            <span className="inline-block text-rose-600">u</span>
            <span className="inline-block text-rose-600 rotate-6">m</span>
            <span className="inline-block text-rose-600 -rotate-6">m</span>
            <span className="inline-block text-rose-600 rotate-3">y</span>
            <span className="inline-block text-rose-600 rotate-12">T</span>
            <span className="inline-block text-rose-600">a</span>
            <span className="inline-block text-rose-600">l</span>
            <span className="inline-block text-rose-600 -rotate-3">e</span>
            <span className="inline-block text-rose-600 rotate-6">s</span>
          </span>
        </div>
      </div>

      {/* Hamburger button */}
      <button
        className="block lg:hidden text-3xl text-[#C85A7C] z-50"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Toggle navigation"
        aria-expanded={showMenu}
      >
        {showMenu ? "×" : "☰"}
      </button>

      {/* Nav links */}
      <ul
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col absolute top-20 left-0 w-full bg-[#FADADD] text-[#C85A7C] shadow-md lg:shadow-none lg:flex lg:flex-row lg:static lg:w-auto lg:bg-transparent gap-4 lg:gap-10 px-6 py-1 lg:py-0 text-lg font-medium lg:mt-[-5px] md:mt[-20px] `}
      >
        <li>
          <a href="/" className={`px-4 py-2 rounded-lg ${location.pathname === "/" ? "bg-red-400 text-white" : "hover:bg-black hover:text-white"}`}>Home</a>
        </li>

        {/* Pregnancy Dropdown */}
        <li
          className="relative group"
          onMouseEnter={() => setShowPregnancyDropdown(true)}
          onMouseLeave={() => setShowPregnancyDropdown(false)}
        >
        <a
  className={`px-4 py-2 cursor-pointer rounded-md ${
    isPregnancyMapActive
      ? "bg-red-400 text-white font-semibold" // Active state with background color
      : "hover:bg-black text-[#C85A7C]" // Hover effect for inactive state
  }`}
>
            Pregnancy Map
          </a>
          {showPregnancyDropdown && (
            <ul className="absolute left-0 mt-1 w-48 bg-[#FFEFF2] text-[#C85A7C] shadow-lg rounded-md z-50">
              <li><a href="/essential-tests" className={`block px-3 py-2 hover:bg-[#FAD0D6] ${location.pathname === "/essential-tests" 
                 
                 ? "bg-red-400 text-white font-semibold "
        : "hover:bg-black text-[#C85A7C]"
                
                }`}>
              
              
              
              Your Essential Tests</a></li>




              <li><a
    href="/thali"
    className={`block px-4 py-2 cursor-pointer ${
      location.pathname === "/thali"
        ? "bg-red-400 text-white font-semibold "
        : "hover:bg-black text-[#C85A7C]"
    }`}
  >

    What' s Your Mom
              
              </a>
              
              </li>








              <li><a href="/set-up-baby" className={`block px-4 py-2 hover:bg-[#FAD0D6] ${location.pathname === "/set-up-baby" 
                
                 ? "bg-red-400 text-white font-semibold "
        : "hover:bg-black text-[#C85A7C]"
                
               }`}
               >
              
              Set Up For The Baby</a></li>




              <li><a href="/monitor-health" className={`block px-3 py-2 hover:bg-[#FAD0D6] ${location.pathname === "/monitor-health" 
                 
                 ? "bg-red-400 text-white font-semibold "
        : "hover:bg-black text-[#C85A7C]"
                
                
                }`}>
              
              
              
              Monitor Your Health</a></li>
            </ul>
          )}
        </li>

        <li><a href="/mom-network" className={`px-4 py-2 rounded-lg ${location.pathname === "/mom-network" ? "bg-red-400 text-white" : "hover:bg-black hover:text-white"}`}>Mom-to-Mom Network</a></li>
        <li><a href="/ask-amma" className={`px-4 py-2 rounded-lg ${location.pathname === "/ask-amma" ? "bg-red-400 text-white" : "hover:bg-black hover:text-white"}`}>Ask Amma</a></li>
        <li><a href="/resources" className={`px-4 py-2 rounded-lg ${location.pathname === "/resources" ? "bg-red-400 text-white" : "hover:bg-black hover:text-white"}`}>Resources</a></li>
      </ul>

      {/* Profile dropdown */}
      <div className="relative  lg:mt-[-5px] "  ref={dropdownRef}>
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-red-500"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <CgProfile className="text-white text-xl w-8 h-8" />
        </div>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-[#FFEFF2] rounded-lg shadow-lg z-50">
            <ul className="text-[#C85A7C] text-center">
              <li className="px-4 py-2 hover:bg-[#FAD0D6] cursor-pointer" onClick={() => { navigate("/"); setShowDropdown(false); }}>Home</li>
              <li className="px-4 py-2 hover:bg-[#FAD0D6] cursor-pointer" onClick={() => { navigate("/supporters"); setShowDropdown(false); }}>Supporters</li>
              <li className="px-4 py-2 hover:bg-[#FAD0D6] cursor-pointer" onClick={async () => {
                const surveyId = localStorage.getItem("surveyId");
                const userId = localStorage.getItem("userId");
                if (surveyId) {
                  navigate(`/profile-display/${surveyId}`);
                } else if (userId) {
                  try {
                    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/mom/all/surveys?userId=${userId}`);
                    const surveys = res.data?.surveys;
                    if (surveys?.length) {
                      const latestSurveyId = surveys[0]._id;
                      localStorage.setItem("surveyId", latestSurveyId);
                      navigate(`/profile-display/${latestSurveyId}`);
                    } else {
                      alert("No profile found.");
                    }
                  } catch (err) {
                    console.error("Error fetching surveys:", err);
                    alert("Failed to fetch profile.");
                  }
                } else {
                  alert("No profile found.");
                }
                setShowDropdown(false);
              }}>Profile</li>
              {isLoggedIn ? (
                <li className="px-4 py-2 hover:bg-red-500 text-black cursor-pointer" onClick={() => {
                  localStorage.clear();
                  setIsLoggedIn(false);
                  setShowDropdown(false);
                  navigate("/home");
                }}>Sign Out</li>
              ) : (
                <li className="px-4 py-2 hover:bg-[#FAD0D6] cursor-pointer" onClick={() => { navigate("/signin"); setShowDropdown(false); }}>Sign In</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
