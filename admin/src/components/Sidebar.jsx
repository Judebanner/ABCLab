import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { GiArchiveRegister } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { FcViewDetails } from "react-icons/fc";
import { BiTestTube } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
const Sidebar = () => {
  return (
    <>
        <button type="button" className="text-gray-500  hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
        <span className="sr-only">Toggle Navigation</span>
        <svg className="flex-shrink-0 size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>

        <div id="docs-sidebar" className="hs-overlay   hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-[#000537] dark:border-gray-700">
            <div className="px-6 flex gap-[12px] items-center justify-center   ">
            <RiAdminFill className='text-[32px] text-[#D4BC36]' />
                <a className="flex  text-[32px] items-center justify-center font-semibold text-[#D4BC36]" href="#" aria-label="Brand">ADMIN</a>
            </div>
        <nav className="hs-accordion-group h-full p-6 w-full  pt-[50px] flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="space-y-1.5 flex flex-col gap-[32px]">
            
            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-[16px] text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-[#D4BC36] dark:text-slate-400 dark:hover:text-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/patient">
            <FaPerson/>
                Patient
            </a></li>
            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-[16px] text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-[#D4BC36] dark:text-slate-400 dark:hover:text-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/doctor">
            <FaUserDoctor />
                Doctor 
            </a></li>
            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-[16px] text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-[#D4BC36] dark:text-slate-400 dark:hover:text-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/technician">
            <GrUserWorker />
                Technician 
            </a></li>
            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-[16px] text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-[#D4BC36] dark:text-slate-400 dark:hover:text-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/appointmentform">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                Doctor Appoinment 
            </a></li>
            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-[16px] text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-[#D4BC36] dark:text-slate-400 dark:hover:text-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/patientregistation">
            <GiArchiveRegister />
                Patient Registation
            </a></li>
            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-[16px] text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-[#D4BC36] dark:text-slate-400 dark:hover:text-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/payment">
            <MdOutlinePayment />
                Payment 
            </a></li>
            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-[16px] text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-[#D4BC36] dark:text-slate-400 dark:hover:text-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/appointmentdetails">
            <FcViewDetails />
                Appointment Details 
            </a></li>
            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-[16px] text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-[#D4BC36] dark:text-slate-400 dark:hover:text-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/testform">
            <BiTestTube />
               Add Test  
            </a></li>
            <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-[16px] text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-[#D4BC36] dark:text-slate-400 dark:hover:text-black dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/test">
            <TbReportSearch />
               Test  
            </a></li>
            </ul>
        </nav>
        </div>
    </>
  )
}

export default Sidebar