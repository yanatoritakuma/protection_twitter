type TMediaUrl = {
  id: number;
  media_url: string;
};

type TUserMentions = {
  name: string;
  screen_name: string;
};

type TUser = {
  name: string;
  profile_image_url: string;
  screen_name: string;
};

type TMedia = {
  id: number;
  media: TMediaUrl[];
  user_mentions: TUserMentions[];
};

export type TTweets = {
  text: string;
  id_str: string;
  entities: TMedia;
  user: TUser;
};
