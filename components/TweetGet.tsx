import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { TTweets } from "../types/typeTweet";
import noImage from "../public/images/noimage.png";

export const TweetGet = () => {
  const [tweets, setTweets] = useState<TTweets[]>([]);
  console.log("tweets", tweets);

  useEffect(() => {
    if (tweets.length) {
      return;
    }

    const q = "保護犬猫";

    const request = async () => {
      const res = await fetch(`/api/tweets?q=${encodeURIComponent(q)}`);
      const data = await res.json();

      setTweets(data);
    };
    request();
  }, []);

  return (
    <section css={sectionBox}>
      {tweets.map((v, i) => (
        <div key={i} css={tweetBox}>
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
        </div>
      ))}
    </section>
  );
};

const sectionBox = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const tweetBox = css`
  margin: 20px 0;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #657786;
  border-radius: 4px;
  box-shadow: 4px 4px 6px #aaa;
  width: 30%;
  height: 600px;

  p {
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    width: 48%;
  }

  @media screen and (max-width: 768px) {
    width: 96%;
    height: 500px;
  }
`;
