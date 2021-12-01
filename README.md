![](README.cover.jpg)

# Dev Advent Calendar 🎅 Puzzle 1 - Rescue Rudolf

Weeks before Christmas, Santa's reindeers start practicing their flying in order to be fit for the big night.
Unfortunately, one of them (Rudolf) crashed and landed in the forest 🌲

Now, Santa 🎅 needs YOUR help to find him.

## 🧩 The puzzle

The forest is a two-dimensional array of trees (array with array for each row). In one of the fields, there is however Rudolf (🦌) to be found.
Here is an example forest (the real forest is to be found in [data/forest.js](data/forest.js)):

```javascript
const forest = [
    ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
    ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
    ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
    ['🌲', '🌲', '🦌', '🌲', '🌲', '🌲'],
    ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
    ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
    ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
    ['🌲', '🌲', '🌲', '🌲', '🌲', '🌲'],
]
```

-   Complete the function `findRudolf` in the [utils/rescue.js](utils/rescue.js) file in order to return the correct column (`col`) and row (`row`) of where Rudolf is to be found.
-   The column and rows start with 0
-   Return -1 on both values if not found

## 🚢 Ship your solution

Check out the [contributing guide](https://github.com/devadvent/readme/blob/main/CONTRIBUTING.md) for details about how to participate.

In short:

-   ✨ Create your repository by [acceping the assignment](ENTER_CLASSROOM_LINK_HERE)
-   🧩 Solve the puzzle
-   🤖 Test your solution
-   🚀 Upload your changes to the `main` branch

## 🙌 Participation link

In order to participate, you need to enter the following link and accept the assignment:
[ENTER_CLASSROOM_LINK_HERE](ENTER_CLASSROOM_LINK_HERE)

## 💻 Use this project

### ⏳ Install the dependencies

Install the dependencies with

```bash
yarn install
```

or

```bash
npm install
```

### ⚙️ Run the code

Run the code with

```bash
yarn dev
```

or

```bash
npm run dev
```

### 🤖 Test your solution

This puzzle is equipped with automated tests (in the `./tests` folder). In order for your solution to qualify for winning the daily prize, **all** tests need to pass.

To run these tests, execute one of the following commands in your console:

```bash
yarn test
```

or

```bash
npm test
```