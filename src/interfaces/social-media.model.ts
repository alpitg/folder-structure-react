export interface SocialMediaContent {
  file?: any;
  textContent?: string;
  htmlTextContent?: string | TrustedHTML;
}

export interface InstaSocialMediaContent {
  file?: any;
  textContent?: string;
  htmlTextContent?: string | TrustedHTML;
  id: string;
  ig_id: string;
  media_product_type: string;
  media_type: string;
  media_url: string;
  timestamp: any;
  caption: string;
  username: string;
  like_count: number;
  comments_count: number;
}
