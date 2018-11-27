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
}
$(".add-to-cart").on("click",function(){
  var indice = $(this).data("id");
  console.log(indice);
  addToCart(datosProductos[indice])
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
// $('#carouselExampleIndicators').on('slide.bs.carousel', function(id,name,creative,position) {
//   console.log($(this));

//   dataLayer.push({
//   'event': promotionsImpression,
//   'ecommerce': {
//     'promoView': {
//       'promotions': [                     //Array of promoFieldObjects.
//        {
//          'id': id,            //ID or Name is required.
//          'name': name,
//          'creative': creative,
//          'position': position
//        }]
//     }
//     }
//   })
// })