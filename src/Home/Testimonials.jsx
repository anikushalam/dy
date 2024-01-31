import style from "./InsHome.module.css";

function Testimonials() {
  const testimonials = [
    {
      img: "https://dpu.edu.in/images/testimonials/dr-k-kasturirangan.jpg",
      name: "Dr. K. Kasturirangan",
      text: "DPU is an Academic Model Worth Emulating",
    },
    {
      img: "https://dpu.edu.in/images/testimonials/dr-apj-abdul-kalam.jpg",
      name: "Dr. APJ Abdul Kalam",
      text: "DPU is an Academic Model Worth Emulating",
    },
    {
      img: "https://dpu.edu.in/images/testimonials/dr-raghunath-mashekar.jpg",
      name: "Dr. Raghunath Mashelkar",
      text: "DPU is Setting New Standards of Excellence & New Benchmarks",
    },
  ];
  return (
    <div className={style.testimonialsContainer}>
      <h5 className={style.testimonialsh5}>Testimonials</h5>
      <div className={style.testimonials}>
        {testimonials?.map((testimonial, index) => (
          <div className={style.testimonial} key={index}>
            <img src={testimonial?.img} alt="testimonial" />
            <h6>{testimonial?.name}</h6>
            <p>{testimonial?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
