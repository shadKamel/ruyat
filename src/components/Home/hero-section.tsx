import Image from 'next/image'
import { DM_Sans, Inter } from 'next/font/google'
import { Button } from '../ui/button'
import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import Tag from '../ui/tag'
const dmSans = DM_Sans({
    subsets: ['latin'],
})
const inter = Inter({
    subsets: ['latin'],
})
export default function HeroSection() {
    return (
        <section className="relative bg-linear-190 from-[#EAEEFE] from-50% to-[#183EC2] md:overflow-hidden md:py-20 lg:overflow-visible">
            <div className="container mx-auto">
                <div className="grid gap-y-20 px-4 py-20 lg:grid-cols-2 lg:place-items-center lg:px-10 lg:py-6">
                    <div className="realtive flex max-w-md flex-col items-start py-10 lg:static lg:max-w-none lg:py-0">
                        <Tag>Version 2.0 is here</Tag>
                        <h1 className="font-dm-sans mt-4 bg-linear-180 from-[#000] to-[#001354] bg-clip-text py-4 text-6xl font-bold tracking-tighter text-balance text-transparent md:text-7xl lg:text-8xl">
                            Pathway to productivity
                        </h1>
                        <p className="font-inter mt-6 text-xl text-balance text-[#010D3E] sm:mt-10 md:text-xl">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress, motivate your
                            efforts, and celebrate your successes.
                        </p>
                        <div className="mt-10">
                            <Button size="lg" className="text-base">
                                Get For Free
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="link"
                                className="text-base"
                            >
                                <Link href="#">
                                    {' '}
                                    Learn More
                                    <IconArrowRight aria-hidden="true" />
                                </Link>
                            </Button>
                        </div>
                        <div className="absolute top-1/2 -right-80 hidden -translate-y-1/2 md:block lg:hidden">
                            <Image
                                width={700}
                                height={700}
                                src="/Visual.png"
                                alt="visual image"
                            />
                            <Image
                                width={250}
                                height={250}
                                className="animate-floating absolute top-0 left-0 hidden -translate-x-20 md:inline"
                                src="/cylinder 1.png"
                                alt="cylinder image"
                            />
                        </div>
                    </div>
                    <div className="relative md:hidden lg:block">
                        <Image
                            width={1200}
                            height={700}
                            src="/Visual.png"
                            alt="visual image"
                        />
                        <Image
                            width={250}
                            height={250}
                            className="animate-floating absolute top-0 left-0 hidden -translate-x-30 md:inline"
                            src="/cylinder 1.png"
                            alt="cylinder image"
                        />
                        <Image
                            width={250}
                            height={250}
                            className="animate-floating-reverse absolute right-0 bottom-0 hidden translate-x-10 translate-y-50 lg:inline"
                            src="/half-torus 1.png"
                            alt="half-torus image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
