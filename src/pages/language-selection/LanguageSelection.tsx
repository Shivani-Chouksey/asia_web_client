import Header from "src/components/common/header/Header";
import styles from "./style.module.scss";
import RadioGroupField, {
  RadioField,
} from "src/components/common/radio-group/RadioGroupField";

function LanguageSelection() {
  const languageSelectionRadio: RadioField[] = [
    {
      value: "english",
      label: (
        <span>
          <img src="/assets/flags/england.png" alt="" />
          <span>English</span>
        </span>
      ),
    },
    {
      value: "italian",
      label: (
        <span>
          <img src="/assets/flags/italy.png" alt="" />
          <span>Italian</span>
        </span>
      ),
    },
  ];
  return (
    <>
      <header>
        <Header backLink={true}></Header>
      </header>
      <main>
        <div className="lyt-main">
          <section>
            <div className="bs-section">
              <div className="sec-head">
                <h1 className={`cm-sec-title typ-big ${styles.title}`}>
                  Language
                </h1>
                <p className={`${styles.subtitle}`}>
                  The interface would change as per your selected language.
                </p>
              </div>
              <div className="sec-cont">
                <div className="card-radio-group">
                  <RadioGroupField
                    name="language-selection"
                    radioField={languageSelectionRadio}
                    defaultValue={languageSelectionRadio[0].value}
                  ></RadioGroupField>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default LanguageSelection;
