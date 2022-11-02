import "./InputField.css"

export default function InputField({ name, displayName, info, ...otherProps }) {
    return (
      <div className="input-container">
        {name && (
          <label htmlFor={name}>
            {displayName || name} {info && `(${info})`} :{" "}
          </label>
        )}
        <input name={name} {...otherProps} />
      </div>
    );
  }