import { popularDishes } from '../data.js'

export default function PopularDishes() {
  return (
    <section className="section alt" id="dishes">
      <h2 className="section-title">Popular South Indian Dishes</h2>
      <div className="grid grid-3">
        {popularDishes.map((dish) => (
          <article className="dish-card" key={dish.id}>
            <div className="dish-img" data-dish={dish.id}></div>
            <div className="dish-info">
              <div className="dish-row">
                <h4>{dish.name}</h4>
                <span className="veg"></span>
              </div>
              <p>{dish.desc}</p>
              <span className="price">{dish.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
