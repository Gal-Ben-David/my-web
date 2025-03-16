type CardItem = {
    imgUrl: string,
    title: string,
    location: string,
    text?: string,
}

export function SmallCard({ item }: { item: CardItem }) {
    return (
        <section className="small-card">
            <div className="card-image">
                <img src={item.imgUrl} />
            </div>

            <div className="small-card-details">
                <h3>{item.title}</h3>
                <h4>{item.location}</h4>
                {item.text && <span>{item.text}</span>}
            </div>
        </section>
    )
}