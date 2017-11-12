# warsawjs-workshop-12-taboo-card-game

A Vue.js workshop project. Goal of this workshops is to create clone of the Taboo card game.

## Rules

Taboo is a guessing game. Active player (Clue-giver) receives card with 1 big word and 5 smaller ones. He/She has to describe bold word without using 5 denied words to other players before specified number of seconds passes.  

There are two variants of a game:

1. Without teams, where system randomly selects card and starts timer
2. With two teams of at least two players each. Active user gives clues to the rest of his/her team. 

Second variant is more interesting for us, so we'll implement it during workshops. 


## User stories

As a user:
1. I can add new players to each team
2. I can specify how long each round lasts and how much points is needed to win
3. I can start game

As a team member after game start:
1. I can see which team should guess now, score of each team and how much time is left for current round
2. I can see randomly selected card (1 desired word + 5 denied)
3. I can tell if team won or lost current round
4. When any team reaches limit, I can see "game over" label and statistics. 

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
