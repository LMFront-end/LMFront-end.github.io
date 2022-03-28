// For Add character to Fav


const addFav = (card) => {

    return {
        type: "ADDITEM",
        payload: card
    }
}

const delFav = (card) => {

    return {
        type: "DELITEM",
        payload: card
    }
}

export { addFav, delFav }