import { useEffect, useState } from "react";

export const TweetGet = () => {
  const [tweets, setTweets] = useState([]);
  console.log("tweets", tweets);

  useEffect(() => {
    if (tweets.length) {
      return;
    }

    const q = "ドラマ";
    const request = async () => {
      const res = await fetch(`/api/tweets?q=${encodeURIComponent(q)}`);
      const data = await res.json();

      console.log("data", data);
      setTweets(data);
    };
    request();
  }, []);

  return <h2>Tweet取得</h2>;
};
