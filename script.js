const cursos = [
  {
    id: "MAT001",
    nombre: "Álgebra matricial y geometría analítica",
    ciclo: 1,
    prerrequisitos: [],
    desbloquea: ["CAL001", "CAL002"]
  },
  {
    id: "CAL001",
    nombre: "Cálculo diferencial",
    ciclo: 2,
    prerrequisitos: ["MAT001", "CAL000"],
    desbloquea: ["CAL002"]
  },
  {
    id: "CAL002",
    nombre: "Cálculo integral",
    ciclo: 3,
    prerrequisitos: ["CAL001", "MAT001"],
    desbloquea: ["CAL003"]
  },
  {
    id: "CAL003",
    nombre: "Cálculo vectorial",
    ciclo: 4,
    prerrequisitos: ["CAL002"],
    desbloquea: ["SER001", "BIOE005"]
  },
  {
    id: "CAL000",
    nombre: "Fundamentos de cálculo",
    ciclo: 1,
    prerrequisitos: [],
    desbloquea: ["CAL001"]
  },
  // Puedes seguir completando aquí el resto de cursos
];

const grid = document.getElementById("grid");
const selectCiclo = document.getElementById("cicloSelect");

function crearCurso(curso) {
  const div = document.createElement("div");
  div.className = "course locked";
  div.dataset.id = curso.id;
  div.dataset.ciclo = curso.ciclo;

  const title = document.createElement("h3");
  title.textContent = curso.nombre;
  const ciclo = document.createElement("div");
  ciclo.className = "ciclo";
  ciclo.textContent = `Ciclo ${curso.ciclo}`;

  const btn = document.createElement("button");
  btn.textContent = "Aprobar curso";
  btn.onclick = () => aprobarCurso(curso.id);

  div.appendChild(title);
  div.appendChild(ciclo);
  div.appendChild(btn);
  grid.appendChild(div);
}

function aprobarCurso(id) {
  const curso = cursos.find(c => c.id === id);
  const div = document.querySelector(`[data-id='${id}']`);
  div.classList.add("aprobado");
  div.classList.remove("locked");
  localStorage.setItem(id, true);

  curso.desbloquea.forEach(did => {
    const c = cursos.find(c => c.id === did);
    if (c && c.prerrequisitos.every(pr => localStorage.getItem(pr))) {
      document.querySelector(`[data-id='${did}']`)?.classList.remove("locked");
    }
  });
}

function cargarCursos() {
  grid.innerHTML = "";
  const cicloFiltrado = selectCiclo.value;
  const ciclosSet = new Set();

  cursos.forEach(c => {
    if (cicloFiltrado === "todos" || c.ciclo == cicloFiltrado) {
      crearCurso(c);
    }
    ciclosSet.add(c.ciclo);
  });

  cursos.forEach(c => {
    if (localStorage.getItem(c.id)) aprobarCurso(c.id);
  });

  // Actualizar opciones del filtro
  selectCiclo.innerHTML = '<option value="todos">Todos</option>';
  [...ciclosSet].sort().forEach(c => {
    const op = document.createElement("option");
    op.value = c;
    op.textContent = `Ciclo ${c}`;
    selectCiclo.appendChild(op);
  });
}

selectCiclo.addEventListener("change", cargarCursos);
window.onload = cargarCursos;
