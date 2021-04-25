const Product = require('../models/product');



exports.getAddProduct = (req, res, next) => {
  res.render('add-item', {
    pageTitle: 'Add Item',
    path: '/admin/add-item',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
   Product.fetchAll((products) => {
    res.render('all-items', {
      prods: products,
      pageTitle: 'All Items',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
 
};
