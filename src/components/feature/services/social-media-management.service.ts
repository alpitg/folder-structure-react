import { ENDPOINT } from "../../../constants/global-contants/endpoint.const";
import { axiosInstance, pythonAxiosInstance } from "../../../utils/axios.util";
const access_token: string =
  "EAALLrs8kZAJMBOy0qGXwDTBl0BRnBCmpva4ahRaMjT5xfKRi8Fs2K7j0moyaAaWa1ZAuR0flOYzdxur81akjiCvVKHUuH88ZBJGVZBrS0x5Ux2AfHR1dDEJZCaGZBOd5ayZC6s03BMPsxQrALBX1MxPccZAmSIt4aO5AgvQUMtLJx9scLZBlMDNztP13NjX4ArXsI1SwuiGhskG99bfILABQbzkPQOZAc7DkVAxZCEZD";

export default class SocialMediaManagementService {
  static fetchAccount = (params: any) => {
    // const token: string =
    //   "EAALLrs8kZAJMBO6n0QzfI7ZBkM71aGIaGzhPhfAhWtISJPkc5dpSmi7ZCAA7acZCsQuyXgdIfbryZCQgn7fqaTclxjjUf4x9kR3jXF1N1Yi4KCeLQmGl2zqBxBe0siqZAQgybu0eUJkm2tv4HOlekVeKRgAiB4ZBlgz8qGlOLMw0MKwrTcs4VZC5dZBqGTcLUpJaDGJUevZAFjw9ZBGCQfgEK4DB5k6bATIyh8QD50ZD";
    return axiosInstance.get(
      ENDPOINT.SOCIAL_MEDIA.API.INSTA.BASE +
        "17841461206803395/media" +
        "?access_token=" +
        access_token
      //   params
    );
  };

  static postContent = (params: any) => {
    const url =
      ENDPOINT.SOCIAL_MEDIA.API.PYTHON_API.BASE +
      ENDPOINT.SOCIAL_MEDIA.API.PYTHON_API.POST_CONTENT;
    // return pythonAxiosInstance.get(ENDPOINT.SOCIAL_MEDIA.API.PYTHON_API.BASE);
    return pythonAxiosInstance.post(url, params);
  };

  static fetchContent = () => {
    const instagram_business_account_id = "17841461206803395";
    const url = `${
      ENDPOINT.SOCIAL_MEDIA.API.INSTA.BASE + instagram_business_account_id
    }/media?fields=id,ig_id,media_product_type,media_type,media_url,thumbnail_url,timestamp,caption,
    username,like_count,comments_count&access_token=${access_token}`;

    return pythonAxiosInstance.get(url);
  };

  static initPublishContent = (content: any) => {
    const instagram_business_account_id = "17841461206803395";
    // const image_url = URL.createObjectURL(content?.file); // ;
    const image_url =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfebfO3nFj9Fa2VzjGZsvy5FzFzCSiWmeg2hMDcolV8B6yz5bHuM09xS1NWB7tJNCm5Y&usqp=CAU";
    const caption = content?.textContent;
    // "Hi%20this%20is%20my%20first%20%20post%20to%20insta%20%23firstpost%20%23happy";
    const user_tags =
      "[     {       username:'amitkumargangurde',       x: 0.5,       y: 0.8     },     {       username:'stubborn_alpit',       x: 0.3,       y: 0.2     }   ]";
    const url = `${
      ENDPOINT.SOCIAL_MEDIA.API.INSTA.BASE + instagram_business_account_id
    }/media?image_url=${image_url}&caption=${caption}&user_tags=${user_tags}&access_token=${access_token}`;

    return pythonAxiosInstance.post(url);
  };

  static publishContent = (creation_id: string) => {
    const instagram_business_account_id = "17841461206803395";
    const url = `${
      ENDPOINT.SOCIAL_MEDIA.API.INSTA.BASE + instagram_business_account_id
    }/media_publish?creation_id=${creation_id}&access_token=${access_token}`;
    return pythonAxiosInstance.post(url);
  };
}
