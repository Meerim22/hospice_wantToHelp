import BLC from "./components/WTH_blcs/WTH_blc";
import "./app.scss";


function App() {
  const blcs = [
    {
      title: "Физические лица",
      text: "Мы стараемся исполнить мечты детей, дать передышку родителям, а также поддержать семью и после утраты ребенка.",
      bgUrl: "./images/физ-лица_bg-img.png",
      aUrl: "#",
      BtnBg: "#00AFA9",
    },
    {
      title: "Юридические лица",
      text: "Мы стараемся исполнить мечты детей, дать передышку родителям, а также поддержать семью и после утраты ребенка.",
      bgUrl: "./images/юр-лица_bg-img.png",
      aUrl: "#",
      BtnBg: "#775CA6",
    },
    {
      title: "Волонтерство",
      text: "Мы стараемся исполнить мечты детей, дать передышку родителям, а также поддержать семью и после утраты ребенка.",
      bgUrl: "./images/volunteer_bg-img.png",
      aUrl: "#",
      BtnBg: "#475174",
    },
  ];

  return (
    <div className="app">
      {blcs.map((blc, idx) => {
        return (
          <BLC
            blctitle={blc.title}
            blctext={blc.text}
            blcbgUrl={blc.bgUrl}
            blcaUrl={blc.aUrl}
            blcBtnBg={blc.BtnBg}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default App;
