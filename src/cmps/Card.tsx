export function Card() {
    return (
        <section className="card">
            <div className="card-details">
                <h2>Gal Ben David</h2>
                <h3>Full Stack Developer</h3>

                <div className="links">
                    <button className="btn btn-light download-btn">Get my resume</button>
                    <a href="https://github.com/Gal-Ben-David" target="_blank">
                        <img className="github-icon" src="/img/intro/github.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/gal-ben-david-202158233/" target="_blank">
                        <img className="linkedin-icon" src="/img/intro/linkedin.png" />
                    </a>
                </div>

            </div>


        </section>

    )
}