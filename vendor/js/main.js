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

var dataSlider = [
  { 
  id: "1",           
  name: "Slider1",
  creative: "150.90",
  position: "1"
  },
  { 
    id: "2",          
    name: "Slider2",
    price: "165.90",
    position: "2"
    },
  {  
    id: "3",          
    name: "Slider3",
    price: "100.90",
    position: "3"
  }
]

// function promocionImpression(datos){
//   dataLayer.push({
//   'event': promotionView,
//   'ecommerce': {
//     'promoView': {
//       'promotions': [                     //Array of promoFieldObjects.
//        {
//          'id':datos.id,            //ID or Name is required.
//          'name': datos.name,
//          'creative': datos.creative,
//          'position': datos.position
//        }]
//     }
//     }
//   })
// }

// $('#carouselExampleIndicators').on('slide.bs.carousel', function() {
//   console.log("holi");
//   var position= $(this).data("id");
//    promocionImpression(dataSlider[position]);
// })
function sliderMove() {
  console.log("holi");
  dataLayer.push({
    'event': 'promotionView',
    'ecommerce': {
      'promoView': {
        'promotions': [          // Array of promoFieldObjects.
          {
            'id': "1",            // ID or Name is required.
            'name': "lol",
            'creative': "creative",
            'position': "position"
          }]
      }
    }
  });
}