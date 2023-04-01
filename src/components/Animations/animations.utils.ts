const DEFAULT_COLOR = "hsl(50deg, 100%, 50%)";

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    // Bright yellow color:
    color,
    size: random(30, 50),
    style: {
      // Pick a random spot in the available space
      top: random(-10, 100) + "%",
      left: random(0, 80) + "%",
      // Float sparkles above sibling content
      zIndex: 200,
    },
  };
};
