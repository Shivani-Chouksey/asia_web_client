import { useMemo, useState } from "react";
import BottomSheet from "../bottom-sheet/BottomSheet";
import styles from "./style.module.scss";

export interface ProfileData {
  id: string;
  firstName: string;
  lastName: string;
  profileImage: string;
}

function ProfileCard(props: ProfileData) {
  const [openUploadDrawer, setOpenUploadDrawer] = useState(false);
  const [profileImageURL, setProfileImageURL] = useState("");
  const [tempProfileImage, setTempProfileImage] = useState("");
  const [openPreviewDrawer, setOpenPreviewDrawer] = useState(false);
  // const [previewURL, setPreviewURL] = useState("");
  const [uploadedFile, setUploadedFile] = useState({
    id: "",
    name: "",
    size: "",
    type: "",
  });
  // const [previewFileObj, setPreviewFileObj] = useState<Blob>({} as Blob);
  const nameInitials = (fname: string, lname: string): string => {
    return fname.charAt(0) + lname.charAt(0);
  };

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile({
        id: "" + file.lastModified,
        name: file.name,
        size: "" + Math.round(file.size / 1024) + " KB",
        type: file.type,
      });

      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        setTempProfileImage(event.target?.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleConfirmUpload = () => {
    setProfileImageURL(tempProfileImage); // Set the actual profile picture
    setOpenUploadDrawer(false); // Close the upload drawer
    setOpenPreviewDrawer(false); // Close the preview drawer
    setUploadedFile({ id: "", name: "", size: "", type: "" });
  };

  const handleCancelPreview = () => {
    setOpenPreviewDrawer(false);
    setUploadedFile({ id: "", name: "", size: "", type: "" });
    setTempProfileImage("");
  };

  const handleCloseDrawer = () => {
    setOpenUploadDrawer(false);
  };

  return (
    <>
      <div className={`${styles.cardWrap}`}>
        <strong>
          {props.firstName} {props.lastName}
        </strong>
        <div className={`${styles.logoWrap}`}>
          <button
            type="button"
            className={
              props.profileImage !== "" || profileImageURL !== ""
                ? styles.uploaded
                : ""
            }
            onClick={() => setOpenUploadDrawer(true)}
          >
            {props.profileImage !== "" || profileImageURL !== "" ? (
              <img
                src={props.profileImage || profileImageURL}
                alt={`${props.firstName} ${props.lastName}`}
              />
            ) : (
              <>
                <span>{nameInitials(props.firstName, props.lastName)}</span>
                <i></i>
              </>
            )}
          </button>
        </div>
      </div>
      <BottomSheet
        size="small"
        open={openUploadDrawer}
        setOpen={setOpenUploadDrawer}
        title="Add Profile Picture"
        primaryBtnText="Confirm"
        secondaryBtnText="Cancel"
        btnOnClick={() => setOpenPreviewDrawer(true)}
        btnSecondaryOnClick={handleCloseDrawer}
      >
        <div className={`${styles.uploadCont}`}>
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
                      onChange={handleUpload}
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
                        onClick={() => setOpenPreviewDrawer(true)}
                      >
                        <i></i>
                      </button>
                      <button
                        type="button"
                        className="trash-btn"
                        onClick={handleCancelPreview}
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
        </div>
      </BottomSheet>
      <BottomSheet
        open={openPreviewDrawer}
        primaryBtnText="Confirm"
        btnDisabled={false}
        size="large"
        title={uploadedFile.name}
        setOpen={setOpenPreviewDrawer}
        btnOnClick={handleConfirmUpload}
      >
        <div className="upload-preview">
          {uploadedFile.type.indexOf("image") !== -1 ? (
            <img src={tempProfileImage} alt="" />
          ) : (
            <iframe src={tempProfileImage}></iframe>
          )}
        </div>
      </BottomSheet>
    </>
  );
}

export default ProfileCard;
