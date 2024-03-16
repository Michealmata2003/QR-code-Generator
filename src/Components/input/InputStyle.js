import './Input.css';
export const InputWrap = ({ children }) => {
    return (
        <div className="w-full flex flex-col mb-5 relative custom-input-wrap">
            { children }
        </div>
    )
}

export const labelStyling = {
    marginBottom: '5px',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: '15px',
    display: 'flex',
    width: '100%',
}