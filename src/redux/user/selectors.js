export const isFavorites = (state) => (name) => state.user.favorites.includes(name);
export const isLikes = (state) => (name) => state.user.likes.includes(name);
export const isDisLikes = (state) => (name) => state.user.dislikes.includes(name);
