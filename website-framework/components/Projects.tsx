'use client'
import React, { useEffect, useState } from 'react'
import FakeTerminal from './FakeTerminal'
import { PROJECTS } from '../../constants'

const Projects = () => {
  const [shuffled, setShuffled] = useState<typeof PROJECTS>([])

  useEffect(() => { // prevent SSR mismatch
    const shuffledProjects = [...PROJECTS]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
    setShuffled(shuffledProjects)
  }, [])

  return (
    <section id="projects">
      <h2>A tasting of my work</h2>
      <div className="flex justify-around flex-col xl:flex-row bg-[radial-gradient(closest-side_at_50%_50%,_var(--radial),_transparent)] border-0 border-red-500 overflow-auto gap-10 px-10">
        {shuffled.map((proj) => (
          <FakeTerminal
            title={proj.title}
            key={proj.key}
            description={proj.description}
            technologies={proj.technologies}
            status={proj.status}
            updated={proj.lastUpdate}
            href={proj.href}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
