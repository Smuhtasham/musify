"use client";
import React, { useState } from "react";
import LogedinLeftpanel from "./LogedinLeftpanel";
import MainLeftpanel from "./MainLeftpanel";

const LeftPanel = () => {
  return (
    <>
      { false  ? (
        <LogedinLeftpanel />
      ) : (
        <MainLeftpanel />
      )}
    </>
  );
};

export default LeftPanel;
