export default function Footer() {
  const socials: string[] = [
    "Facebook",
    "Twitter",
    "Instagram",
    "LinkedIn",
    "YouTube",
  ];
  return (
    <footer id="contact" className="bg-body-tertiary py-5 text-center">
      <div className="container">
        <h2 className="h5">Let us know what you think!</h2>
        <p className="mb-3">
          We create clean, fast websites. Ready to build yours?
        </p>
        <div className="d-flex justify-content-center gap-3 mb-2">
          {socials.map((s) => (
            <a key={s} href="#" className="text-primary fw-medium">
              {s}
            </a>
          ))}
        </div>
        <p className="text-muted small mb-0">
          &copy; 2025 BRIX Agency | All rights reserved
        </p>
      </div>
    </footer>
  );
}
