import React from 'react';
import './like.css';

const LikeComponent = () => {
    return (
        <div className="like">
        <div className="like__icon">
          <div className="like__iconwrap"></div>
          <button
            aria-label="Enregistrer dans les favoris"
            title="Enregistrer dans les favoris"
          >
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
              <path d="M16 5c2.5 0 4 1.9 4 4.2 0 1.2-.6 2.3-1.3 3.1C17.5 13.5 12 18 12 18s-5.5-4.5-6.7-5.7C4.5 11.5 4 10.4 4 9.2 4 6.9 5.5 5 8 5c1.7 0 3.3 1.6 4 3 .7-1.4 2.3-3 4-3zm0-3c-1.5 0-2.9.6-4 1.4C10.9 2.5 9.5 2 8 2 4 2 1 5.1 1 9.2c0 1.9.8 3.7 2.2 5.2 1.4 1.5 8.8 7.5 8.8 7.5s7.4-6 8.8-7.5c1.4-1.5 2.2-3.3 2.2-5.2C23 5.1 20 2 16 2z"></path>
            </svg>
          </button>
        </div>
      </div>
    );
}

export default LikeComponent;
