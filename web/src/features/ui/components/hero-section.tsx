import { Button } from "@/components/ui/button"
import "../styles/ui.css"
// import "../styles/hero.css"
export const Herosection = () => {
    return (
        <header className="bg-[#f9f9f9] w-screen h-[calc(90vh_-_100px)]">
            <div className="w-full h-full flex mx-auto gap-2">

                <div className="left w-1/2 h-full flex items-center justify-center  relative z-10">
                    <div className="pharma-img w-[600px] h-[500px] ">
                        <img src="/assets/images/Pedidos-Pharma.webp" alt="Banner Pedidos PharmaPlus" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="right w-1/2 h-full flex items-center justify-center relative pl-3">
                    <div className="wrapper h-[80%] bg-gray-200/50 w-full flex items-center justify-center rounded-l-3xl">

                        <div className="pharma-text flex flex-col gap-10">
                            <h1 className="text-5xl font-bold text-left text-[#0078D7]">PharmaPlus  <span className="text-[#222]"> tu farmacia preferida</span><span className="text-rose-500 font-bold">.</span> </h1>
                            <p>
                                Que esperas para realizar tus pedidos de medicamentos, suplementos y gastables en PharmaPlus.

                            </p>
                            <div className="btns flex gap-5">
                                <Button variant="outline" onClick={() => {
                                    const products = document.getElementById("products")
                                    products?.scrollIntoView({ behavior: "smooth" })
                                }}>Explorar productos</Button>
                                <Button>Iniciar Sesión</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src="Pedidos-Pharma.png" alt="Banner Pedidos PharmaPlus" className="banner-image" />
            <img src="Pedidos-Pharma.png" alt="Banner Pedidos PharmaPlus" className="banner-image" /> */}
            </div>
        </header>
    )
}
