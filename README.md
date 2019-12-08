[![Build Status](https://travis-ci.org/Simonig/car-portafolio-vue.svg?branch=master)](https://travis-ci.org/Simonig/car-portafolio-vue)

# Car Portfolio

## Project setup
```
npm install
npm run server
```

## Run Tests
```
npm run test
```

## Backend dependencies

- [gts](https://github.com/google/gts): this project was initialized with gts, it provides linting configuration to enforce TS good practices.
- [express](https://github.com/expressjs/express): simple http server implementation.
- [copyfiles](https://github.com/calvinmetcalf/copyfiles): helper for moving static non TS dependencies to the corresponding build folder.
- [axios](https://github.com/axios/axios): helper simplify request, used in client and server.



## Client dependencies

For the client I used mostly the standard libraries to work with Vue

- [vue](https://vuejs.org/)
- [vue-material](https://vuematerial.io/): material design implementation for vue.
- [vue-axios](https://github.com/imcvampire/vue-axios): integrate axios with vue (not really required in this case, but might be helpful).
- [vue-router](https://router.vuejs.org/): enable routing.
- [vue-slider-component](https://github.com/NightCatSama/vue-slider-component): slider component used for the price range.
- [vuex](https://github.com/vuejs/vuex): redux implementation, allows to manage the application state in a single store, making it more predictable.

## Server routes

- "/" Client application 
- "/api/portfolio" return the list of cars, and details about maximum price and minimum price.
- "/api/porfolio/:id" find a car item by id.
- "assets/:asset-route" hacky solution for resolving image assets from different domains with cors not enabled, implementation is just for dev purpouse 