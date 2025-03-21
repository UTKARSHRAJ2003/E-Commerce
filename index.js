async function fetchCategories() {  
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    return data;
}

async function populateCategory() {  
    const categories = await fetchCategories();  
    const categoryList = document.getElementById("categoriesList");
    
    //modify category name or Define a mapping for category names
    const categoryMapping = {
        "electronics": "Gadgets & Devices",
        "jewelery": "Luxury Accessories",
        "men's clothing": "Men's Fashion",
        "women's clothing": "Women's Fashion"
    };

    categories.forEach(category => {
        const categoryHolder = document.createElement("div");
        const categoryLink = document.createElement("a");
        
        //Change the category name using the mapping
        categoryLink.textContent = categoryMapping[category] || category;
       // categoryLink.textContent = category;
        categoryLink.href= "#";
        
        


        categoryHolder.classList.add("category-item", "d-flex", "align-items-center", "justify-content-center");
        categoryHolder.appendChild(categoryLink);
        categoryList.appendChild(categoryHolder);
    });
}

populateCategory();  
