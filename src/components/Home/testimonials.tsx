import SectionHeading from '../ui/section-heading'

interface User {
    id: number
    title: string
    body: string
}

export default async function Testimonials() {
    const users: User[] = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    ).then((res) => {
        return res.json()
    })
    return (
        <section className="mx-auto mt-16 max-w-6xl overflow-hidden py-10">
            <SectionHeading tag="Testimonials" title="What our users say" />
            <div className="relative">
                <div className="pointer-events-none absolute top-0 h-1/2 w-full bg-linear-to-b from-white from-15% to-transparent to-80%" />
                <div className="pointer-events-none absolute bottom-0 h-1/2 w-full bg-linear-to-t from-white from-15% to-transparent to-80% lg:hidden" />

                <div className="hidden gap-12 space-y-3 md:-mx-20 md:block md:columns-3 lg:mx-0">
                    {users.slice(0, 9).map((user, key) => (
                        <div
                            key={key}
                            className="font-inter inline-block w-full rounded-2xl border border-gray-100 p-10 shadow-md"
                        >
                            <h2 className="font-medium">{user.title}</h2>
                            <p className="mt-6 text-pretty">{user.body}</p>
                        </div>
                    ))}
                </div>
                <div className="columns-1 space-y-3 px-10 py-2 md:hidden">
                    {users.slice(0, 3).map((user, key) => (
                        <div
                            key={key}
                            className="font-inter inline-block w-full rounded-2xl border border-gray-100 p-10 shadow-xs"
                        >
                            <h2 className="font-medium">{user.title}</h2>
                            <p className="mt-6 text-pretty">{user.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
