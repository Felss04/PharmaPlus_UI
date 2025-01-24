import { BriefcaseMedical, Heart, Users } from "lucide-react"
import "../../features/ui/styles/aboutUs.css"
export const AboutUs = () => {
    return (
        <>
            <header className="hero-about">
                <h1>Conócenos</h1>
                <p>Tu salud y bienestar, nuestra prioridad.</p>
            </header>

            <section className="about-content">
                <div className="about-text">
                    <h2>Nuestra Historia</h2>
                    <p>
                        En PharmaPlus nos enorgullece ofrecer productos farmacéuticos de alta calidad. Desde nuestra fundación, nos hemos comprometido con la salud y el bienestar de las comunidades a las que servimos. Nuestro equipo está compuesto por profesionales apasionados que trabajan arduamente para garantizar que cada cliente reciba el mejor servicio.
                    </p>
                </div>
                <div className="about-image">
                    <img src="/assets/images/PharmaPlus-Logo.webp" loading="lazy" alt="Nuestra Historia" />
                </div>
            </section>

            <section className="values">
                <h2>Nuestros Valores</h2>
                <div className="value-cards">
                    <div className="value-card">
                    <Heart />
                        <h3>Compromiso</h3>
                        <p>Cuidamos a nuestros clientes como si fueran nuestra familia.</p>
                    </div>
                    <div className="value-card">
                        <BriefcaseMedical />
                        <h3>Calidad</h3>
                        <p>Garantizamos productos seguros y eficaces.</p>
                    </div>
                    <div className="value-card">
                        <Users />
                        <h3>Confianza</h3>
                        <p>Establecemos relaciones basadas en la honestidad y el respeto.</p>
                    </div>
                </div>
            </section>
        </>
    )
}