import { SmallCard } from "./SmallCard"

export function About() {
    const educationDetails = [
        {
            imgUrl: '/img/about/coding-academy-logo.jpg',
            title: 'Full Stack Developer Bootcamp',
            location: 'Coding Academy',
            id: '101'
        },
        {
            imgUrl: '/img/about/tel-aviv-university-logo.png',
            title: 'B.Sc. in Mechanical Engineering',
            location: 'Tel Aviv University',
            text: 'GAP 89.24',
            id: '102'
        }
    ]

    const workDetails = [
        {
            imgUrl: '/img/about/magenta_medical_logo.jpeg',
            title: 'Mechanical Engineer & Configuration Team Lead',
            location: 'Magenta Medical',
            id: '101'
        },
        {
            imgUrl: 'public/img/about/elbit_systems_logo.png',
            title: 'Operation QA Engineer',
            location: 'Elbit Systems',
            id: '102'
        }
    ]
    return (
        <section className="about">
            <article className="summary">
                <h2>About me</h2>
                <div>
                    <p>Hey, I'm Gal, Frontend / Full Stack developer
                        with strong background in engineering and leadership.</p>
                    <p>I hold a B.Sc. in Mechanical Engineering from Tel Aviv University,
                        and Full Stack Developers Bootcamp graduate.
                    </p>
                </div>
            </article>

            <div className="education">
                <h2>Education</h2>
                <ul className="education-list">
                    {
                        educationDetails.map(item =>
                            <li key={item.id}>
                                <SmallCard item={item} />
                            </li>
                        )}
                </ul>
            </div>

            <div className="work-experience">
                <h2>Work Experience</h2>
                <ul className="work-experience-list">
                    {
                        workDetails.map(item =>
                            <li key={item.id}>
                                <SmallCard item={item} />
                            </li>
                        )}
                </ul>
            </div>
        </section>

    )
}