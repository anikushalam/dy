import style from "./QuickLinks..module.css";

const Steps = (props) => {
  return (
    <div className={style.timeline}>
      <div className={style.steps__outer}>
        {props.details.map((item) => (
          <div key={item.id} className={style.steps__card}>
            <div className={style.steps__info}>
              <div className={`${style.text} ${style.steps__text}`}>
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
