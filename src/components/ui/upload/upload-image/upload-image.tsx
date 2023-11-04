import "./upload-image.scss";
import { useState } from "react";

const UploadImageApp = ({ onFileSelected }: any) => {
    const [imageState, setImageState] = useState("");

    const onChangeFile = (e: any) => {
        if (e.target.files[0]) {
            setImageState(URL.createObjectURL(e.target.files[0]));
            onFileSelected(e);
        }
    };

    return (
        <div className="upload-image-app">
            <div className="container">
                <div className="avatar-upload">
                    <div className="avatar-edit">
                        <label>
                            <span className="icon" title="Update post">
                                <i className="pi pi-fw pi-pencil"></i>
                            </span>
                            <input
                                type="file"
                                id="imageUpload"
                                accept=".png, .jpg, .jpeg"
                                onChange={onChangeFile}
                            />
                        </label>
                    </div>
                    <div className="avatar-preview">
                        <div id="imagePreview">
                            {imageState && <img src={imageState} alt="post img" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadImageApp;
