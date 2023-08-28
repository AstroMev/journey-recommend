import { useState } from "react";
import TinderCard from "react-tinder-card";

let db = [];

db.push({
  name: "5",
  url: "./img/sea.jpg",
  follower: "今オススメしている人はいません",
  request: "パイオニアになりませんか？",
  sorry: false,
});
db.push({
  name: "4オススメなし",
  url: "./img/black.png",
  follower: "",
  request: "",
  sorry: true,
});

db.push({
  name: "3",
  url: "./img/white.jpg",
  follower: "廃墟博士 鎌田さん がオススメしています",
  request: "同僚の 田口さん が一緒に生きたがっています",
  sorry: false,
});

db.push({
  name: "2",
  url: "./img/right.jpg",
  follower: "虫取り達人 大谷さん がオススメしています",
  request: "同僚の 川口さん が一緒に生きたがっています",
  sorry: false,
});

db.push({
  name: "1",
  url: "./img/climbing.jpg",
  follower: "宇都宮山登り達人 山田さん がオススメしています",
  request: "同僚の 田中さん が一緒に生きたがっています",
  sorry: false,
});

// const URL = "https://preview.studio.site/live/NxqgkrMxq1/1";

function Simple() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  function onClickHandleA() {
    const url = "https://preview.studio.site/live/NxqgkrMxq1/1";
    // window.location.href = url;
    window.open(url, "_blank");
  }

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1>あなたにオススメの旅</h1>
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              {character.sorry ? (
                <div>
                  <h2>お気に召しませんでしたか…</h2>
                  <h3>仕方がない。それではこのプランは如何でしょう…？</h3>
                </div>
              ) : (
                <div>
                  <h2>{character.follower}</h2>
                  <h3>{character.request}</h3>
                </div>
              )}
            </div>
            {character.sorry ? (
              <h2></h2>
            ) : (
              <button onClick={onClickHandleA}>プラン予約へ！！！</button>
              // <a href={URL}>プラン予約へ！！！</a>
            )}
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default Simple;
