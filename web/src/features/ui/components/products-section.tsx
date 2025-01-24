import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const ProductSection = () => {
    return (
        <section className="p-14 scroll-mt-[100px]" id='products'>
            <div className="container mx-auto flex flex-col gap-8">
                <h2 className="text-4xl font-semibold text-center text-[#222]">Productos más vendidos</h2>
                <div className="grid grid-cols-4 gap-[20px]">
                    {/* <div className="product-card">
                    <img src="img/acetaminophen.jpg" alt="Acetaminofén" />
                    <h3>Acetaminofén lam 500mg/100 tabletas</h3>
                    <p>RD$ 7.43</p>
                    <button>Más opciones de compra</button>
                </div> */}
                    <Card className="hover:-translate-y-2 transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="h-[250px]">
                                <img src="/assets/images/Acetaminofen.png" alt="Acetaminofén" loading="lazy" className="w-full h-full object-contain" />
                            </CardTitle>
                            <CardDescription>Acetaminofén</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <h3>Acetaminofén lam 500mg/100 tabletas</h3>
                            <p>RD$ 7.43</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-[#0078D7]">
                                Más opciones de compra
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="hover:-translate-y-2 transition-all duration-300">
                        <CardHeader>
                            <CardTitle className=" h-[250px]">
                                <img src="/assets/images/CureBrand.png" alt="Curitas" loading="lazy" className="w-full h-full object-contain" />
                            </CardTitle>
                            <CardDescription>Curitas</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <h3>Curitas cureband standard/100</h3>
                            <p>RD$ 1.34</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-[#0078D7]">
                                Más opciones de compra
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="hover:-translate-y-2 transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="h-[250px]">
                                <img src="/assets/images/Winasorb.png" alt="Winasorb" loading="lazy" className="w-full h-full object-contain" />
                            </CardTitle>
                            <CardDescription>Winasorb</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <h3>Winasorb ultra x 52 sobre</h3>
                            <p>RD$ 22.90</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-[#0078D7]">
                                Más opciones de compra
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="hover:-translate-y-2 transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="h-[250px]">
                                <img src="/assets/images/Winasorb.png" alt="Winasorb" loading="lazy" className="w-full h-full object-contain" />
                            </CardTitle>
                            <CardDescription>Acromona</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <h3>Acromona óvulos/100</h3>
                            <p>RD$ 36.79</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-[#0078D7]">
                                Más opciones de compra
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
} 