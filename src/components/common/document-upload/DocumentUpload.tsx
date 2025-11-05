import { useState } from "react";
import styles from "./style.module.scss";
import BottomSheet from "src/components/bottom-sheet/BottomSheet";

function DocumentUpload() {
  const handleUpload = (e: any) => {
    setUploadedFile({
      id: "" + e.target.files[0].lastModified,
      name: e.target.files[0].name,
      size: "" + Math.round(e.target.files[0].size / 1024),
      type: e.target.files[0].type,
    });
    setPreviewFileObj(e.target.files[0]);
  };
  const [uploadedFile, setUploadedFile] = useState({
    id: "",
    name: "",
    size: "",
    type: "",
  });
  const [openFilePreviewDrawer, setOpenFilePreviewDrawer] = useState(false);
  const [previewURL, setPreviewURL] = useState("");
  const [previewFileObj, setPreviewFileObj] = useState<Blob>({} as Blob);
  const filePreview = () => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setPreviewURL(e.target?.result as string);
    };
    fileReader.readAsDataURL(previewFileObj);
    setOpenFilePreviewDrawer(true);
  };
  return (
    <>
      <div className="bs-upload">
        <div className="doc-card">
          {uploadedFile.id === "" ? (
            <div className="upload-section">
              <div className="upload-item capture-pic">
                <button></button>
                <span className="text">Click a Picture</span>
              </div>
              <div className="upload-item upload-file">
                <span className="text">Upload File</span>
                <input
                  type="file"
                  name=""
                  id="upload-doc"
                  onChange={(e) => handleUpload(e)}
                />
              </div>
            </div>
          ) : (
            <div className="uploaded-state">
              <div className="cm-document-wrap">
                <i
                  className={`document-icon ${
                    uploadedFile.type.indexOf("image") !== -1
                      ? "image"
                      : "document"
                  }`}
                ></i>
                <div className="info-wrap">
                  <span className="doc-title">{uploadedFile.name}</span>
                  <span className="foot-note">{uploadedFile.size} KB</span>
                </div>
                <div className="action-wrap">
                  <button
                    type="button"
                    className="show-media"
                    onClick={filePreview}
                  >
                    <i></i>
                  </button>
                  <button
                    type="button"
                    className="trash-btn"
                    onClick={() =>
                      setUploadedFile({
                        id: "",
                        name: "",
                        size: "",
                        type: "",
                      })
                    }
                  >
                    <i></i>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="upload-note">
            <strong className="note-title">
              <i></i>Note
            </strong>
            <ul className="note-list">
              <li className="note-item">PDF or PNG of max 5 MB.</li>
            </ul>
          </div>
        </div>
      </div>
      <BottomSheet
        open={openFilePreviewDrawer}
        primaryBtnText="Confirm"
        btnDisabled={false}
        title={uploadedFile.name}
        size="large"
        setOpen={setOpenFilePreviewDrawer}
        btnOnClick={() => setOpenFilePreviewDrawer(false)}
      >
        <div className="upload-preview">
          {uploadedFile.type.indexOf("image") !== -1 ? (
            <img src={previewURL} alt="" />
          ) : (
            <iframe src={previewURL}></iframe>
          )}
        </div>
      </BottomSheet>
    </>
  );
}

export default DocumentUpload;
