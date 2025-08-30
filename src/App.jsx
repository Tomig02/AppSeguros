import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <form>
        <label htmlFor="client-data">Asegurado</label>
        <div name="client-data">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="surname">Apellido</label>
          <input type="text" id="surname" name="surname" />

          <label htmlFor="id">Documento</label>
          <input type="text" id="id" name="id" />

          <label htmlFor="phone">Telefono</label>
          <input type="text" id="phone" name="phone" />
        </div>

        <label htmlFor="driver-data">Conductor</label>
        <div name="driver-data">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="surname">Apellido</label>
          <input type="text" id="surname" name="surname" />

          <label htmlFor="id">Registro</label>
          <input type="text" id="id" name="id" />

          <label htmlFor="expiration">Vencimiento</label>
          <input type="date" id="expiration" name="expiration" />
        </div>

        <label htmlFor="car-data">Vehiculo</label>
        <div name="car-data">
          <label htmlFor="brand">Marca</label>
          <input type="text" id="brand" name="brand" />

          <label htmlFor="model">Modelo</label>
          <input type="text" id="model" name="model" />

          <label htmlFor="license-plate">Patente</label>
          <input type="text" id="license-plate" name="license-plate" />

          <label htmlFor="company">Compañia</label>
          <input type="date" id="company" name="company" />

          <label htmlFor="coverage">Cobertura</label>
          <input type="date" id="coverage" name="coverage" />
        </div>

        <label htmlFor="claim-data">Siniestro</label>
        <div name="claim-data">
          <label htmlFor="date">Fecha</label>
          <input type="date" id="date" name="date" />

          <label htmlFor="hour">Hora</label>
          <input type="text" id="hour" name="hour" />

          <label htmlFor="place">Lugar</label>
          <input type="text" id="place" name="place" />

          <label htmlFor="city">Ciudad</label>
          <input type="text" id="city" name="city" />

          <label htmlFor="claim-type">Suceso</label>
          <input type="date" id="claim-type" name="claim-type" />

          <label htmlFor="other">Tercero</label>
          <input type="date" id="other" name="other" />

          <label htmlFor="description">Descripcion</label>
          <textarea type="text" id="description" name="description" />
        </div>
      </form>
    </div>
  );
}

export default App;
