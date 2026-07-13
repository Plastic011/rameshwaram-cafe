import { signatureItems } from '../data.js'

export default function SignatureItems() {
  return (
    <section className="section" id="signature">
      <h2 className="section-title">Signature Items</h2>
      <div className="grid grid-2">
        {signatureItems.map((item) => (
          <article className="food-card" key={item.id}>
            <div className="food-img" data-dish={item.id}></div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
