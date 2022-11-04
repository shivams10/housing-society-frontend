import "./ModalBox.styles.css";

export default function ModalBox({value, show, onClose}) {
  if(!show) {
    return null
  }
  return (
    <div className='modal-container'>
      <div className="modal-content">
        <p>{value}</p>
        <button className='close-button' onClick={onClose}>Close</button>
      </div>
    </div>
  )
}