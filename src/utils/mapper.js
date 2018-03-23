export function mapDishToReviewIds(dishes) {
  const reviewIds = dishes
    .map(dish => dish.reviewIds)
    .reduce((arr, ele) => [...arr, ...ele], []);
  return reviewIds;
}
