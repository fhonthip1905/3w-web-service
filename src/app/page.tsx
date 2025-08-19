// import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="text-center py-5 bg-blue">
        <div className="container">
          <h1 className="display-6 fw-bold mb-3">
            Website development & consultation
          </h1>
          <p className="lead mb-4">
            Minimal, fast, and reliable. Get your site live in 7 days.
          </p>
          <a href="#contact" className="btn btn-outline-primary">
            Contact via Messenger
          </a>
        </div>
      </section>
      <Pricing />
      <Pricing />
      <Pricing />
      <Footer />
    </>
  );
}
