
export function addToCart(bool) {
   let payload = {
      isLoading: bool,
      startIndex,
      endIndex
   }
   return {
      type: 'ADD_TO_CART_SUCCESS',
      isAddedToCart: bool,
   }
}