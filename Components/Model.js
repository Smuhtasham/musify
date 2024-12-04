"use client";
import React, { useState } from "react";
import SignupModel from "./SignupModel";
import MusicModel from "./MusicModel";

const Model = () => {
  return (
    <>{false ? <MusicModel /> : <SignupModel />}</>
  );
};

export default Model;
