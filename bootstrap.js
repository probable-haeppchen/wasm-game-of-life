import("./pkg/wasm_game_of_life_bg.wasm")
    .catch(console.error)
    .then(wasm => {
        import("./index");
    });
