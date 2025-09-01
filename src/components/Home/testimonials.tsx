import { Marquee } from '../magicui/marquee'
import SectionHeading from '../ui/section-heading'

interface User {
    id: number
    title: string
    body: string
}

export default async function Testimonials() {
    const users: User[] = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts`
    ).then((res) => {
        return res.json()
    })
    return (
        <section className="relative mx-auto mt-16 max-w-6xl overflow-hidden">
            <SectionHeading tag="Testimonials" title="What our users say" />
            {/* bottom overlay */}
            <div className="pointer-events-none absolute bottom-0 z-50 h-1/2 w-full bg-linear-to-t from-white from-15% to-transparent to-80%" />
            <div className="relative mt-6 max-h-screen">
                {/* top overlay */}
                <div className="pointer-events-none absolute top-0 z-50 h-1/2 w-full bg-linear-to-b from-white from-15% to-transparent to-80%" />
                <div className="hidden grid-cols-3 gap-12 space-y-3 md:-mx-20 md:grid lg:mx-0">
                    <Marquee pauseOnHover repeat={2} vertical>
                        {users.slice(0, 5).map((user, key) => (
                            <div
                                key={key}
                                className="font-inter inline-block w-full rounded-2xl border border-gray-100 p-10 shadow-md"
                            >
                                <h2 className="font-medium">{user.title}</h2>
                                <p className="mt-6 text-pretty">{user.body}</p>
                            </div>
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover repeat={2} reverse vertical>
                        {users.slice(5, 10).map((user, key) => (
                            <div
                                key={key}
                                className="font-inter inline-block w-full rounded-2xl border border-gray-100 p-10 shadow-md"
                            >
                                <h2 className="font-medium">{user.title}</h2>
                                <p className="mt-6 text-pretty">{user.body}</p>
                            </div>
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover repeat={2} vertical>
                        {users.slice(10, 15).map((user, key) => (
                            <div
                                key={key}
                                className="font-inter inline-block w-full rounded-2xl border border-gray-100 p-10 shadow-md"
                            >
                                <h2 className="font-medium">{user.title}</h2>
                                <p className="mt-6 text-pretty">{user.body}</p>
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className="grid space-y-3 px-10 py-2 md:hidden">
                    <Marquee pauseOnHover repeat={2} vertical>
                        {users.slice(0, 5).map((user, key) => (
                            <div
                                key={key}
                                className="font-inter inline-block w-full rounded-2xl border border-gray-100 p-10 shadow-md"
                            >
                                <h2 className="font-medium">{user.title}</h2>
                                <p className="mt-6 text-pretty">{user.body}</p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}
