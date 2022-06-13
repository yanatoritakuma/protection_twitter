type TMediaUrl = {
  id: number;
  media_url: string;
};

type TMedia = {
  id: number;
  media: TMediaUrl[];
};

export type TTweets = {
  text: string;
  entities: TMedia;
};
