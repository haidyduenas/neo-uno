// VirtualEvent - ClickCategoria
function clickcategoria(element) {
  dataLayer.push({
    'event': 'virtualEvent',
    'category': 'Home - Categoria',
    'action': 'Seleccionar categoría',
    'label': element.getAttribute("name")
  });
}

// VirtualEvent - ClickBarBrand 
function clickbarBrand(element) {
  dataLayer.push({
    'event': 'virtualEvent',
    'category': 'Home - BarBrand',
    'action': 'Seleccionar Suscripción',
    'label': element.getAttribute("name")
  });
}

// VirtualEvent - ClickBarNav 
function clickbarNav(element) {
  dataLayer.push({
    'event': 'virtualEvent',
    'category': 'Home - Menú',
    'action': 'Seleccionar menú',
    'label': element.getAttribute("name")
  });
}

// VirtualEvent - Banner Next - Previus 
function clickbannerNextPrevius(element) {
  dataLayer.push({
    'event': 'virtualEvent',
    'category': 'Home - Banner',
    'action': 'Seleccionar acción',
    'label': element.getAttribute("name")
  });
}

// Promotion views - Banner
function clicknavBanner(element) {
  dataLayer.push({
    'event': 'promotionView',
    'ecommerce': {
      'promoView': {
        'promotions': [          // Array of promoFieldObjects.
          {
            'id': element.getAttribute("id"),            // ID or Name is required.
            'name': element.getAttribute("name"),
            'creative': element.getAttribute("creative"),
            'position': element.getAttribute("position")
          }]
      }
    }
  });
}

// Promotion clicks - Banner
function onPromoClick(element) {
  dataLayer.push({
    'event': 'promotionClick',
    'ecommerce': {
      'promoClick': {
        'promotions': [
          {
            'id': element.getAttribute("id"),            // ID or Name is required.
            'name': element.getAttribute("name"),
            'creative': element.getAttribute("creative"),
            'position': element.getAttribute("position")
          }]
      }
    },
    'eventCallback': function () {
      document.location = 'http://store.masgamers.com/merchandising/plush/pack-peluche-pokemon.html';
    }
  });
}

// Product Clicks - Items
function onProductClick(element) {
  dataLayer.push({
    'event': 'productClick',
    'ecommerce': {
      'click': {
        'actionField': { 'list': 'Producto' },      // Optional list property.
        'products': [{
          'name': element.getAttribute("name"),       // Name or ID is required.
          'id': element.getAttribute("id"),
          'price': element.getAttribute("price"),
          'brand': element.getAttribute("brand"),
          'category': element.getAttribute("category"),
          'variant': element.getAttribute("variant"),
          'list': element.getAttribute("list"),
          'position': element.getAttribute("position")
        }]
      }
    },
    'eventCallback': function () {
      document.location = '#'
    }
  });
}

// Add to Cart - Item
function clickaddtoCart(element) {
dataLayer.push({
  'event': 'addtoCart',
  'ecommerce': {
    'currencyCode': 'USD',
    'add': {                                // 'add' actionFieldObject measures.
      'products': [{                        //  adding a product to a shopping cart.
        'name': element.getAttribute("name"),
        'id': element.getAttribute("id"),
        'price': element.getAttribute("price"),
        'brand': element.getAttribute("brand"),
        'category': element.getAttribute("category"),
        'variant': element.getAttribute("variant"),
        'quantity': element.getAttribute("quantity")
       }]
    }
  }
});
}
/*
// Remove from Cart - Item

dataLayer.push({
  'event': 'removeFromCart',
  'ecommerce': {
    'remove': {                               // 'remove' actionFieldObject measures.
      'products': [{                          //  removing a product to a shopping cart.
          'name': 'Triblend Android T-Shirt',
          'id': '12345',
          'price': '15.25',
          'brand': 'Google',
          'category': 'Apparel',
          'variant': 'Gray',
          'quantity': 1
      }]
    }
  }
});*/


// Product Impressions - Items
dataLayer.push({
  'event': 'productImpression',
  'ecommerce': {
    'currencyCode': 'USD',                       // Local currency is optional.
    'impressions': [
      {
        'name': 'Rollerblade Macroblade 84W',       // Name or ID is required.
        'id': 'fitness1',
        'price': '24.99',
        'brand': 'Rollerblade',
        'category': 'Fitness',
        'variant': 'Gray',
        'list': 'Search Results',
        'position': '1'
      },
      {
        'name': 'Casco Roll Of Fame',       // Name or ID is required.
        'id': 'casco1',
        'price': '24.99',
        'brand': 'Powerslide',
        'category': 'Accessories',
        'variant': 'Black',
        'list': 'Search Results',
        'position': '2'
      },
      {
        'name': 'Rollerblade Twister Limited Red',       // Name or ID is required.
        'id': 'urban1',
        'price': '24.99',
        'brand': 'Rollerblade',
        'category': 'Urban',
        'variant': 'Red',
        'list': 'Search Results',
        'position': '3'
      },
      {
        'name': 'Powerslide Tau',       // Name or ID is required.
        'id': 'urban2',
        'price': '24.99',
        'brand': 'Powerslide',
        'category': 'Urban',
        'variant': 'Orange',
        'list': 'Search Results',
        'position': '4'
      },
      {
        'name': 'XSJADO Avant III',       // Name or ID is required.
        'id': 'aggressive1',
        'price': '24.99',
        'brand': 'XSJADO',
        'category': 'Aggressive',
        'variant': 'Blue',
        'list': 'Search Results',
        'position': '5'
      },
      {
        'name': 'USD Sway Blue LE',
        'id': 'aggressive2',
        'price': '24.99',
        'brand': 'USD',
        'category': 'Aggressive',
        'variant': 'Skyblue',
        'list': 'Search Results',
        'position': '6'
      }]
  }
});
