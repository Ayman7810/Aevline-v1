// CategoryItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ViewProductsByCategoryHook from '../../../hook/Producte/view-products-by-category-hook';

const CategoryItem = ({ imgSrc, id, title, amount ,category }) => {
 
    
  return (
    <div className="category-item">
      <div className="category-img-box">
        <img src={imgSrc} alt={title} width="30" />
      </div>
      <div className="category-content-box">
        <div className="category-content-flex mb-0">
          <h3 className="category-item-title">{title}</h3>
          <p className="category-item-amount">({amount})</p>
        </div>
        <Link to={`/productes-by-category/${id}`} className="category-btn text-end">عرض الكل</Link>
       
      </div>
    </div>
  );
};

export default CategoryItem;
