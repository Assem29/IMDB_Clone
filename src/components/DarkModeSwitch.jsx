"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted ,setmounted ] = useState(false);
  useEffect(()=>setmounted(true),[]);
  const current = theme === "system" ? systemTheme : theme;
  return <>{mounted&&( current === "dark" ? (<MdOutlineLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={()=>setTheme('light')}/>) : (<BsMoonFill  className="text-xl cursor-pointer  hover:text-amber-500" onClick={()=>setTheme('dark')} />))}</>;
}
