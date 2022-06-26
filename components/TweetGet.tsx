import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { TTweets } from "../types/typeTweet";
import noImage from "../public/images/noimage.png";
import mapJapan from "../public/images/mapjapan.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import { TMap } from "../types/typeMap";

export const TweetGet = () => {
  const [tweets, setTweets] = useState<TTweets[]>([]);
  console.log("tweets", tweets);
  const [place, setPlace] = useState("");
  const [placeNum, setPlaceNum] = useState("");
  const [japanMap, setJapanMap] = useState<TMap>();
  console.log("japanMap", japanMap);

  useEffect(() => {
    if (japanMap !== undefined) {
      switch (placeNum) {
        case "pref1":
          setPlace(japanMap?.data.result[0].prefName);
          break;
        case "pref2":
          setPlace(japanMap?.data.result[1].prefName);
          break;
        case "pref3":
          setPlace(japanMap?.data.result[2].prefName);
          break;
        case "pref4":
          setPlace(japanMap?.data.result[3].prefName);
          break;
        case "pref5":
          setPlace(japanMap?.data.result[4].prefName);
          break;
        case "pref6":
          setPlace(japanMap?.data.result[5].prefName);
          break;
        case "pref7":
          setPlace(japanMap?.data.result[6].prefName);
          break;
        case "pref8":
          setPlace(japanMap?.data.result[7].prefName);
          break;
        case "pref9":
          setPlace(japanMap?.data.result[8].prefName);
          break;
        case "pref10":
          setPlace(japanMap?.data.result[9].prefName);
          break;
        case "pref11":
          setPlace(japanMap?.data.result[10].prefName);
          break;
        case "pref12":
          setPlace(japanMap?.data.result[11].prefName);
          break;
        case "pref13":
          setPlace(japanMap?.data.result[12].prefName);
          break;
        case "pref14":
          setPlace(japanMap?.data.result[13].prefName);
          break;
        case "pref15":
          setPlace(japanMap?.data.result[14].prefName);
          break;
        case "pref16":
          setPlace(japanMap?.data.result[15].prefName);
          break;
        case "pref17":
          setPlace(japanMap?.data.result[16].prefName);
          break;
        case "pref18":
          setPlace(japanMap?.data.result[17].prefName);
          break;
        case "pref19":
          setPlace(japanMap?.data.result[18].prefName);
          break;
        case "pref20":
          setPlace(japanMap?.data.result[19].prefName);
          break;
        case "pref21":
          setPlace(japanMap?.data.result[20].prefName);
          break;
        case "pref22":
          setPlace(japanMap?.data.result[21].prefName);
          break;
        case "pref23":
          setPlace(japanMap?.data.result[22].prefName);
          break;
        case "pref24":
          setPlace(japanMap?.data.result[23].prefName);
          break;
        case "pref25":
          setPlace(japanMap?.data.result[24].prefName);
          break;
        case "pref26":
          setPlace(japanMap?.data.result[25].prefName);
          break;
        case "pref27":
          setPlace(japanMap?.data.result[26].prefName);
          break;
        case "pref28":
          setPlace(japanMap?.data.result[27].prefName);
          break;
        case "pref29":
          setPlace(japanMap?.data.result[28].prefName);
          break;
        case "pref30":
          setPlace(japanMap?.data.result[29].prefName);
          break;
        case "pref31":
          setPlace(japanMap?.data.result[30].prefName);
          break;
        case "pref32":
          setPlace(japanMap?.data.result[31].prefName);
          break;
        case "pref33":
          setPlace(japanMap?.data.result[32].prefName);
          break;
        case "pref34":
          setPlace(japanMap?.data.result[33].prefName);
          break;
        case "pref35":
          setPlace(japanMap?.data.result[34].prefName);
          break;
        case "pref36":
          setPlace(japanMap?.data.result[35].prefName);
          break;
        case "pref37":
          setPlace(japanMap?.data.result[36].prefName);
          break;
        case "pref38":
          setPlace(japanMap?.data.result[37].prefName);
          break;
        case "pref39":
          setPlace(japanMap?.data.result[38].prefName);
          break;
        case "pref40":
          setPlace(japanMap?.data.result[39].prefName);
          break;
        case "pref41":
          setPlace(japanMap?.data.result[40].prefName);
          break;
        case "pref42":
          setPlace(japanMap?.data.result[41].prefName);
          break;
        case "pref43":
          setPlace(japanMap?.data.result[42].prefName);
          break;
        case "pref44":
          setPlace(japanMap?.data.result[43].prefName);
          break;
        case "pref45":
          setPlace(japanMap?.data.result[44].prefName);
          break;
        case "pref46":
          setPlace(japanMap?.data.result[45].prefName);
          break;
        case "pref47":
          setPlace(japanMap?.data.result[46].prefName);
          break;
        default:
      }
    }
  }, [placeNum]);

  useEffect(() => {
    const q = `保護犬猫 ${place} -filter:retweets`;

    const request = async () => {
      const res = await fetch(`/api/tweets?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setTweets(data);
    };
    request();
  }, [place]);

  // 都道府県の情報取得
  useEffect(() => {
    const request = async () => {
      const res = await fetch(`/api/place`);
      const data = await res.json();
      setJapanMap(data);
    };
    request();
  }, []);

  const onClickTweet = (user: string, id: string) => {
    window.location.href =
      "https://twitter.com/" + user + "/status/" + id + "/";
  };

  return (
    <section css={mainBox}>
      {place !== "" && <h2>#{place}</h2>}
      <div css={mapBox}>
        {japanMap?.data.result.map((v) => (
          <span
            key={v.prefCode}
            className={"pref" + v.prefCode}
            onClick={() => setPlaceNum("pref" + v.prefCode)}
          />
        ))}
        <Image src={mapJapan} alt="日本地図" width={1000} height={700} />
      </div>
      <div css={resetBox}>
        <Button variant="contained" onClick={() => setPlace("")}>
          都道府県リセット
        </Button>
      </div>
      {tweets.length === 0 && <h3>Tweetがありません</h3>}
      <div css={tweetBoxMain}>
        {tweets.map((v, i) => (
          <div key={i} css={tweetBox}>
            <div css={profileBox}>
              <div css={profileImgBox}>
                <Image
                  src={v.user.profile_image_url}
                  alt="プロフィール画像"
                  width={100}
                  height={100}
                />
              </div>
              <h3>{v.user.name}</h3>
            </div>
            <p>{v.text}</p>
            {v.entities.media !== undefined ? (
              <div css={imgBox}>
                <Image
                  src={v.entities.media[0].media_url}
                  alt="画像"
                  width={400}
                  height={340}
                />
              </div>
            ) : (
              <div css={imgBox}>
                <Image src={noImage} alt="画像なし" width={400} height={340} />
              </div>
            )}

            <a onClick={() => onClickTweet(v.user.screen_name, v.id_str)}>
              <Button variant="contained">
                <TwitterIcon />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const mainBox = css`
  h2 {
    text-align: center;
    color: #1da1f2;
  }

  h3 {
    text-align: center;
  }
`;

const tweetBoxMain = css`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 1440px;
`;

const tweetBox = css`
  margin: 20px 0;
  padding: 12px;
  border: 1px solid #657786;
  border-radius: 4px;
  box-shadow: 4px 4px 6px #aaa;
  width: 30%;
  height: 700px;

  p {
    margin: 20px 0;
    padding: 4px;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 130px;
    border: 1px solid #aaa;
    border-radius: 5px;
  }

  a {
    margin: 12px 0;
    display: block;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    width: 48%;
  }

  @media screen and (max-width: 768px) {
    width: 96%;
    height: auto;
  }
`;

const profileBox = css`
  display: flex;
  align-items: center;
  width: 100%;

  img {
    border-radius: 50%;
  }

  h3 {
    margin-left: 12px;
  }
`;

const imgBox = css`
  width: 100%;
  text-align: center;
`;

const profileImgBox = css`
  width: 80px;
  min-width: 80px;
`;

const resetBox = css`
  margin: 12px 0;
  text-align: center;
`;

const mapBox = css`
  margin: 0 auto;
  width: 650px;
  height: 600px;
  text-align: center;
  position: relative;

  .pref1 {
    display: block;
    width: 178px;
    height: 85px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    cursor: pointer;
  }

  .pref2 {
    display: block;
    width: 128px;
    height: 28px;
    position: absolute;
    top: 110px;
    right: 48px;
    z-index: 10;
    cursor: pointer;
  }

  .pref3 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 62px;
    height: 34px;
    top: 140px;
    right: 50px;
  }
  .pref4 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 62px;
    height: 34px;
    top: 176px;
    right: 50px;
  }

  .pref5 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 62px;
    height: 32px;
    top: 142px;
    right: 115px;
  }

  .pref6 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 61px;
    height: 33px;
    top: 177px;
    right: 115px;
  }

  .pref7 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 99px;
    height: 33px;
    top: 214px;
    right: 52px;
  }

  .pref8 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 29px;
    height: 46px;
    top: 249px;
    right: 52px;
  }

  .pref9 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 47px;
    height: 33px;
    top: 249px;
    right: 82px;
  }

  .pref10 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 47px;
    height: 34px;
    top: 249px;
    right: 130px;
  }

  .pref11 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 95px;
    height: 29px;
    top: 285px;
    right: 82px;
  }

  .pref12 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 32px;
    height: 83px;
    top: 297px;
    right: 49px;
  }

  .pref13 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 67px;
    height: 27px;
    top: 315px;
    right: 84px;
  }

  .pref14 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 72px;
    height: 35px;
    top: 345px;
    right: 106px;
  }

  .pref15 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 11;
    width: 60px;
    height: 45px;
    top: 202px;
    right: 155px;
  }
  .pref16 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 44px;
    height: 34px;
    top: 213px;
    right: 219px;
  }
  .pref17 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 33px;
    height: 47px;
    top: 200px;
    right: 265px;
  }
  .pref18 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 11;
    width: 63px;
    height: 33px;
    top: 250px;
    right: 265px;
  }
  .pref19 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 11;
    width: 45px;
    height: 29px;
    top: 314px;
    right: 156px;
  }
  .pref20 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 54px;
    height: 96px;
    top: 249px;
    right: 178px;
  }
  .pref21 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 30px;
    height: 93px;
    top: 250px;
    right: 234px;
  }
  .pref22 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 11;
    width: 60px;
    height: 35px;
    top: 345px;
    right: 156px;
  }
  .pref23 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 44px;
    height: 35px;
    top: 345px;
    right: 219px;
  }
  .pref24 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 30px;
    height: 82px;
    top: 322px;
    right: 266px;
  }
  .pref25 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 30px;
    height: 35px;
    top: 285px;
    right: 266px;
  }
  .pref26 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 60px;
    height: 59px;
    top: 261px;
    right: 299px;
  }
  .pref27 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 29px;
    height: 41px;
    top: 321px;
    right: 331px;
  }
  .pref28 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 29px;
    height: 70px;
    top: 261px;
    right: 362px;
  }
  .pref29 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 11;
    width: 29px;
    height: 58px;
    top: 322px;
    right: 299px;
  }
  .pref30 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 61px;
    height: 41px;
    top: 363px;
    right: 299px;
  }
  .pref31 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 29px;
    height: 69px;
    top: 262px;
    left: 258px;
  }
  .pref32 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 28px;
    height: 34px;
    top: 262px;
    left: 227px;
  }
  .pref33 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 28px;
    height: 34px;
    top: 297px;
    left: 227px;
  }
  .pref34 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 28px;
    height: 34px;
    top: 297px;
    left: 195px;
  }
  .pref35 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 29px;
    height: 69px;
    top: 262px;
    left: 163px;
  }
  .pref36 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 54px;
    height: 29px;
    top: 375px;
    left: 218px;
  }
  .pref37 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 54px;
    height: 29px;
    top: 345px;
    left: 218px;
  }
  .pref38 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 54px;
    height: 29px;
    top: 345px;
    left: 162px;
  }
  .pref39 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 54px;
    height: 29px;
    top: 375px;
    left: 162px;
  }
  .pref40 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 78px;
    height: 52px;
    top: 261px;
    left: 67px;
  }
  .pref41 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 28px;
    height: 52px;
    top: 261px;
    left: 36px;
  }
  .pref42 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 28px;
    height: 52px;
    top: 261px;
    left: 4px;
  }
  .pref43 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 44px;
    height: 52px;
    top: 316px;
    left: 68px;
  }
  .pref44 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 11;
    width: 29px;
    height: 39px;
    top: 286px;
    left: 115px;
  }
  .pref45 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 11;
    width: 29px;
    height: 39px;
    top: 328px;
    left: 115px;
  }
  .pref46 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 77px;
    height: 34px;
    top: 370px;
    left: 67px;
  }
  .pref47 {
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    width: 33px;
    height: 36px;
    top: 417px;
    left: 66px;
  }
`;
