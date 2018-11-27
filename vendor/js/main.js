var datosProductos = 
  [
    {
      name:"Producto1",
      sku:"1",
      brand:"Sony",
      category:"variant1",
      quantity:"1"

    },
    {
      name:"Producto1",
      sku:"2",
      brand:"Sega",
      category:"variant1",
      quantity:"1"

    },
    {
      name:"Producto1",
      sku:"3",
      brand:"Xbox",
      category:"variant1",
      quantity:"1"

    },      
    {
      name:"Producto1",
      sku:"4",
      brand:"LG",
      category:"variant1",
      quantity:"1"

    },
    {
      name:"Producto1",
      sku:"5",
      brand:"Playstation",
      category:"variant1",
      quantity:"1"

    },
    {
      name:"Producto1",
      sku:"6",
      brand:"Nintendo",
      category:"variant1",
      quantity:"1"

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