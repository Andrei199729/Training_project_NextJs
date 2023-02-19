import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StartIcon from "./star.svg";
import { KeyboardEvent, useEffect, useState } from "react";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map(
      (_rating: JSX.Element, index: number) => {
        return (
          <StartIcon
            key={index}
            className={cn(styles.star, {
              [styles.filled]: index < currentRating,
            })}
            tabIndex={isEditable ? 0 : -1}
            onClick={() => onClick(index + 1)}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) => {
              isEditable && handleSpace(index + 1, e);
            }}
          />
        );
      }
    );
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code != "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((_rating, index) => (
        <span
          key={index}
          className={cn(styles, {
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
        >
          {_rating}
        </span>
      ))}
    </div>
  );
};
