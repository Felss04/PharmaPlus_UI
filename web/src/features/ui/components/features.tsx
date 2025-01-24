import { BriefcaseMedical, MapPin } from 'lucide-react'
export const Features = () => {
    return (
        <section className="features py-14 bg-white h-[350px] flex items-center">
            <div className="container flex gap-28 mx-auto justify-center">
                <div className="feature flex justify-center flex-col items-center border-b-[1px] border-[#0078D7] pb-2 h-[200px]">
                    <BriefcaseMedical className="text-[#0078D7] mb-5 w-14 h-14" />
                    <h2 className="text-[1.2rem]">Calidad</h2>
                    <p className="h-16">Nuestros productos son los mejores del mercado, siéntete seguro a la hora de comprar.</p>
                </div>
                <div className="feature flex justify-center flex-col items-center border-b-[1px] border-[#0078D7] pb-2 h-[200px]">
                    <MapPin  className="text-[#0078D7] mb-5 w-14 h-14"/>
                    <h2>Domicilio</h2>
                    <p className="h-16">Entregamos tus productos de una manera rápida y segura donde estés.</p>
                </div>
            </div>
        </section>
    )
}
