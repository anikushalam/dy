import { Link } from "react-router-dom";
import style from "./InsHome.module.css";

function VideoGalery() {
  const videos = [
    {
      thumbnail: "https://dpu.edu.in/img/compression/smu-visit.jpg",
      link: "https://www.youtube.com/watch?v=8WSGm84Pbm4&ab_channel=DPU",
      desc: "Honorable Chancellor Dr. P D Patil Sir Visit to Semey Medical University, Kazakhstan",
    },
    {
      thumbnail:
        "https://dpu.edu.in/img/compression/dr-sebastiano-andreana.jpg",
      link: "https://www.youtube.com/embed/N6yfDbNf_AQ?rel=0",
      desc: "Visit to DPU Dental Implant Centre by Dr. Sebastiano Andreana, NY, USA",
    },
    {
      thumbnail: "https://dpu.edu.in/img/compression/dr-vijay-bhatkar.jpg",
      link: "https://www.youtube.com/watch?v=AeXjynxLeck",
      desc: "Padma Bhushan Dr. Vijay P Bhatkar, Indian Computer Scientist, Visits Dr. D Y Patil Vidyapeeth, Pune",
    },
  ];
  return (
    <div className={style.videogalery}>
      <div className={style.galerybox}>
        {videos?.slice(0, 3)?.map((video, index) => (
          <Link key={index} className={style.galeryItem} to={video?.link}>
            <img src={video?.thumbnail} alt="thumbnail" />
            <p>{video?.desc}</p>
          </Link>
        ))}
      </div>
      <div className={style.viewmorebtn}>
        <Link to={"/video-gallery"}>View More</Link>
      </div>
    </div>
  );
}

export default VideoGalery;
