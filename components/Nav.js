import React from "react";
import { GiRomanShield } from 'react-icons/gi';
import { GiGreekSphinx } from 'react-icons/gi';
import { GiMedievalPavilion } from 'react-icons/gi';
import { GiTowerBridge } from 'react-icons/gi';


export default function App() {
  return (
    <nav className="flex w-100 self-auto h-11 bg-gray-500 z-10 shadow-neutral-500 m-6">
      <div className="flex-1 flex justify-center mr-auto self-auto">
        <a className="mx-2 p-2 flex">
          <GiRomanShield size="2em" /> Roman
        </a>
        <a className="mx-2 p-2 flex">
          <GiGreekSphinx size="2em" /> Greek
        </a>
      </div>
      <div className="mx-12">
        L
      </div>
      <div className="flex-1 flex justify-center ml-auto">
        <a className="mx-2 p-4">LINK THREEE</a>
        <a className="mx-2 p-4">LINK FOOOUR</a>
        <button id="dropdownDefault" data-dropdown-toggle="dropdownID" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault" id="dropdownID">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black z-20">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black z-20">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black z-20">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black z-20">Sign out</a>
      </li>
    </ul>
      </div>
    </nav>
  );
}
