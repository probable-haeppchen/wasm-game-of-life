import { Universe } from './pkg/wasm_game_of_life'

const CELL_SIZE = 5; // px

// Construct the universe, and get its width and height.
const universe = Universe.new();
const width = universe.width();
const height = universe.height();

// Give the canvas room for all of our cells and a 1px border
// around each of them.
const canvas = document.getElementById("game-of-life-canvas");
canvas.height = (CELL_SIZE + 1) * height + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;

const ctx = canvas.getContext('2d');

const renderLoop = () => {
    universe.tick();

    universe.render(ctx, CELL_SIZE);
    requestAnimationFrame(renderLoop);
};

universe.render(ctx, CELL_SIZE);
requestAnimationFrame(renderLoop);
