import './App.css';
import tasks from './imagenes/tasks.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {

  
  return (

    

    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <img 
          src={tasks} className = 'logo' alt=''
        />
      </div>
          <div className='tarea-lista-principal'>
              <h1>Mis Tareas</h1>
                <ListaDeTareas />
          </div>
    </div>
  );
}

export default App;
