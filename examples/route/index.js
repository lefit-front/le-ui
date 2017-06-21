import config from './routes.json';

const registerRoute = (config) => {
  let route = [];
  config.map(item =>
    item.list.map(page =>
      route.push({
        name: page.name,
        path: page.path,
        component: require(`../pages${page.path}`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    )
  );

  return { route, navs: config };
};

const route = registerRoute(config);

route.route.push({
  path: '/'
});

export const navs = route.navs;
export default route.route;
