/* eslint-disable */
import { lazy } from 'react';
import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from 'config.js';





const dashboard = lazy(() => import('views/dashboard/Dashboard'));
const products = {
  list: lazy(() => import('views/products/list/ProductsList')),
  detail: lazy(() => import('views/products/detail/ProductsDetail')),
};
const Catogry = {
  Catogeries: lazy(() => import('views/category/catogries/index.js')),
  AddCategory: lazy(() => import('views/category/Add new category/index.js')),
};
const Brand = {
  list: lazy(() => import('views/brand/brands/index.js')),
  detail: lazy(() => import('views/brand/Add new brand/index.js')),
};
const orders = {
  list: lazy(() => import('views/orders/list/OrdersList')),
  detail: lazy(() => import('views/orders/detail/OrdersDetail')),
  tracking: lazy(() => import('views/orders/tracking/index.js'))
};
const customers = {
  list: lazy(() => import('views/customers/list/CustomersList')),
  detail: lazy(() => import('views/customers/detail/CustomersDetail')),
};
const finance = {
  clients: lazy(() => import ('views/finance/clients/index.js')),
  products: lazy(() => import ('views/finance/products/index.js')),
  analytics: lazy(() => import ('views/finance/analytics/index.js'))
}

const storefront = {
  home: lazy(() => import('views/storefront/home/Home')),
  filters: lazy(() => import('views/storefront/filters/Filters')),
  categories: lazy(() => import('views/storefront/categories/Categories')),
  detail: lazy(() => import('views/storefront/detail/Detail')),
  cart: lazy(() => import('views/storefront/cart/Cart')),
  checkout: lazy(() => import('views/storefront/checkout/Checkout')),
  invoice: lazy(() => import('views/storefront/invoice/Invoice')),
};
const shipping = lazy(() => import('views/shipping/Shipping'));
const discount = lazy(() => import('views/discount/Discount'));

const settings = {
  home: lazy(() => import('views/settings/home/Home')),
  general: lazy(() => import('views/settings/general/General')),
};

