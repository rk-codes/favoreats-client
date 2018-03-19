export function mapDishToReviewIds(dishes) {
    console.log(dishes);
    const reviewIds =  dishes.map(dish => dish.reviewIds)
        .reduce( (arr, ele) => [...arr, ...ele], []);
        return reviewIds;
}