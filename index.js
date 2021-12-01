const { findRudolf } = require('./utils/rescue')
const forest = require('./data/forest')

const { col, row } = findRudolf(forest)
console.log(`Found Rudolf 🦌 in column ${col} and row ${row}`)
