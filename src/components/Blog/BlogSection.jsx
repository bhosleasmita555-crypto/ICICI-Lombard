import { useState } from "react";
import "./BlogSection.css";
import blogData from "../../data/blogs.json";

export default function BlogSection() {
  if (!blogData || blogData.length < 3) return null;

  const [active, setActive] = useState(2);
  const rightBlogs = blogData.slice(2);

  const nextBlog = () => {
    setActive((prev) => (prev + 1 < blogData.length ? prev + 1 : 2));
  };

  return (
    <section className="blog-container">

      {/* LEFT SMALL CARDS */}
      <div className="blog-left">
        {[0, 1].map((i) => (
          <div className="blog-card small" key={i}>
            <img src={blogData[i].image} alt={blogData[i].title} />
            <h3>{blogData[i].title}</h3>
            <a href="#">Read more</a>
          </div>
        ))}
      </div>

      {/* RIGHT BIG CARD */}
      <div className="blog-right">

        <div className="blog-card big-image-card">

          {/* BIG IMAGE */}
          <div className="big-img-wrapper">
            <img
              src={blogData[active].image}
              alt={blogData[active].title}
            />
          </div>

          {/* TEXT BELOW */}
          <div className="big-content">
            <h3>{blogData[active].title}</h3>
            <p>{blogData[active].desc}</p>
            <a href="#">Read more</a>
          </div>

        </div>

        {/* FOOTER */}
        <div className="blog-footer">
          <div className="dots">
            {rightBlogs.map((_, i) => (
              <span
                key={i}
                className={active === i + 2 ? "active" : ""}
                onClick={() => setActive(i + 2)}
              />
            ))}
          </div>

          <button className="more-blogs" onClick={nextBlog}>
            More Blogs →
          </button>
        </div>

      </div>
    </section>
  );
}
