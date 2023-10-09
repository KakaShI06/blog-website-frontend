# Module Bundler Explained.

I always had a hard time in understanding the webpack concept. Since the all the automated packages out there in market you really don't even need to understand in the early stage of your career, but if you really want to understand how the things work under the hood **Module Bundler** is really important. If you want to create own package or anythings, the concept of bundling is really important. Hence, let's get started.

To build website you only need three things:
1. HTML
2. CSS
3. Javascript

But nobody uses "only" just these three thing to make your own website. You might need some kind of css preprocessor like Scss, or you might replace html with library like Reactjs, then also you also need bunch of third party library so that you do not need to do everything from scratch. 

It's nearly impossible to control everything with single *js* file. Even if you did manage to do that, that file size would be too massive that increases you load time and that we do not want.

Hence, **Module Bundler** comes into picture to solve these kinds of problem. It minimize the above problems. I will be explaining you one of the famous bundler known as **Webpack**. I highly recommend to visit their [documentation](https://webpack.js.org/concepts/) to learn more. 

Some other famous bunlder are  Rollup, Parcel, and Snowpack.

Now let's explain what module bundler does.

![Alt text](http://localhost:3000/blogs/webpack.png "a title")

You see the image above? That's what bundler do. They bundle exery assets from your projects, whether it's js, html, css bundle them and make us a minified build of our project and we use that build folder, then deploy it to somewhere to use.

In simple words it takes multiple js file and combine them into single js file.



### Dependency Graph :

Any time one file depends on another, webpack treats this as a dependency. So you code may have some dependency, and that dependancy may also have their own dependancy. Bundler like webpack keeps track of how to put everything together. But first we need to put where is our **entry point** then it will look at all our imports and dependancy and piece everything together.

### Entry Point:

An entry point indicates which module webpack should use to start building out its internal dependency graph. 

By default its value is `./src/index.js`, but you can specify a different entry points by setting an entry property in the webpack configuration. For example:

**webpack.config.js**

```
module.exports = {
  entry: './something/something/index.js',
};
```

### Output:

The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to `./dist/main.js` for the main output file and to the `./dist` folder for any other generated file.

**webpack.config.js**
```
const path = require('path');

module.exports = {
  entry: './something/something/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js',
  },
};
```

Now let's code something to get real understanding.


