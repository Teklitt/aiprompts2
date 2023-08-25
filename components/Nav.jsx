'use client'
import Link from 'next/link'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = false
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/ai.jpg"
          width={30}
          height={30}
          className="object-contain"
          alt="prompts for logo"
        />
        <p className="logo_text">Prompts for AI</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile image"
              />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex gap-3 md:gap-5">
              <button type="button" onClick={signIn} className="green_btn">
                Sign In
              </button>
              <button type="button" onClick={signIn} className="outline_btn">
                Sign Up
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
