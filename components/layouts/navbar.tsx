import React from "react";

import { SwitchLanguage } from "../switchLanguage";

export default function Navbar() {
  return (
    <nav className="border p-5 flex justify-between">
      <h1>Rental Resonance</h1>
      <SwitchLanguage />
    </nav>
  );
}
