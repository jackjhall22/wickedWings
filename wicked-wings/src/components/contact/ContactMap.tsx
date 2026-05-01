export function ContactMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card aspect-video w-full">
      <iframe
        title="Wicked Wings Slaughter location map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.7!2d-97.8513!3d30.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4b6b6b6b6b6b%3A0x0!2s615%20W%20Slaughter%20Ln%20%23108%2C%20Austin%2C%20TX%2078748!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
