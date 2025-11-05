import {
  FormControl,
  FormControlLabel,
  Icon,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ReactNode } from "react";

export interface RadioField {
  label: string | number | ReactNode;
  value: string | number;
  isChecked?: boolean;
}

export interface RadioGroupProps {
  name: string;
  defaultValue: string | number;
  radioField: RadioField[];
}

function RadioGroupField(props: RadioGroupProps & { radioChange?: any }) {
  return (
    <div className="bs-radio-group">
      <FormControl>
        <RadioGroup defaultValue={props.defaultValue} name={props.name}>
          {props.radioField.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                value={item.value}
                control={
                  <Radio
                    icon={
                      <Icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r="7.2"
                            stroke="#A5ACAA"
                            strokeWidth="1.6"
                          />
                        </svg>
                      </Icon>
                    }
                    checkedIcon={
                      <Icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <circle cx="8" cy="8" r="4" fill="#193F34" />
                          <circle
                            cx="8"
                            cy="8"
                            r="7.2"
                            stroke="#193F34"
                            strokeWidth="1.6"
                          />
                        </svg>
                      </Icon>
                    }
                    onChange={props.radioChange}
                  />
                }
                label={item.label}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioGroupField;
