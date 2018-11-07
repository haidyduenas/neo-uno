function addToCart(name,id,price,brand,category,variant,quantity){
    // Measure adding a product to a shopping cart by using an 'add' actionFieldObject
    // and a list of productFieldObjects.
    dataLayer.push({
      'event': 'addToCart',
      'ecommerce': {
        'currencyCode': 'PEN',
        'add': {                       // 'add' actionFieldObject measures.
          'products': [{               //  adding a product to a shopping cart.
            'name': name,
            'id': id,
            'price': price,
            'brand': brand,
            'category': category,
            'variant': variant,
            'quantity': quantity
          }]
       }
      }
    });
}
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
$('#carouselExampleIndicators').on('slide.bs.carousel', function intentalo(id,name,creative,position) {
  console.log($(this));

  dataLayer.push({
  'event': 
  'ecommerce': {
    'promoView': {
      'promotions': [                     //Array of promoFieldObjects.
       {
         'id': id,            //ID or Name is required.
         'name': name,
         'creative': creative,
         'position': position
       }]
    }
    }
  })
})