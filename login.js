document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("productGrid");

    // Simulación de una API
    const fetchProducts = async () => {
        return [
            {
                name: "Acetaminofén lam 500mg/100 tabletas",
                price: "RD$ 7.43",
                imageUrl: "img/acetaminophen.jpg",
            },
            {
                name: "Curitas cureband standard/100",
                price: "RD$ 1.34",
                imageUrl: "img/curitas.jpg",
            },
            {
                name: "Winasorb ultra x 52 sobre",
                price: "RD$ 22.90",
                imageUrl: "img/winasorb.jpg",
            },
            {
                name: "Acromona óvulos/100",
                price: "RD$ 36.79",
                imageUrl: "img/acromona.jpg",
            },
        ];
    };

    // Función para generar productos dinámicamente
    const renderProducts = async () => {
        const products = await fetchProducts();
        productGrid.innerHTML = ""; // Limpia el contenido anterior

        products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";

            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Más opciones de compra</button>
            `;

            productGrid.appendChild(productCard);
        });
    };

    // Cargar productos dinámicos al cargar la página
    renderProducts();
});
