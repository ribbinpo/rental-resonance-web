import React from "react";

import { SwitchLanguage } from "../switchLanguage";

export default function Navbar() {
  return (
    <nav className="border py-2 px-6 flex justify-between items-center">
      <h1 className="font-semibold">Rental Resonance</h1>
      <SwitchLanguage />
    </nav>
  );
}
