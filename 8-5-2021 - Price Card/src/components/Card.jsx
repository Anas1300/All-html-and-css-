import React from "react";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card__info">
          <h1 className="card__label">Beginner</h1>
          <p className="card__description">For freelancers</p>
          <div className="card__price">
            <h2>5</h2>
            <p>per month</p>
          </div>
          <ul className="card__list">
            <li className="card__listitem">1 user</li>
            <li className="card__listitem">50gb of storage</li>
            <li className="card__listitem">3 projects</li>
          </ul>
        </div>
        <button class="card__btn">Add to Cart</button>
      </div>
    </>
  );
};

export default Card;
