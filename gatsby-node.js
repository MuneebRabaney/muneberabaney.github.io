exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });

  createPage({
    path: "/showcase",
    component: require.resolve("./src/templates/showcase.js"),
    context: {
      pageID: 0,
    },
    defer: true,
  })

}
