import { useEffect, useState } from "react";
import Image from "next/image";
import { TTweets } from "../types/typeTweet";

export const TweetGet = () => {
  const [tweets, setTweets] = useState<TTweets[]>([]);
  console.log("tweets", tweets);
  if (tweets[0]?.entities.media !== undefined) {
    console.log("url", tweets[0]?.entities.media[0].media_url);
  }

  useEffect(() => {
    if (tweets.length) {
      return;
    }

    const q = "保護";

    const request = async () => {
      const res = await fetch(`/api/tweets?q=${encodeURIComponent(q)}`);
      const data = await res.json();

      setTweets(data);
    };
    request();
  }, []);

  return (
    <section>
      <h2>Tweet取得</h2>
      {tweets.map((v) => (
        <div key={v.entities.id}>
          <p>{v.text}</p>
          {v.entities.media !== undefined ? (
            <Image
              src={v.entities.media[0].media_url}
              alt="画像"
              width={500}
              height={300}
            />
          ) : (
            <p>画像なし</p>
          )}
        </div>
      ))}
    </section>
  );
};
