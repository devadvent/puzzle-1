const { twitterHandle } = require('../twitter')

test('Twitter handle should be given', () => {
    expect(twitterHandle).toBeTruthy()
})
