import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import "./fb-post-view.scss";

const FbPostViewApp = ({ mediaContent }: any) => {
  const defaultImage = "static/media/img/default-user1.png";
  const [imageState, setImageState] = useState(defaultImage);

  useEffect(() => {
    if (mediaContent?.file) {
      setImageState(mediaContent.file ? mediaContent?.file : defaultImage);
    }
  }, [mediaContent]);

  return (
    <div className="fb-post-view-app">
      <Card>
        <div className="posts">
          <article className="post">
            <div className="post__header">
              <div className="float-start">
                <div className="post__profile">
                  <img
                    className="media__pic__round sm__media__pic"
                    src={imageState}
                    alt="profile-small"
                  />
                  <div className="post__username">
                    <span className="post__user">Jummy_Kane</span>
                    <span className="post__date-time">30 minutes ago</span>
                    <div className="float-end"></div>
                  </div>
                </div>
              </div>
              <div className="float-end pe-2">
                <span className="pi pi-ellipsis-h"></span>
              </div>
            </div>

            <div className="post__description">
              <p>
                {mediaContent?.textContent
                  ? mediaContent?.textContent
                  : "Responsive clone of Instagram UI. Made with ❤ for study purposes."}
              </p>
            </div>

            <div className="post__content">
              <div className="post__medias">
                <img
                  src={imageState}
                  className="post__media"
                  alt="Post Content"
                />
              </div>
            </div>

            <div className="post__options">
              <div className="post__option">
                <span className="pi pi-thumbs-up"></span>
                <span>Like</span>
              </div>

              <div className="post__option">
                <span className="pi pi-comment"></span>
                <span>Comment</span>
              </div>

              <div className="post__option">
                <span className="pi pi-send"></span>
                <span>Share</span>
              </div>
            </div>
          </article>
        </div>
      </Card>
    </div>
  );
};

export default FbPostViewApp;
