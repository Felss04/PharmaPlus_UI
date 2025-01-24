import { Instagram, Mail, Phone } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
        <div className="footer-left">
            <div className="footer-logo">
                <img src="/assets/images/PharmaPlus-Logo.webp" alt="PharmaPlus Logo" loading="lazy"/>
            </div>
            <div className="footer-text">
                <span>PharmaPlus</span>
                <span>Salud para tu vida, hoy y siempre.</span>
            </div>
        </div>
        <div className="footer-right">
            <p><Phone/>809-567-8989</p>
            <p><Mail /> Info@PharmaPlus.com</p>
            <p><Instagram /> PharmaPlusRD</p>
        </div>
    </div>
</footer>
  )
}
