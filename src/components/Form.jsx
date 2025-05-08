import "./Form.css";
//import { useNavigate } from 'react-router-dom';
//() => navigate('/home')
const Form = ({ onClose, onSave }) => {
    //const navigate = useNavigate();
    return (
        <div className="modal-overlay">
          <div className="modal-form">
            <input type="text" placeholder="Nombre de la categoría" />
            <input type="text" placeholder="Descripción (Opcional)" />
            <div className="modal-buttons">
              <button className="cancelar" onClick={onClose}>Cancelar</button>
              
              <button className="guardar" onClick={onSave}>Guardar</button>
            </div>
          </div>
        </div>
      );
}

export default Form;