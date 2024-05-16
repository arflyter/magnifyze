'use client';
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import logoBot1 from '@/images/bots/bot1.svg';
import logoBot2 from '@/images/bots/bot2.svg';
import logoBot3 from '@/images/bots/bot3.svg';

export function BotsPage() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
    <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
      Discover Amazing Bots{' '}
      <span className="relative whitespace-nowrap text-blue-600">
        <svg
          aria-hidden="true"
          viewBox="0 0 418 42"
          className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
          preserveAspectRatio="none"
        >
          <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749..." /> {/* SVG path */}
        </svg>
        <span className="relative">Amplify every opportunity</span>
      </span>
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
      Discover a variety of bots designed to automate tasks and increase productivity.
    </p>

    <div className="mt-10 flex justify-center gap-x-6"> {/* Call-to-action buttons */}
      <Button href="/explore">Explore Bots</Button>
     
    </div>

    <div className="mt-36 lg:mt-44"> {/* Logo showcase */}
      <p className="font-display text-base text-slate-900">Meet our featured bots</p>
      <ul
        role="list"
        className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
      >
        {[
          { name: 'Bot One', logo: logoBot1 },
          { name: 'Bot Two', logo: logoBot2 },
          { name: 'Bot Three', logo: logoBot3 },
        ].map((bot) => (
          <li key={bot.name}>
            <Image src={bot.logo} alt={bot.name} width={60} height={60} /> {/* Displaying logos */}
          </li>
        ))}
      </ul>
    </div>
  </Container>
  )
}
