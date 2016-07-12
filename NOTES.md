
# Functional Programming Paradigm (Lesson 2)

## Pure Functions

### Slice vs Splice

```js
var states = ['alabama', 'virginia', 'maryland', 'DC']

states.slice(0,3)
["alabama", "virginia", "maryland"]
states.slice(0,3)
["alabama", "virginia", "maryland"]


// remove first three elements from original states array
states.splice(0,3)
["alabama", "virginia", "maryland"]

// run splice on original array, which now only has DC
states.splice(0,3)
["DC"]
```
