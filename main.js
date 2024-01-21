alert("THIS IS A PRODUCT PAGE")

async function getPosts(){
    const response = await fetch ("https://dummyjson.com/products")
    const data = await response.json();
    const products=data.products
    

const result = products.map(function(post){
        return `
            <div class="product">
                <h2>${post.title}</h2>
                <img src=${post.thumbnail} />
                <p>${post.price}</p>
            </div>
        `;
    }).join('')

document.querySelector(".products").innerHTML=result;

}



getPosts();
