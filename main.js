const materials = [
  "Hylian Rice",
  "Big Hearty Truffle",
  "Tabantha Wheat",
  "Raw Prime Meat",
  "Hateno Cheese",
  "Bird Egg",
  "Goat Butter",
  "Fresh Milk",
  "Cane Sugar",
  "Raw Bird Thigh",
]
const meals = []

const cook = (ingredientsArray) => {
  if (
     === "Big Hearty Truffle" &&
     === "Hylian Rice"
  ) {
    meals.push("Mushroom Rice Balls")
  }
}

cook([materials[1], materials[0]])
cook([materials[7], materials[8], materials[5]])

console.log("MEALS:")
console.log("---------------")
for (const meal of meals) {
  console.log(meal)
}
