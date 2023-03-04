const API = "http://localhost:8000/products";
const closeModalBtn = document.getElementById("close-modal");
// add Product
const titleInp = document.getElementById("title-inp");
const priceInp = document.querySelector("#price-inp");
const imageInp = document.querySelector("#image-inp");
const addBtn = document.querySelector("#add-btn");

titleInp.addEventListener("blur", (e) => console.log("blur"));

const addProduct = async (newProduct) => {
  try {
    await fetch(API, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    closeModalBtn.click();
    getProducts();
  } catch (error) {
    console.log(error);
  }
};

addBtn.addEventListener("click", () => {
  const newProduct = {
    title: titleInp.value,
    price: priceInp.value,
    image: imageInp.value,
  };
  for (key in newProduct) {
    if (!newProduct[key].trim()) {
      return alert("заполните поля");
    }
  }
  addProduct(newProduct);
});

//  getProducts
const productList = document.getElementById("product-list");

async function getProducts() {
  try {
    const res = await fetch(API, { method: "GET" });
    const products = await res.json();
    productList.innerHTML = null;
    products.forEach((item) => {
      productList.innerHTML += `
        <div class="col-sm-6 col-lg-3 mb-4 mb-xl-4">
         <div class="product-item bg-light overflow-hidden py-2">
          <div class="product-img overflow-hidden position-relative">
            <img src="${item.image}" alt="" class="img-fluid" />
            <div class="position-absolute product-action">
           
            <a onclick="deleteProduct(${item.id})" class="btn btn-outline-dark"
              ><i class="fa fa-trash"></i
            ></a>
          </div>
          </div>
          <div class="product-caption text-center py-3">
            <h6 class="text-dark mb-2 font-weight-bold">
             ${item.title}
            </h6>
            <div
              class="price d-flex justify-content-center align-items-center mb-2"
            >
              <h4 class="m-0 mr-1">$${item.price}</h4>
              <del>$${
                item.price - Math.floor((Math.random() * item.price) / 2)
              }</del>
            </div>
          </div>
        </div>
      </div>
        `;
    });
  } catch (error) {
    console.log(error);
  }
}
getProducts();

// deleteproduct
async function deleteProduct(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  getProducts();
}
