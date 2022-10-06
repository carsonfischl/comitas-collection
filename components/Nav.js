import React from "react";
import { GiRomanShield } from 'react-icons/gi';
import { GiGreekSphinx } from 'react-icons/gi';
import { GiMedievalPavilion } from 'react-icons/gi';
import { GiTowerBridge } from 'react-icons/gi';


export default function App() {
  return (
    <nav className="flex w-100 self-auto h-11 bg-gray-500 border-b-4 z-10 shadow-neutral-500 m-6">
      <div className="flex-1 flex justify-center mr-auto self-auto">
        <a className="mx-2 p-2">
          <GiRomanShield size="2em" />
        </a>
      </div>
      <div className="mx-12">
        L
      </div>
      <div className="flex-1 flex justify-center ml-auto">
        <a className="mx-2 p-4">LINK THREEE</a>
        <a className="mx-2 p-4">LINK FOOOUR</a>
    </div>
    </nav>
  );
}
