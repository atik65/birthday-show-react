import React from "react";
import style from "../Style.module.css";

const Card = ({ people, setState }) => {
  return (
    <>
      <section className={[style.main].join(" ")}>
        <div className={style.card}>
          <h3>{people.length} people have birthday today</h3>
          {people.map((person) => {
            const { Name } = person;
            return (
              <p className={style.bd} key={Math.random()}>
                Today is Birthday {Name}{" "}
              </p>
            );
          })}
          <button
            onClick={() => {
              setState([]);
            }}
            className="btn btn-outline-success"
          >
            Clear All
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
