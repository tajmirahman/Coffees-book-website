// get all favorite
const getAllFavorite = () => {
    const all = localStorage.getItem('favorites');
    if (all) {
        const favorite = JSON.parse(all);
        return favorite;
    }
    else {
        return [];
    }
}

// add all favorite
const addAllFavorite = (coffee) => {
    const favorites = getAllFavorite();
    const isExit = favorites.find(fav => fav.id === coffee.id);
    if (isExit) {
        alert('all ready added');
        return;
    }
    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

// remove all favorite

const removeAllFavorite = id => {
    const favorites = getAllFavorite();
    const remaining = favorites.filter(fav => fav.id != id);
    localStorage.setItem('favorites', JSON.stringify(remaining));

}



export { addAllFavorite, getAllFavorite, removeAllFavorite }