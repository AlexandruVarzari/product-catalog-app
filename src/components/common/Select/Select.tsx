import { FC, SelectHTMLAttributes } from "react";
import { ChevronDownIcon } from "../Icons/ChevronDownIcon";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  label?: string;
}

export const Select: FC<SelectProps> = ({
  options,
  label,
  className = "",
  ...props
}) => {
  return (
    <div className="select-container">
      {label && <label className="select-label">{label}</label>}
      <div className="select-wrapper">
        <select className={`select ${className}`} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="select-icon">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
};
