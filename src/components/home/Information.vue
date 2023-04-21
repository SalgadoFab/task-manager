<template>
  <div class="information-container">
    <div class="tab-container">
      <div class="tab-wrapper">
        <div class="icon-subheader">
          <svg
            width="28"
            height="31"
            viewBox="0 0 28 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.73 13.8844L11.73 27.1252L24.9707 27.1252L24.9707 13.8844H11.73ZM24.9707 10.8751C26.6327 10.8751 27.98 12.2224 27.98 13.8844V27.1252C27.98 28.7871 26.6327 30.1344 24.9707 30.1344H11.73C10.068 30.1344 8.7207 28.7871 8.7207 27.1252V24.2546C8.34421 24.1469 7.97526 24.0214 7.61484 23.8789C6.97387 23.6256 6.35986 23.3189 5.7783 22.9642C2.31324 20.8511 0 17.0368 0 12.6806C0 6.03273 5.38918 0.643555 12.0371 0.643555C14.7433 0.643555 17.2409 1.5366 19.2513 3.04407C21.5976 4.80345 23.2803 7.39975 23.8564 10.39C23.8874 10.5506 23.9151 10.7123 23.9396 10.8751H24.9707ZM8.7207 21.0803C7.58727 20.6324 6.56618 19.9616 5.71143 19.1219C4.47076 17.903 3.58055 16.3285 3.20601 14.5638C3.07708 13.9563 3.00927 13.3263 3.00927 12.6806C3.00927 7.6947 7.05115 3.65282 12.0371 3.65282C15.2529 3.65282 18.076 5.33423 19.6752 7.86587C20.2479 8.77262 20.6637 9.78843 20.8843 10.8751H11.73C10.068 10.8751 8.7207 12.2224 8.7207 13.8844V21.0803Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div class="sub-header">¿Que es?</div>
        <h2 class="header">
          Proyecto de Gestión de tareas utilizando 
          VueJS 2, Google Cloud Platform y Firebase
        </h2>
        <p class="text">
          La aplicación permite a los usuarios crear y asignar
          tareas estableciendo fechas límite para su finalización. 
          La aplicación implementa una visualizacion Kanban con 4 estados base
          para el manejo de cada tarea
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationComponent"
};
</script>
