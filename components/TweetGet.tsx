import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { TTweets } from "../types/typeTweet";
import noImage from "../public/images/noimage.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";

export const TweetGet = () => {
  const [tweets, setTweets] = useState<TTweets[]>([]);
  console.log("tweets", tweets);

  useEffect(() => {
    if (tweets.length) {
      return;
    }

    const q = "webyanatori";

    const request = async () => {
      const res = await fetch(`/api/tweets?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setTweets(data);
    };
    request();
  }, []);

  const onClickTweet = (user: string, id: string) => {
    window.location.href =
      "https://twitter.com/" + user + "/status/" + id + "/";
  };

  return (
    <section css={sectionBox}>
      {tweets.map((v, i) => (
        <div key={i} css={tweetBox}>
          <div css={profileBox}>
            <Image
              src={v.user.profile_image_url}
              alt="プロフィール画像"
              width={100}
              height={100}
            />
            <h3>{v.user.name}</h3>
          </div>
          <p>{v.text}</p>
          {v.entities.media !== undefined ? (
            <Image
              src={v.entities.media[0].media_url}
              alt="画像"
              width={400}
              height={340}
            />
          ) : (
            <Image src={noImage} alt="画像なし" width={400} height={340} />
          )}

          <a onClick={() => onClickTweet(v.user.screen_name, v.id_str)}>
            <Button variant="contained">
              <TwitterIcon />
            </Button>
          </a>
        </div>
      ))}
    </section>
  );
};

const sectionBox = css`
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
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; */
  border: 1px solid #657786;
  border-radius: 4px;
  box-shadow: 4px 4px 6px #aaa;
  width: 30%;
  height: 600px;

  p {
    margin: 20px 0;
  }

  @media screen and (max-width: 1024px) {
    width: 48%;
  }

  @media screen and (max-width: 768px) {
    width: 96%;
    height: 500px;
  }
`;

const profileBox = css`
  background-color: skyblue;
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
