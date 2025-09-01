import Image from 'next/image'

const images = [
    { alt: 'acme', src: '/Brand_logos/acme 1.svg' },
    { alt: 'apex', src: '/Brand_logos/apex 1.svg' },
    { alt: 'celestia', src: '/Brand_logos/celestia 1.svg' },
    { alt: 'echo', src: '/Brand_logos/echo 1.svg' },
    { alt: 'pulse', src: '/Brand_logos/pulse 1.svg' },
    { alt: 'quantum', src: '/Brand_logos/quantum 1.svg' },
]

function LogoTicker() {
    return (
        <section className="container mx-auto px-10 py-6 sm:py-12">
            <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] py-8 text-5xl">
                <ul className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4 sm:[&_li]:mx-8">
                    {images.map((image, key) => (
                        <li key={key}>
                            <Image
                                width={150}
                                height={150}
                                alt={image.alt}
                                src={image.src}
                            />
                        </li>
                    ))}
                </ul>
                <ul
                    className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4 sm:[&_li]:mx-8"
                    aria-hidden="true"
                >
                    {images.map((image, key) => (
                        <li key={key}>
                            <Image
                                width={150}
                                height={200}
                                alt={image.alt}
                                src={image.src}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default LogoTicker
