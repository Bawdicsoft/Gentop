"use client";
import React from "react";
import HomeHeader from "./component/HomeHeader";
import Solidarity from "./component/Solidarity";
import { WalletProvider } from "./coonectWallet";
import Registration from "./component/registration";

export default function ClientLayout({ children }) {
  return (
    <WalletProvider>
      <HomeHeader />
      {children}
      <Registration />
    </WalletProvider>
  );
}
