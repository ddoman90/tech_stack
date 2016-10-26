# Redux:
- Reducer: a function that returns some data
- Action: an object that tells the reducer how to change its data
-- it must have a type
- state: data for our app to use
- store: an object that holds the application's datas
- do not mutate the state in reducer
- redux is not designed to work with react only
- thats why we have to import redux and react-redux
- react-redux: communication glue between react and redux
- Provider Component only can have a single component
- types of reducers in the project:
-- Library reducers
--- [{id:1, name: 'React'}, {id:2, name: 'Redux'}]
-- Selection reducer:
--- 1
- each reducer goes to separate file
- reducers produce application states
- Connect helper -> Connect Component to the Redux store
# ListView:
- ListView always creates just a visible amount of listItem
- when scrolling, it just swaps the content of the components
# Reducer:
- in a reducer you always have to return with a value. If undefined, you will
get an error
# Action Creator: javascript function which returns with an action
- export many thing, then just use the export without default; it can be imported
with import * as from ...
# MapStateToProps:
- gets called whenever to component state changes and component will rerender
# LayoutAnimation
- any element which is moving, it will be nice (fadeIn, fadeOut)
