it("should add a new item to the cart when the item is not already present", () => {
  // Arrange
  const initialState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
  };
  const newProduct = {
    cartID: 1,
    name: "Test Product",
    price: 100,
    amount: 2,
  };
  const expectedState = {
    cartItems: [newProduct],
    numItemsInCart: 2,
    cartTotal: 200,
    shipping: 500,
    tax: 0,
    orderTotal: 700,
  };

  // Act
  const result = cartSlice.reducer(initialState, addItem({ product: newProduct }));

  // Assert
  expect(result).toEqual(expectedState);
});