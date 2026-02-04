const getData = () => {
    fetch("https://dummyjson.com/products?select=id,title,price,thumbnail")
        .then(successHandler)
        .catch(() => {
            alert("Something went wrong...");
        });
};

const successHandler = (res) => {
    console.log("Response-->", res);

    res.json().then(renderUI);
};

const rootElement = document.getElementById("root");
const renderUI = (data) => {
    console.log("Data -->", data);
    const { products } = data;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const div = document.createElement("div");
        div.id = "card";
        div.innerHTML = `
            <img src=${product.thumbnail} alt='product-photo'>
            <div>
                <h3>${product.title}</h3>
                <p>${product.price}</p>
            </div>
        `;

        rootElement.appendChild(div);
    }
};

getData();
