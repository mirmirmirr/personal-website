import React, { Component } from "react";
import MasonryExample from "../resources/MasonryExample";
import { GroupCard } from "../resources/Cards"

export default function Portfolio() {
  return (
    <div className="flex flex-col m-8 mt-0">
        <div>
            <GroupCard />
            <GroupCard />
            <GroupCard />
        </div>


        <MasonryExample />
    </div>
  );
}