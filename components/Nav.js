import React from "react";
import { GiRomanShield } from 'react-icons/gi';
import { GiGreekSphinx } from 'react-icons/gi';
import { GiMedievalPavilion } from 'react-icons/gi';
import { GiTowerBridge } from 'react-icons/gi';


export default function App() {
  return (
    <nav class="flex fixed w-screen h-11 bg-gray-500 border-b-4 z-10">
      <div class="flex-1 flex justify-center mr-auto">
        <a class="mx-2 p-2">
          <GiRomanShield size="2em" />
        </a>
      </div>
      <div class="mx-12">
        L
      </div>
      <div class="flex-1 flex justify-center ml-auto">
        <a class="mx-2 p-4">LINK THREEE</a>
        <a class="mx-2 p-4">LINK FOOOUR</a>
    </div>
    </nav>
  );
}
