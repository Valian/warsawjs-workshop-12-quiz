# warsawjs-workshop-12-be-a-milionaire

A Vue.js workshop project. Goal of this workshops is to create clone of the Be a Milionaire game. It's a very popular TV show, where contestants can win up to 1 mln $. 

## Rules

User will face set of 10-15 questions with increasing difficulty levels. Each question has 4 answers, only one correct. First incorrect answer ends game.

## Vue.js features used in workshops

**Template syntax**
* [x] interpolation (plus `v-once`)
* [x] raw html `v-html`
* [x] one-way binding `v-bind` (`:`)
* [x] conditionals `v-if` / `v-else` / `v-show`
* [x] events `v-on` (`@`)
* [x] two-way binding `v-model`
* [x] iteration `v-for`
* [ ] special directive `v-cloak`
* [x] class and styles
* [x] where to put javascript?
* [x] transitions and animations

**Components**
* [x] data 
* [x] methods
* [x] computed
* [ ] watch
* [x] slots (default / named)
* [ ] lifecycle
* [x] nested components
* [x] props 
* [x] single file components
* [x] pure functional components

**Reusability**
* [x] mixins
* [x] plugins
* [ ] extends
* [x] filters
* [x] custom events
* [x] custom model

**Advanced**
* [x] render function
* [x] reactivity in depth
* [ ] State management with bus

**Vuex**
* [x] store structure
* [x] access from components
* [x] mutations
* [x] actions
* [x] getters
* [x] namespaces

**Router**
* [x] templates `router-link` and `router-view`
* [x] defining routes `name`, `path`, `component`, `children`
* [x] programmatic navigation `$router.push` and `$router.go`
* [x] advanced - guards 
* [x] advanced - meta and multiple components

**Tooling**
* [x] vue-cli

## Start

To start, go to branch `starting-point`  ([here](https://github.com/Valian/warsawjs-workshop-12-quiz/tree/starting-point)) and follow instructions in **README.md** file.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
