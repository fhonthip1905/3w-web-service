type Package = {
  title: string;
  price: string;
  features: string[];
};

const packages: Package[] = [
  {
    title: "Starter",
    price: "฿5,900",
    features: ["1-2", "ฟรีโดเมน + Hosting", "รองรับมือถือ"],
  },
  {
    title: "Business",
    price: "฿9,900",
    features: ["3–5 หน้า", "ฟอร์มติดต่อ", "Google Analytics"],
  },
  {
    title: "Premium",
    price: "฿19,900–25,000",
    features: ["5+ หน้า", "CMS + SEO", "ดูแล 30 วันหลังส่งมอบ"],
  },
];

export default function Pricing() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Pricing Packages</h2>
        <div className="row g-4">
          {packages.map(({ title, price, features }) => (
            <div key={title} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <h6 className="card-subtitle mb-3 text-primary">{price}</h6>
                  <ul className="list-unstyled">
                    {features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
