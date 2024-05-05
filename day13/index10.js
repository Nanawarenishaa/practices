const productsData = [
    {
      image: 'headphone.jpg',
      name: 'Product 1',
      subtitle: 'Description of Product 1',
      price: '$10.99'
    },
    {
      image: 'laptop.jpg',
      name: 'Product 2',
      subtitle: 'Description of Product 2',
      price: '$19.99'
    },
    {
        image: './menshirt.jpg',
        name: 'Product 1',
        subtitle: 'Description of Product 1',
        price: '$10.99'
      },
      {
        image: './mi.jpg',
        name: 'Product 2',
        subtitle: 'Description of Product 2',
        price: '$19.99'
      },
      {
        image: './white-shirt.png',
        name: 'Product 1',
        subtitle: 'Description of Product 1',
        price: '$10.99'
      },
      {
        image: './headphone.jpg',
        name: 'Product 2',
        subtitle: 'Description of Product 2',
        price: '$19.99'
      }
    // Add more products as needed
  ];
  let sum=0;
  function renderProducts(products) {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
      totalPrice.innerHTML=`<span>0.00</span>`;
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.subtitle}</p>
      <p>${product.price}</p>
      <button onclick="addToSidebar('${product.name}', '${product.subtitle}', '${product.price}')">Add to List</button>
      `;
      productsContainer.appendChild(card);
       
    });
    
  }
  
  function addToSidebar(name, subtitle, price) {
    const listContainer = document.getElementById('list');
    const listItem = document.createElement('div');
    listItem.innerHTML = `<span>${name}</span> <span> ${subtitle}</span> ${price} </span>`;
    listContainer.appendChild(listItem);
    let numericPrice = Number(price.replace('$', ''));
    sum += numericPrice;
    const totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = `<span>${sum.toFixed(2)}</span>`;
  
  }
  
  
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  window.onload = () => {
    renderProducts(productsData);
  };