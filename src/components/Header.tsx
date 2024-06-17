'use client';
import Logo from './Logo';
import { ThemeContext, ToggleThemeButton } from '@/lib/theme';
import Link from 'next/link';
import { useContext } from 'react';

type Props = {
  className?: string;
};
export default function Header({ className }: Props) {
  const { setTheme, theme } = useContext(ThemeContext);

  console.log('Remount');
  function onThemeChange() {
    setTheme?.((theme) => (theme === 'light' ? 'dark' : 'light'));
    console.log(theme);
  }

  return (
    <div
      className={`navbar bg-base-100 sticky top-0 bg-gradient-to-r from-blue-500 opacity-91 ${className}`}
    >
      {/* Header LEFT */}
      <div className="navbar-start">
        {/* Burger nav (mobile) */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Nav />
          </ul>
        </div>

        {/* LOGO */}
        <Link className="cursor-pointer" href="/">
          <Logo />
        </Link>
      </div>

      {/* Header MID */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Desktop Nav */}
          <Nav />
        </ul>
      </div>

      {/* Header RIGHT */}
      <div className="navbar-end">
        <ToggleThemeButton />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li className="sm:hidden">
        <a>Login</a>
        <ul>
          <AuthLinks />
        </ul>
      </li>

      <li className="hidden sm:flex">
        <details>
          <summary>Login</summary>
          <ul className="p-2">
            <AuthLinks />
          </ul>
        </details>
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>
    </>
  );
}

function AuthLinks() {
  return (
    <>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Register</Link>
      </li>
    </>
  );
}
