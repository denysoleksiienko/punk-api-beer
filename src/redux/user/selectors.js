export const isFavorites = (state) => (id) => state.user.favorites.includes(id);
export const isLikes = (state) => (id) => state.user.likes.includes(id);
