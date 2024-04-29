import React from "react";

function Article({ title, date, preview, minutes }) {
  const defaultDate = "January 1, 1970";

  const emojis = minutes < 30 ? '☕️'.repeat(Math.ceil(minutes / 5)) : '🍱'.repeat(Math.ceil(minutes / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      <div>{emojis} {minutes} min read</div>
    </article>
  );
}

export default Article;
