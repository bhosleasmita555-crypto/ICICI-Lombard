import { useState, useEffect } from "react";
import "./HearFromUs.css";
import data from "../../data/hearFromUs.json";

export default function HearFromUs() {
  const [openVideo, setOpenVideo] = useState(null);

  // 🔒 Background scroll lock (like ICICI Lombard)
  useEffect(() => {
    document.body.style.overflow = openVideo ? "hidden" : "auto";
  }, [openVideo]);

  return (
    <>
      <section className="hear-section">
        <h2 className="hear-title">Hear from Us</h2>

        <div className="hear-grid">
          {data.map((item) => (
            <div className="hear-card" key={item.id}>
              <div
                className="hear-img"
                onClick={() => setOpenVideo(item.video)}
              >
                <img src={item.image} alt="Hear from us video" />
                <div className="play-btn">▶</div>
              </div>

              <div className="hear-content">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎥 VIDEO POPUP */}
      {openVideo && (
        <div className="video-overlay" onClick={() => setOpenVideo(null)}>
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setOpenVideo(null)}
            >
              ✕
            </button>

            <video controls autoPlay>
              <source src={openVideo} type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
