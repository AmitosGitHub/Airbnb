import React, { useState } from "react";
import cn from "classnames";
// import { ReactComponent as Hand } from "./hand.svg";
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
// import { FcLike } from 'react-icons/fa';
// import { FcLikePlaceholder } from 'react-icons/fa';
import "../assets/styles/main.scss";

export const LikeBtn = () => {
    const [liked, setLiked] = useState(null);

    return (
        <button
            onClick={() => setTimeout(() => setLiked(!liked), 250)}

            className={cn("like-button-wrapper", { liked, }, "like-btn-preview-container")}
        >
            <div className="like-button like-btn">

                {liked && <div style={{color:'red'}}><AiFillHeart /></div>}
                {!liked && <AiOutlineHeart />}
                
                {/* <svg width="32" height="32" viewBox="0 0 32 32" role="presentation" focusable="false">
                    <path fill="currentColor" d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                    </path>
                </svg> */}
            </div>
        </button>
    );
};

export default LikeBtn;