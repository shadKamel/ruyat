'use client'
import Image from 'next/image'
import SectionHeading from '../ui/section-heading'
import { motion } from 'motion/react'

const cards = [
    {
        image: '/cube-helix 1.png',
        title: 'Integration ecosystem',
        body: 'Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.',
    },
    {
        image: '/cube-helix 2.png',
        title: ' Goal setting and tracking',
        body: 'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.',
    },
]

export default function EverythingYouNeed() {
    return (
        <section className="mx-auto max-w-5xl overflow-x-hidden py-24 sm:py-28">
            <SectionHeading
                tag="Everything you need"
                title="Streamlined for easy management"
                body="Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
            />
            <div className="mt-16 grid place-content-center gap-5 px-3 lg:grid-cols-2">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        transition={{ duration: 0.5 }}
                        initial={{
                            opacity: 0,
                            translateX: index === 0 ? -200 : 200,
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0,
                        }}
                        className="overflow-hidden rounded-3xl border bg-white drop-shadow-lg transition-all duration-500 hover:-translate-y-5 hover:drop-shadow-xl lg:drop-shadow-[0px_7px_24px_rgba(36,38,43,0.15)] hover:lg:drop-shadow-[0px_7px_24px_rgba(36,38,43,0.25)]"
                    >
                        <div className="px-8 py-10 sm:p-6 lg:px-20">
                            <header className="flex justify-center">
                                <Image
                                    src={card.image}
                                    width={350}
                                    height={350}
                                    alt={'cube-helix ' + index}
                                />
                            </header>
                            <div className="mx-auto mt-4 max-w-md">
                                <h4 className="font-dm-sans bg-linear-180 from-[#000] to-[#001354] bg-clip-text text-center text-2xl font-bold text-transparent">
                                    {card.title}
                                </h4>
                                <p className="font-inter mt-4 text-center text-pretty text-[#010D3E]">
                                    {card.body}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
