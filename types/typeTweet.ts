type TMediaUrl = {
  id: number;
  media_url: string;
};

type TUser = {
  name: string;
  screen_name: string;
};

type TMedia = {
  id: number;
  media: TMediaUrl[];
  user_mentions: TUser[];
};

export type TTweets = {
  text: string;
  id_str: string;
  entities: TMedia;
};