// webpage items
const Homebanner = {
  banner: lazy(() => import('views/websitPages/Home/Banner/index.js')),
  AddBanner: lazy(() => import('views/websitPages/Home/Add new banner/index.js'))
}
const RentalDetails = {
  Rental: lazy(() => import('views/websitPages/Rent/Rental Details/index.js')),
  AddRental: lazy(() => import('views/websitPages/Rent/Add new Rental/index.js'))
}
const SaleDetails={
  Sales: lazy(() => import('views/websitPages/Sale/Sale Details/index.js')),
  AddSale: lazy(() => import('views/websitPages/Sale/Add new Sale/index.js')),
}
const Services={
  Services: lazy(()=> import('views/websitPages/Services/services/index.js')),
  AdService: lazy(()=> import('views/websitPages/Services/Add new services/index.js'))
}
const AboutUS={
  AboutUS: lazy(()=> import('views/websitPages/About us/AboutUS/index.js')),
  AddAboutUs: lazy(()=> import('views/websitPages/About us/Add new AboutUS/index.js'))
}

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/dashboard`,
    },
    {
      path: `${appRoot}/dashboard`,
      component: dashboard,
      label: 'menu.dashboard',
      icon: 'shop',
    },
    {
      path: `${appRoot}/products`,
      exact: true,
      redirect: true,
      to: `${appRoot}/products/list`,
      label: 'menu.products',
      icon: 'cupcake',
      subs: [
        { path: '/list', label: 'Products', component: products.list },
        { path: '/detail', label: 'Add New Product', component: products.detail },
      ],
    },
    {
      path: `${appRoot}/categories`,
      exact: true,
      redirect: true,
      to: `${appRoot}/products/list`,
      label: 'Category',
      icon: 'cupcake',
      subs: [
        { path: '/list', label: 'Categories', component: Catogry.Catogeries },
        { path: '/detail', label: 'Add New Catogry', component: Catogry.AddCategory },
      ],
    },
    {
      path: `${appRoot}/brands`,
      exact: true,
      redirect: true,
      to: `${appRoot}/brands/list`,
      label: 'Brands',
      icon: 'cupcake',
      subs: [
        { path: '/list', label: 'Brands', component: Brand.list},
        { path: '/detail', label: 'Add New Brand', component: Brand.detail },
      ],
    },
    {
      path: `${appRoot}/orders`,
      exact: true,
      redirect: true,
      to: `${appRoot}/orders/list`,
      label: 'menu.orders',
      icon: 'cart',
      subs: [
        { path: '/list', label: 'menu.list', component: orders.list },
        { path: '/detail', label: 'menu.detail', component: orders.detail },
        { path: '/tracking', label: 'Tracking', component: orders.tracking },
      ],
    },
    {
      path: `${appRoot}/customers`,
      exact: true,
      redirect: true,
      to: `${appRoot}/customers/list`,
      label: 'Clients',
      icon: 'user',
      subs: [
        { path: '/list', label: 'menu.list', component: customers.list },
        { path: '/detail', label: 'menu.detail', component: customers.detail },
      ],
    },
    {
      path: `${appRoot}/finance`,
      exact: true,
      redirect: true,
      to: `${appRoot}/finance/clients`,
      label: 'Finance',
      icon: 'user',
      subs: [
        { path: '/clients', label: 'Clients', component: finance.clients },
        { path: '/products', label: 'Products', component: finance.products},
        { path: '/analytics', label: 'Analytics', component: finance.analytics},
      ],
    },
    
     
    //webpage items
    {
      path: `${appRoot}/dashboard`,
      component: dashboard,
      label: 'Website Pages',
      icon: 'shop',
    },


    {
      path: `${appRoot}/banner`,
      exact: true,
      redirect: true,
      to: `${appRoot}/banner/addbanner`,
      label: 'Home',
      icon: 'cupcake',
      subs: [
        { path: '/banner', label: 'Banners', component: Homebanner.banner },
        { path: '/AddBanner', label: 'Add New Banner', component: Homebanner.AddBanner },
      ],
    },
    {
      path: `${appRoot}/rentalDetails`,
      exact: true,
      redirect: true,
      to: `${appRoot}/rentalDetails/addRental`,
      label: 'Rent',
      icon: 'cupcake',
      subs: [
        { path: '/Rental', label: 'Rent Details', component: RentalDetails.Rental },
        { path: '/AddRental', label: 'Add New Rent Details', component: RentalDetails.AddRental },
      ],
    },
    {
      path: `${appRoot}/sale`,
      exact: true,
      redirect: true,
      to: `${appRoot}/sale/sales`,
      label: 'Sale',
      icon: 'cupcake',
      subs: [
        { path: '/sales', label: 'Sale Details', component: SaleDetails.Sales },
        { path: '/detail', label: 'Add New Sale Details', component: SaleDetails.AddSale },
      ],
    },
    {
      path: `${appRoot}/services`,
      exact: true,
      redirect: true,
      to: `${appRoot}/services/details`,
      label: 'Services',
      icon: 'cupcake',
      subs: [
        { path: '/services', label: 'Services', component: Services.Services },
        { path: '/addService', label: 'Add New Services', component: Services.AdService },
      ],
    },
    {
      path: `${appRoot}/aboutUS`,
      exact: true,
      redirect: true,
      to: `${appRoot}/aboutUS/aboutus`,
      label: 'About Us',
      icon: 'cupcake',
      subs: [
        { path: '/AboutUs', label: 'About Us', component: AboutUS.AboutUS },
        { path: '/AddAboutUS', label: 'Add New About Us', component: AboutUS.AddAboutUs },
      ],
    },


    // {
    //   path: `${appRoot}/storefront`,
    //   exact: true,
    //   redirect: true,
    //   to: `${appRoot}/storefront/home`,
    //   label: 'menu.storefront',
    //   icon: 'screen',
    //   subs: [
    //     { path: '/home', label: 'menu.home', component: storefront.home },
    //     { path: '/filters', label: 'menu.filters', component: storefront.filters },
    //     { path: '/categories', label: 'menu.categories', component: storefront.categories },
    //     { path: '/detail', label: 'menu.detail', component: storefront.detail },
    //     { path: '/cart', label: 'menu.cart', component: storefront.cart },
    //     { path: '/checkout', label: 'menu.checkout', component: storefront.checkout },
    //     { path: '/invoice', label: 'menu.invoice', component: storefront.invoice },
    //   ],
    // },
    // {
    //   path: `${appRoot}/shipping`,
    //   component: shipping,
    //   label: 'menu.shipping',
    //   icon: 'shipping',
    // },
    // {
    //   path: `${appRoot}/discount`,
    //   component: discount,
    //   label: 'menu.discount',
    //   icon: 'tag',
    // },
    // {
    //   path: `${appRoot}/settings`,
    //   component: settings.home,
    //   label: 'menu.settings',
    //   icon: 'gear',
    //   subs: [{ path: '/general', component: settings.general, hideInMenu: true }],
    // },
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
