const { findRudolf } = require('../utils/rescue')
const forests = require('./forests')

forests.forEach(forestTest => {
    test(forestTest.description, () => {
        const { col, row } = findRudolf(forestTest.test)
        expect(row).toBe(forestTest.result.row)
        expect(col).toBe(forestTest.result.col)
    })
})
