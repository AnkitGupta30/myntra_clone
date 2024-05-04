import React from "react";
import { useDispatch, useSelector } from "react-redux";
import bagSlice, { bagActions } from "../store/bagSlice";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  // search id - indexOf() -> not found return -1
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddtoBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementFound ? (
          <button type="button" class="btn btn-danger btn-add-bag" onClick={handleRemove}>
            Remove
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success btn-add-bag"
            onClick={handleAddtoBag}
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeItems;
