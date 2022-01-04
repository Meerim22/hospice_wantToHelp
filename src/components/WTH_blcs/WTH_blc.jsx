import "./WTH_blc.scss";

const userCard = (props) => {
  return (
    <div className="blc" style={{ backgroundImage: `url(${props.blcbgUrl})` }}>
      <h3 className="blc__title">{props.blctitle}</h3>
      <p className="blc__text">{props.blctext}</p>
      <button className="blc__btn"  style={{ background: `${props.blcBtnBg}` }}>
        <a href={`${props.blcaUrl}`} className="blc__btn-text">ПОДРОБНЕЕ</a>
      </button>
    </div>
  );
};

export default userCard;