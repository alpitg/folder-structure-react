import HeaderInlineTextApp from "../../ui/header-inline-text/header-inline-text";
import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { EditorTextChangeEvent } from "primereact/editor";
import { Button } from "primereact/button";
import { TabPanel, TabView } from "primereact/tabview";
import SocialMediaManagementService from "../services/social-media-management.service";
import InstaPostView from "./insta-post-view/insta-post-view";
import UploadFileApp from "../../ui/upload/upload-file/upload-file";
import EditorApp from "../../ui/editor/editor";
import {
  InstaSocialMediaContent,
  SocialMediaContent,
} from "../../../interfaces/social-media.model";
import FbPostViewApp from "./fb-post-view/fb-post-view";
import "./social-media-management.scss";

const SocialMediaManagementApp = () => {
  const [instaContents, setInstaContents] = useState<any[]>([]);
  const [content, setContent] = useState<SocialMediaContent>({
    textContent: "",
    htmlTextContent: "",
  });

  const onFileSelected = (e: any) => {
    setContent((prev) => ({
      ...prev,
      file: URL.createObjectURL(e.target.files[0]) ?? "",
    }));
  };

  const onTextChange = (e: EditorTextChangeEvent) => {
    setContent((prev) => ({
      ...prev,
      textContent: e.textValue ?? "",
      htmlTextContent: e.htmlValue ?? "",
    }));
    console.log(e.htmlValue);
  };

  const fetchContent = () => {
    SocialMediaManagementService.fetchContent().then((x) => {
      console.log(x?.data?.data);
      setInstaContents(x?.data?.data);
    });
  };

  const postContent = () => {
    SocialMediaManagementService.initPublishContent(content).then((x) => {
      console.log(x);
      SocialMediaManagementService.publishContent(x?.data?.id).then(
        (publishedResponse) => {
          console.log("publishContent", publishedResponse);
          fetchContent();
        }
      );
    });
  };

  const postToPythonApi = () => {
    SocialMediaManagementService.postContent(content)
      .then((response) => {
        console.log(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="social-media-management-app">
      <div className="row">
        <div className="col-sm-12">
          <HeaderInlineTextApp
            title="Social platform"
            subTitle="Manage all your social platforms from here."
          />
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-sm-6">
            <Card>
              <div className="row">
                <div className="col-sm-6 d-flex">
                  <Button
                    label="Fetch Insta post"
                    onClick={fetchContent}
                    className="me-2"
                  />
                  <Button
                    label="Post to insta"
                    onClick={postContent}
                    className="me-2"
                  />
                  <Button label="Post to python" onClick={postToPythonApi} />
                </div>
              </div>

              <br />
              <UploadFileApp onFileSelected={onFileSelected} />
              {/* <h6>Content</h6>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.htmlTextContent ?? "",
                }}
              />
              */}
              <br />
              <EditorApp onTextChange={onTextChange} />
            </Card>
            {/* 
            <Card className="mt-4">
              <div className="col-sm-12">
                <TabView>
                  <TabPanel header="Instagram" leftIcon="pi pi-instagram me-2">
                    <InstaPostView mediaContent={content} />
                  </TabPanel>
                  <TabPanel header="Facebook" leftIcon="pi pi-facebook me-2">
                    <FbPostViewApp mediaContent={content} />
                  </TabPanel>
                </TabView>
                <br />
              </div>
            </Card> */}
          </div>

          <div className="col-sm-4 offset-sm-1 oy-100vh">
            {instaContents &&
              instaContents?.map((x: InstaSocialMediaContent) => {
                return (
                  <div className="mb-4" key={x?.id}>
                    <InstaPostView mediaContent={x} />
                  </div>
                );
              })}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagementApp;
