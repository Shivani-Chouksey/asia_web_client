import { Checkbox, FormControlLabel, Icon } from "@mui/material";

export interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  onChange?: any;
  isChecked?: boolean;
}

function CheckBox(props: CheckboxProps) {
  return (
    <div className="bs-checkbox">
      <FormControlLabel
        control={
          <Checkbox
            name={props.name}
            id={props.id}
            icon={
              <Icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 21H9C6.59863 21 5.17782 20.5136 4.33211 19.6679C3.4864 18.8222 3 17.4014 3 15V9C3 6.59863 3.4864 5.17782 4.33211 4.33211C5.17782 3.4864 6.59863 3 9 3H15C17.4014 3 18.8222 3.4864 19.6679 4.33211C20.5136 5.17782 21 6.59863 21 9V15C21 17.4014 20.5136 18.8222 19.6679 19.6679C18.8222 20.5136 17.4014 21 15 21Z"
                    stroke="#A5ACAA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Icon>
            }
            checkedIcon={
              <Icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    fill="#193F34"
                  />
                  <path d="M7.75 12L10.58 14.83L16.25 9.17" fill="#193F34" />
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Icon>
            }
            onChange={props.onChange}
          />
        }
        label={props.label}
      />
    </div>
  );
}

export default CheckBox;
