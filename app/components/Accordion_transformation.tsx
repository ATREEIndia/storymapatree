'use client'

import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import Video from './Video'

interface BodyProps {
  update_img: (img: string) => void
}

interface StorySection {
  id: string
  title: string
  content: React.ReactNode
  imageUrl: string
}

const storySections: StorySection[] = [
  {
    id: '1',
    title: 'Improved Quality of Water',
    imageUrl: '/t1.png',
    content: (
      <div>
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li>Water tests show higher dissolved oxygen levels.</li>
          <li>Invasive water hyacinth disappears.</li>
          <li>Native aquatic plants recover.</li>
          <li>The water surface grows clear and free of weeds.</li>
          <li>Algal blooms reduce.</li>
        </ul>
        <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/waterquality_transformation.mp4" />
      </div>
    ),
  },
  {
    id: '2',
    title: 'Walking pathways along the lake',
    imageUrl: '/t2.png',
    content: (
      <div>
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li>Uncemented pathways allow visitors to connect with the landscape.</li>
          <li>Repurposed construction material and quarry waste serve as canvases showcasing the lake's biodiversity.</li>
          <li>Artworks, retaining the natural texture of the rocks, help people anticipate what they might encounter at the lake.</li>
          <li>Repurposed tyres, debris and Lantana serve as seats.</li>
        </ul>
        <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/creatures%20on%20canvas.mp4" />
      </div>
    ),
  },
  {
    id: '3',
    title: 'Introduction of native species',
    imageUrl: '/t3.png',
    content: (
      <ul className="list-disc px-4 space-y-2">
        <li>The local fisherfolk reintroduce native fish species.</li>
        <li>Native plant species, prioritised for all planting efforts, thrive under people's care.</li>
        <li>Orchids, placed carefully on trees, bloom seasonally.</li>
      </ul>
    ),
  },
  {
    id: '4',
    title: 'Pollinators Thrive',
    imageUrl: '/t4.png',
    content: (
      <div>
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li>Carefully curated butterfly host and nectar plants, along with bee-friendly species, welcome diverse wildlife visitors.</li>
          <li>Bee hotels provide ample nesting spaces for solitary bees.</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="md:w-1/2">
            <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/pollinator%20thrive%20butterfly.mp4" />
          </div>
          <div className="md:w-1/2">
            <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/bee_resort_transformation.mp4" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: '5',
    title: 'Biodiversity Improves',
    imageUrl: '/t5.png',
    content: (
      <div>
        <ul className="list-disc px-4 mb-4 space-y-2">
          <li>Bird species, like cormorants, Oriental darters, stilts, ducks and even pelicans, throng to the lake in healthy numbers.</li>
          <li>The floating islands turn nesting grounds for resident water birds.</li>
          <li>The crowning moment is the return of the Pied kingfisher, which seeks clean water to dive and hunt for fish.</li>
        </ul>
        <Video url="https://atree-communication.s3.amazonaws.com/Storymap_media/Biodiversity_transformation.mp4" />
      </div>
    ),
  },
  {
    id: '6',
    title: 'Community Stewardship',
    imageUrl: '/t6.png',
    content: (
      <ul className="list-disc px-4 space-y-2">
        <li>A self-sustaining model takes shape at Venkateshpura Lake.</li>
        <li>Sustained community-driven efforts transform the lake from a neglected waterbody into a vibrant public space.</li>
        <li>The lake attracts a lot of footfall and active daily use by residents.</li>
        <li>The Lake Forum is well-informed about potential pollution sources and knows whom to alert during issues like algal blooms.</li>
        <li>Members regularly document and share photos of birds, sunrises and sunsets, building pride and a sense of connection.</li>
        <li>Through the lake trust, residents take charge of the emerging challenges.</li>
        <li>Stage is set for a long-term, community-driven model of lake restoration.</li>
      </ul>
    ),
  },
]

const scrollToElement = (id: string, offset = 500) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
}

interface ItemProps {
  section: StorySection
  index: number
  isOpen: boolean
  onToggle: (id: string, index: number) => void
}

const AccordionItem = memo(({ section, index, isOpen, onToggle }: ItemProps) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <button
      id={`trans${index}`}
      onClick={() => onToggle(section.id, index)}
      className="w-full px-6 py-5 flex items-center justify-between"
      aria-expanded={isOpen}
    >
      <div className="flex items-center gap-4">
        <span className="w-10 h-10 rounded-full bg-[#087f9b] text-white flex items-center justify-center font-bold text-lg shrink-0">
          {index + 1}
        </span>
        <h2 className="md:text-xl text-sm font-bold text-slate-800 text-left">{section.title}</h2>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 text-slate-700 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="p-6 text-slate-700 leading-relaxed text-sm">{section.content}</div>
    </div>
  </div>
))

AccordionItem.displayName = 'AccordionItem'

const Accordion_transformation = memo(({ update_img }: BodyProps) => {
  const [openId, setOpenId] = useState<string | null>(null)
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggleSection = useCallback(
    (id: string, index: number) => {
      const isOpening = openId !== id
      setOpenId(prev => (prev === id ? null : id))
      if (isOpening) {
        if (scrollTimer.current) clearTimeout(scrollTimer.current)
        scrollTimer.current = setTimeout(() => scrollToElement(`trans${index}`), 300)
      }
    },
    [openId]
  )

  useEffect(() => {
    const activeIndex = storySections.findIndex(s => s.id === openId)
    update_img(activeIndex >= 0 ? storySections[activeIndex].imageUrl : '/t0.png')
  }, [openId, update_img])

  useEffect(() => () => { if (scrollTimer.current) clearTimeout(scrollTimer.current) }, [])

  return (
    <div className="max-w-4xl mx-auto mt-0">
      <p className="text-center mt-12 pb-8 text-slate-400 text-sm">
        Click on each section to expand and explore the story
      </p>
      <div className="space-y-4">
        {storySections.map((section, index) => (
          <AccordionItem
            key={section.id}
            section={section}
            index={index}
            isOpen={openId === section.id}
            onToggle={toggleSection}
          />
        ))}
      </div>
    </div>
  )
})

Accordion_transformation.displayName = 'Accordion_transformation'
export default Accordion_transformation
