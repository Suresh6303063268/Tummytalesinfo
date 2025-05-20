import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    window.addEventListener("storage", () => setIsLoggedIn(!!localStorage.getItem("token")));
    return () => window.removeEventListener("storage", () => {});
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const surveyId = localStorage.getItem("surveyId");
    if (!userId) return;
    const fetchSurvey = async (id) => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/mom/survey/${id}?userId=${userId}`);
        setFormData(res.data.survey || {});
      } catch (e) { console.error(e); }
    };
    if (surveyId) fetchSurvey(surveyId);
    else {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/mom/all/surveys?userId=${userId}`)
        .then(res => {
          const latest = res.data.surveys?.[0];
          if (latest) {
            localStorage.setItem("surveyId", latest._id);
            fetchSurvey(latest._id);
          }
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
        setShowPregnancyDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isPregnancyActive = [
    "/pregnancy-map", "/essential-tests", "/thali", "/set-up-baby", "/monitor-health"
  ].includes(location.pathname);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Mom-to-Mom Network", path: "/mom-network" },
    { name: "Ask Amma", path: "/ask-amma" },
    { name: "Resources", path: "/resources" }
  ];

  return (
    <motion.nav
      className="relative overflow-visible z-40"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative blobs */}
      <span className="absolute -top-10 -left-16 w-32 h-32 bg-pink-200 rounded-full opacity-30 transform rotate-45"></span>
      <span className="absolute -bottom-12 right-10 w-48 h-48 bg-blue-200 rounded-full opacity-20"></span>

      <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-100 via-pink-50 to-blue-100 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => navigate('/') }>
            <img src="Pregent.png" alt="Logo" className="w-12 h-12 transform group-hover:scale-110 transition" />
            <span className="ml-2 text-2xl font-extrabold text-rose-600 group-hover:text-rose-500 transition">
              Tummy<span className="text-rose-400">Tales</span>
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center space-x-8 text-gray-800 font-medium">
            <li className="relative">
              <button
                onClick={() => navigate('/pregnancy-map')}
                onMouseEnter={() => setShowPregnancyDropdown(true)}
                onMouseLeave={() => setShowPregnancyDropdown(false)}
                className={`px-3 py-2 rounded-md transition ${isPregnancyActive ? 'bg-rose-600 text-white' : 'text-rose-600 hover:bg-rose-100 hover:text-rose-700'}`}
              >
                Pregnancy Map
              </button>
              {showPregnancyDropdown && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 bg-white rounded-xl shadow-xl w-52 py-2 text-gray-800"
                >
                  {["Your Essential Tests","What's Your Thali","Set Up For The Baby","Monitor Your Health"].map((text, idx) => {
                    const path = ["/essential-tests","/thali","/set-up-baby","/monitor-health"][idx];
                    return (
                      <li key={path}>
                        <button
                          onClick={() => { navigate(path); setShowPregnancyDropdown(false); }}
                          className={`block w-full text-left px-4 py-2 transition ${location.pathname === path ? 'bg-rose-50 font-semibold' : 'hover:bg-gray-100'}`}
                        >{text}</button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </li>
            {navLinks.map(link => (
              <li key={link.path} className="relative group">
                <button
                  onClick={() => navigate(link.path)}
                  className={`px-3 py-2 rounded-md transition ${location.pathname === link.path ? 'bg-rose-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                >
                  {link.name}
                </button>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-3xl text-rose-600 focus:outline-none" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <motion.div
            className="lg:hidden bg-pink-50 border-t border-pink-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col">
              <li>
                <button
                  onClick={() => { navigate('/pregnancy-map'); setShowMenu(false); }}
                  className={`w-full text-left px-6 py-3 font-medium transition ${isPregnancyActive ? 'text-rose-600' : 'text-gray-800'}`}
                >Pregnancy Map</button>
              </li>
              {['/','/mom-network','/ask-amma','/resources'].map((path,i) => (
                <li key={path} className="border-t border-pink-200">
                  <button
                    onClick={() => { navigate(path); setShowMenu(false); }}
                    className={`w-full text-left px-6 py-3 font-medium transition ${location.pathname === path ? 'text-rose-600' : 'text-gray-800'}`}
                  >{['Home','Mom-to-Mom Network','Ask Amma','Resources'][i]}</button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Profile Icon */}
        <div ref={dropdownRef} className="absolute right-6 top-4">
          <motion.div
            className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <CgProfile className="text-white text-xl" />
          </motion.div>
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="mt-2 w-44 bg-white rounded-xl shadow-lg py-2 text-gray-800"
            >
              {['Home','Supporters'].map((txt, idx) => (
                <button
                  key={txt}
                  onClick={() => { navigate(idx===0?'/':'/supporters'); setShowDropdown(false); }}
                  className="block w-full text-left px-4 py-2 transition hover:bg-pink-50"
                >{txt}</button>
              ))}
              <button
                onClick={async () => {
                  const surveyId = localStorage.getItem("surveyId");
                  if (surveyId) navigate(`/profile-display/${surveyId}`);
                  else alert("No profile found.");
                  setShowDropdown(false);
                }}
                className="block w-full text-left px-4 py-2 transition hover:bg-pink-50"
              >Profile</button>
              {isLoggedIn ? (
                <button
                  onClick={() => { localStorage.clear(); navigate('/'); }}
                  className="block w-full text-left px-4 py-2 transition hover:bg-red-100"
                >Sign Out</button>
              ) : (
                <button
                  onClick={() => { navigate('/signin'); setShowDropdown(false); }}
                  className="block w-full text-left px-4 py-2 transition hover:bg-pink-50"
                >Sign In</button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
