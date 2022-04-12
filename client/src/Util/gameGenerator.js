// Fisher-Yates shuffle //
const shuffle = (items) => {
  let currentIndex = items.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [items[currentIndex], items[randomIndex]] = [
      items[randomIndex],
      items[currentIndex],
    ];
  }

  return items;
};

// items are duplicated to make pairs //
const duplicate = (items) => {
  const itemsCopy = [...items];
  let newitems = items.concat(itemsCopy);
  return newitems;
};

// Sets matched property to false on all items //
const reset = (items) => {
  items.forEach((item) => {
    item.isMatched = false;
  });
  return items;
};

// Sets number of matches for the grid based on the difficulty //
// Items are shuffled twice for any items to have a chance at being on the grid //
export const gameConfig = (itemArray, difficulty) => {
  const easyItems = () => {
    let easyArray = itemArray.slice();
    shuffle(easyArray);
    while (easyArray.length > 8) {
      easyArray.pop();
    }
    return easyArray;
  };
  const intermediateItems = () => {
    let intermediateArray = itemArray.slice();
    shuffle(intermediateArray);
    while (intermediateArray.length > 16) {
      intermediateArray.pop();
    }
    return intermediateArray;
  };
  const hardItems = () => {
    let hardArray = itemArray.slice();
    shuffle(hardArray);
    return hardArray;
  };

  if (difficulty === "easy") {
    return shuffle(reset(duplicate(easyItems())));
  } else if (difficulty === "intermediate") {
    return shuffle(reset(duplicate(intermediateItems())));
  } else if (difficulty === "hard") {
    return shuffle(reset(duplicate(hardItems())));
  }
};
