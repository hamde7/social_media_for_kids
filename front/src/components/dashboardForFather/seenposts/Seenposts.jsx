import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import classes from "./Seenposts.module.css";
import data from "../../../utils/slider.json";
import { useLoaderData } from "react-router-dom";
import { sliderSettings } from "../../../utils/common";
import {
  AiTwotoneHeart,
  AiOutlineHeart,
  AiTwotoneLike,
  AiTwotoneDislike,
} from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { BiLike, BiDislike } from "react-icons/bi";
function Seenposts(props) {
  const SliderButtons = () => {
    console.log("data insid seen post ");
    console.log(useLoaderData());
    const swiper = useSwiper();
    return (
      <div className={classes.slidbutton}>
        {/* <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button> */}
      </div>
    );
  };

  return (
    <section className={classes.postsection}>
      <div className={classes.postcontainer}>
        <div className={classes.flexColStart}>
          {/* <span>Seen Posts</span> */}
          <h2 className={classes.seensentence}>Seen Posts :</h2>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {props.postInfo.map((card, i) => (
            <SwiperSlide key={i}>
              <div className={classes.postcard}>
                <img src={card.attachment} alt="" />
                <span className={classes.reaction}>
                  <span className={classes.like}>
                    <BiLike />
                    <AiOutlineHeart />
                    <BiDislike />
                  </span>
                  <span className={classes.comment}>
                    <BiCommentDots />
                  </span>
                </span>

                <span>{card.caption}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Seenposts;
