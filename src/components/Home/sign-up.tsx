import Link from 'next/link'
import { Button } from '../ui/button'
import SectionHeading from '../ui/section-heading'
import { IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'

export default function Signup() {
    return (
        <section className="overflow-hidden bg-linear-180 from-[#FFFFFF] to-[#D2DCFF] lg:mt-20">
            <div className="relative mx-auto max-w-xl pt-32 pb-28">
                <SectionHeading
                    title="Sign up for free today"
                    body="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts."
                />
                <div className="mt-10 flex justify-center">
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
                <Image
                    src="/images/emojistar.png"
                    className="absolute top-0 left-10 hidden -translate-x-full md:inline"
                    width={350}
                    height={350}
                    alt="emojistar"
                />
                <Image
                    src="/images/helix2.png"
                    className="absolute right-20 bottom-0 hidden translate-x-full md:inline"
                    width={350}
                    height={350}
                    alt="helix2"
                />
            </div>
        </section>
    )
}
