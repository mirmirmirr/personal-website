import React, { Component } from "react";
import MasonLayout from "../resources/MasonLayout";
import { GroupCard } from "../resources/Cards"

export default function Portfolio() {
  return (
    <div className="flex flex-col m-8 mt-0">
        <div className="flex flex-row items-center justify-center gap-4 mb-[2vh]">
            <GroupCard />
            <GroupCard />
            <GroupCard />
        </div>


        <MasonLayout />
    </div>
  );
}