
var datosProductos = 
  [
    {            
    name: "Producto1",
    id: "1",
    price: "150.90",
    brand: "Sony",
    category: "Videojuegos",
    variant: "variant1",
    quantity: "quantity1"
    },
    {            
      name: "Producto2",
      id: "2",
      price: "165.90",
      brand: "Nintendo",
      category: "Videojuegos",
      variant: "variant2",
      quantity: "quantity2"
      },
      {            
        name: "Producto3",
        id: "3",
        price: "100.90",
        brand: "xBox",
        category: "Videojuegos",
        variant: "variant3",
        quantity: "quantity3"
      },
      {            
        name: "Producto4",
        id: "4",
        price: "215.90",
        brand: "Nintendo",
        category: "Videojuegos",
        variant: "variant4",
        quantity: "quantity4"
      },
      {            
        name: "Producto5",
        id: "5",
        price: "150.90",
        brand: "Sony",
        category: "Videojuegos",
        variant: "variant5",
        quantity: "quantity5"
      },
      {            
        name: "Producto6",
        id: "6",
        price: "200",
        brand: "xBox",
        category: "Videojuegos",
        variant: "variant6",
        quantity: "quantity6"
      }
  ]
  
  var dataSlider = [
    { 
    id: "1",           
    name: "Slider1",
    position: "1"
    },
    { 
      id: "2",          
      name: "Slider2",
      position: "2"
      },
    {  
      id: "3",          
      name: "Slider3",
      position: "3"
    }
  ];
  

function addToCart(datos){
    // Measure adding a product to a shopping cart by using an 'add' actionFieldObject
    // and a list of productFieldObjects.
    dataLayer.push({
      'event': 'addToCart',
      'ecommerce': {
        'currencyCode': 'PEN',
        'add': {                       // 'add' actionFieldObject measures.
          'products': [{               //  adding a product to a shopping cart.
            'name': datos.name,
            'id': datos.id,
            'price': datos.price,
            'brand': datos.brand,
            'category': datos.category,
            'variant': datos.variant,
            'quantity': datos.quantity
          }]
       }
      }
    });
};


//PROMOTION CLICK
function productClick(productObj) {
  dataLayer.push({
    'event': 'productClick',
    'ecommerce': {
      'click': {
        'actionField': {'list': 'Search Results'},      // Optional list property.
        'products': [{
          'name': productObj.name,                      // Name or ID is required.
          'id': productObj.id,
          'price': productObj.price,
          'brand': productObj.brand,
          'category': productObj.cat,
          'variant': productObj.variant,
          'position': productObj.position
         }]
       }
     },
     'eventCallback': function() {
       document.location ="#" //productObj.url
     }
  });}

$(".add-to-cart").on("click",function(){
  var indice = $(this).data("id");
  console.log(indice);
  addToCart(datosProductos[indice])
})
$(".click-product").on("click",function(){
  var indice = $(this).data("id");
  console.log(indice);
  productClick(datosProductos[indice])
})
//virtual event categoria
function virtualEventCategoria(name){
    // var nameCategory = name.getAttribute('name');
    dataLayer.push({
        'event': 'virtualEvent',
        'category':'home',
        'action': 'seleccionar categoria',
        'label':name
    });
}
function virtualEventMenu(name){
  // var nameCategory = name.getAttribute('name');
  dataLayer.push({
      'event': 'virtualEvent',
      'category':'home',
      'action': 'Selecionar menú',
      'label':name
  });
}
//MOUSE OVER

$(".nav-item").mouseover(function(){
  var name = $("div ul li.active a").data("name");
  console.log(name)
  virtualEventMenu(name)
});






function promotionImpression(datos){
  dataLayer.push({
  'event': "promotionView",
  'ecommerce': {
    'promoView': {
      'promotions': [                     //Array of promoFieldObjects.
       {
         'id':datos.id,            //ID or Name is required.
         'name': datos.name,
         'creative': datos.creative,
         'position': datos.position
       }]
    }
    }
  })
}

$('#carouselExampleIndicators').on('slide.bs.carousel', function() {
  var position= $("div div.active").data("id");
  console.log(position)
   promotionImpression(dataSlider[position]);
})


