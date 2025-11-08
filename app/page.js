"use client";

import React from "react";
import Header from "../components/Header";
import FormComponent from "@/components/FormComponent";

export default function Home() {
  return (
    <div>
      <Header />
      <FormComponent />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10">
        {/* Code */}
      </div>
    </div>
  );
}
