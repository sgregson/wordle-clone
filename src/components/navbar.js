import { useEffect, useState } from "react";
import Link from "next/link";
import { getTheme, setTheme, updateTheme } from "../useDarkMode";

export const SSR = typeof window === "undefined";
const baseStyle = `cursor-pointer text-center text-2xl uppercase font-medium bg-white dark:bg-zinc-800 border-2 hover:border-current`;
const StyledLink = (props) =>
  props.href ? (
    <a
      {...props}
      className={`${baseStyle} ${
        // highlights on clientside nav
        !SSR && props.href === location.pathname
          ? "border-current"
          : "border-transparent"
      }`}
    />
  ) : (
    <button {...props} className={`border-transparent ${baseStyle}`}></button>
  );

const pickerOptions = { dark: "light", light: "auto", auto: "dark" };
export default function Nav(props) {
  const [themeValue, setThemeValue] = useState("auto");
  // run once clientside
  useEffect(() => {
    const value = getTheme();
    setThemeValue(value);
  }, []);

  return (
    <div
      className={`grid gap-1 grid-cols-[repeat(auto-fill,_minmax(45%,auto))] md:grid-cols-[repeat(auto-fill,_minmax(24%,auto))] ${props.className}`}
    >
      <Link passHref href="/">
        <StyledLink>home</StyledLink>
      </Link>

      <StyledLink
        onClick={() => {
          const nextTheme = pickerOptions[themeValue];
          setThemeValue(nextTheme);
          setTheme(nextTheme);
          updateTheme();
        }}
      >
        {themeValue} theme
      </StyledLink>
    </div>
  );
}
