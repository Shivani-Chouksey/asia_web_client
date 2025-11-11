import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import { FormControl, TextField } from "@mui/material";
import Button from "src/components/common/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import API_ENDPOINTS from "src/api-endpoints";

type InterestState = {
  companyId: string;
  expressed_interest: boolean;
}

function InterestPage() {
  const navigate = useNavigate();
  const maxLength = 180;
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();
  const data: InterestState = location.state;
  const authToken = sessionStorage.getItem("access_token") || "";

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    if (value.length <= maxLength) {
      setInputValue(value);
    }
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(
        API_ENDPOINTS.add_company_request,
        { ...data, message: inputValue },
        {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        }
      );
      console.log("res", res);

      toast.success("Your interest has been expressed successfully.");
      navigate("/chat");

    } catch (error: any) {
      console.log(error);
      
      toast.error(`${error.response?.data.message}- Please login to access ` || "Something went wrong. Please try again.");
      if (error.response.data.statusCode === 401) {
        navigate('/login')
      // navigate("/chat-message-page");

        sessionStorage.removeItem('access_token');
      }
    }
  };

  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section typ-news">
              <div className={`${styles.headWrap}`}>
                <h3 className={`${styles.title}`}>Express Interest</h3>
                <p className={`${styles.subTitle}`}>
                  Enter a brief message describing your requirements.
                </p>
              </div>
              <div className="bs-form">
                <form>
                  <div className="form-body">
                    <div className="form-group">
                      <p className={`${styles.countText}`}>
                        {inputValue.length} / {maxLength} Characters
                      </p>
                      <FormControl variant="standard">
                        <TextField
                          id="message"
                          multiline
                          placeholder="Add a brief message to potential investors."
                          name="message"
                          value={inputValue}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-foot">
                    <Button
                      btnStyle="primary"
                      disabled={inputValue.trim().length === 0}
                      onClick={handleClick}
                    >
                      Proceed
                    </Button>
                  </div>
                </form>
              </div>
              <div className={`${styles.infoCont}`}>
                <i className={`${styles.error}`}></i>
                <span className={`${styles.desc}`}>
                  The message you send here will be received by those who own
                  shares in the selected company. Those who will be interested
                  in chatting with you will be able to reply and start the chat.
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default InterestPage;
