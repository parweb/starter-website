const products = [
  {
    id: 1,
    name: 'iphone'
  },
  {
    id: 2,
    name: 'ipad'
  }
];

const categories = [
  {
    id: 1,
    name: 'apple'
  },
  {
    id: 2,
    name: 'android'
  }
];

// // const set = ([k, v]) => list.push({ k, v });
// const set = ([k, v], list = []) => [...list, [k, v]];
// const get = (k, list) => list.filter(([first]) => first === k).map(([key, ...data]) => data);
// // list.filter(([first]) => first === k).map(result => {
// //   const [key, ...data] = result;
// //   return {data};
// // });

// const from = (event, data) => {
//   if (event === 'home.updated') return data;
// };

// const init = set(['products', products], set(['categories', categories]));

// // const test = () => JSON.stringify(get('products', init), null, 2);
// // const test = () => console.log(get('products', init));
// const test = () => from('home.updated', { get, set })(() => {});
// // console.log(list);
// // from('home.updated', get('products')).map(Sections => console.log);

// console.log(test());

//

const view = store => _set => _get => {
  _set();
  return _get;
};

const page = view({ categories, products })(() => {
  set(['Sections', [
      {
        title: 'Products',
        products
      },
      {
        title: 'Catégories',
        categories
      }
    ]]);
})(get => get('Sections').map((id, title) => '<div id="' + id + '">title : "' + title + '"</div>'));
