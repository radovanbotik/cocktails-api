import React from "react";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import Cocktails from "../components/Cocktails";
export default function Home() {
  return (
    <section>
      <Form />
      <Cocktails />
    </section>
  );
}
