'use client'
import React from 'react'
import Tag from './tag'
import { motion } from 'motion/react'

export default function SectionHeading({
    tag,
    title,
    body,
}: {
    tag?: string
    title: string
    body?: string
}) {
    const TagComponent = motion.create(Tag)

    return (
        <div className="mx-auto max-w-7xl lg:px-8">
            <div className="mx-auto grid max-w-2xl place-items-center text-center">
                {tag && (
                    <TagComponent
                        transition={{ duration: 0.5 }}
                        initial={{
                            opacity: 0,
                            translateY: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            translateY: 0,
                        }}
                    >
                        {tag}
                    </TagComponent>
                )}
                <motion.h2
                    transition={{ duration: 0.5, delay: 0.2 }}
                    initial={{
                        opacity: 0,
                        translateY: 100,
                    }}
                    whileInView={{
                        opacity: 1,
                        translateY: 0,
                    }}
                    className="font-dm-sans mt-2 bg-linear-180 from-[#000000] to-[#001354] to-75% bg-clip-text py-2 text-3xl font-bold tracking-tight text-balance text-transparent sm:text-5xl sm:text-balance"
                >
                    {title}
                </motion.h2>
                {body && (
                    <motion.p
                        transition={{ duration: 0.5, delay: 0.2 }}
                        initial={{
                            opacity: 0,
                            translateY: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            translateY: 0,
                        }}
                        className="font-inter mt-6 px-8 text-xl leading-8 font-normal text-pretty text-[#010D3E]"
                    >
                        {body}
                    </motion.p>
                )}
            </div>
        </div>
    )
}
