let furnitureDataState = [];

const getFurnitureDataState = () => {
    return [...furnitureDataState];
};

const getFurnitureDataStateByIndex = (idx) => {
    return { ...furnitureDataState[idx] };
};

const setFurnitureDataState = (data) => {
    if (Array.isArray(data)) {
        furnitureDataState = [...data];
    } else {
        furnitureDataState = [...furnitureDataState, { ...data }];
    }
    // console.log(furnitureDataState);
};

export {
    getFurnitureDataState,
    getFurnitureDataStateByIndex,
    setFurnitureDataState,
}