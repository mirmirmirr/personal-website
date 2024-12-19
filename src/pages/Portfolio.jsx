import React, { Component } from "react";
import MasonryExample from "../resources/MasonryExample";
import Header from "../resources/Header";

export default function Portfolio() {
  return (
    <div className="flex flex-col">
        {/* <Header /> */}
        <h1 className="text-3xl font-bold mb-6">React Stack Grid Example</h1>
        <MasonryExample />
    </div>
  );
}