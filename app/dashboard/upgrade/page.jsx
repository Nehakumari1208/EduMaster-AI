import React from "react";
import Card from "./Card";

function Upgrade() {
  return (
    <div className="flex flex-col gap-6 md:flex-row justify-evenly items-center p-4 mb-12">
      <Card plan={"Monthly"} type={"month"} price={"8.99$"} />
      <Card plan={"Yearly"} type={"year"} price={"64.99$"} />
    </div>
  );
}

export default Upgrade;
