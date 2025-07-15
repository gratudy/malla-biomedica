const cursos = [
  // PRIMER AÑO - 1 y 2 ciclo
  { id: "ALGMAT", nombre: "Álgebra matricial y geometría analítica", ciclo: 1, prerrequisitos: [], desbloquea: ["CALDIF", "CALINT"] },
  { id: "FUND_CAL", nombre: "Fundamentos de cálculo", ciclo: 1, prerrequisitos: [], desbloquea: ["CALDIF"] },
  { id: "FUND_FIS", nombre: "Fundamentos de física", ciclo: 1, prerrequisitos: [], desbloquea: ["FIS1", "LAB_FIS1"] },
  { id: "INTRO_BIO", nombre: "Introducción a la ingeniería biomédica", ciclo: 1, prerrequisitos: [], desbloquea: [] },
  { id: "COM_RED", nombre: "Comunicación y redacción", ciclo: 1, prerrequisitos: [], desbloquea: [] },
  { id: "FILOS", nombre: "Filosofía", ciclo: 1, prerrequisitos: [], desbloquea: [] },
  { id: "CALDIF", nombre: "Cálculo diferencial", ciclo: 2, prerrequisitos: ["ALGMAT", "FUND_CAL"], desbloquea: ["CALINT"] },
  { id: "FIS1", nombre: "Física 1", ciclo: 2, prerrequisitos: ["FUND_FIS"], desbloquea: ["FIS2", "FUND_PROG"] },
  { id: "LAB_FIS1", nombre: "Laboratorio de física 1", ciclo: 2, prerrequisitos: ["FUND_FIS"], desbloquea: ["FIS2"] },
  { id: "DIS_IND", nombre: "Diseño industrial", ciclo: 2, prerrequisitos: [], desbloquea: [] },
  { id: "QUI_GEN", nombre: "Química general", ciclo: 2, prerrequisitos: [], desbloquea: ["QUI_ORG", "BIO"] },
  { id: "INN_BIO", nombre: "Procesos de innovación en bioingeniería", ciclo: 2, prerrequisitos: [], desbloquea: ["FUND_BIO"] },
  { id: "PENS_CRIS", nombre: "Pensamiento cristiano y realidad social", ciclo: 2, prerrequisitos: [], desbloquea: [] },

  // SEGUNDO AÑO - 3 y 4 ciclo
  { id: "CALINT", nombre: "Cálculo integral", ciclo: 3, prerrequisitos: ["CALDIF", "ALGMAT"], desbloquea: ["CALVEC"] },
  { id: "FIS2", nombre: "Física 2", ciclo: 3, prerrequisitos: ["FIS1", "LAB_FIS1"], desbloquea: ["FIS3"] },
  { id: "LAB_FIS2", nombre: "Laboratorio de física 2", ciclo: 3, prerrequisitos: [], desbloquea: ["FIS3"] },
  { id: "FUND_PROG", nombre: "Fundamentos de programación", ciclo: 3, prerrequisitos: ["FIS1"], desbloquea: ["PROG_AVZ", "CIR_SIS"] },
  { id: "QUI_ORG", nombre: "Química orgánica", ciclo: 3, prerrequisitos: ["QUI_GEN"], desbloquea: ["FUND_ANAL", "BIOQ"] },
  { id: "BIO", nombre: "Biología", ciclo: 3, prerrequisitos: ["QUI_GEN"], desbloquea: ["AN_FIS", "BIOQ"] },
  { id: "CALVEC", nombre: "Cálculo vectorial", ciclo: 4, prerrequisitos: ["CALINT"], desbloquea: ["SER_TRF", "BIOEST"] },
  { id: "FIS3", nombre: "Física 3", ciclo: 4, prerrequisitos: ["FIS2", "LAB_FIS2"], desbloquea: ["CIEN_MAT", "PROY_BIO1"] },
  { id: "LAB_FIS3", nombre: "Laboratorio de física 3", ciclo: 4, prerrequisitos: [], desbloquea: [] },
  { id: "FUND_ANAL", nombre: "Fundamentos de análisis instrumental", ciclo: 4, prerrequisitos: ["QUI_ORG"], desbloquea: [] },
  { id: "CIR_ELEC", nombre: "Circuitos eléctricos", ciclo: 4, prerrequisitos: [], desbloquea: ["CIR_SIS"] },
  { id: "FUND_BIO", nombre: "Fundamentos de biodiseño", ciclo: 4, prerrequisitos: ["INN_BIO"], desbloquea: [] },

  // TERCER AÑO - 5 y 6 ciclo
  { id: "AN_FIS", nombre: "Anatomía y Fisiología", ciclo: 5, prerrequisitos: ["BIO"], desbloquea: ["FISIOPAT"] },
  { id: "BIOQ", nombre: "Bioquímica", ciclo: 5, prerrequisitos: ["QUI_ORG", "BIO"], desbloquea: ["MICRO_CEL", "MOL_BIO"] },
  { id: "PROG_AVZ", nombre: "Programación Avanzada", ciclo: 5, prerrequisitos: ["FUND_PROG"], desbloquea: [] },
  { id: "CIEN_MAT", nombre: "Ciencia e Ingeniería de Materiales", ciclo: 5, prerrequisitos: ["FIS3"], desbloquea: ["FUND_MEC_BIO", "MEC_FLUID", "BIOMAT"] },
  { id: "CIR_SIS", nombre: "Circuitos y sistemas digitales", ciclo: 5, prerrequisitos: ["FUND_PROG", "CIR_ELEC"], desbloquea: ["ELECT_BAS"] },
  { id: "SER_TRF", nombre: "Series y transformaciones", ciclo: 5, prerrequisitos: ["CALVEC"], desbloquea: ["DSP", "CTRL_BIO"] },
  { id: "MICRO_CEL", nombre: "Microbiología y Cultivo Celular", ciclo: 6, prerrequisitos: ["BIOQ"], desbloquea: ["ING_TIS"] },
  { id: "MOL_BIO", nombre: "Molecular biology for engineers", ciclo: 6, prerrequisitos: ["BIOQ"], desbloquea: [] },
  { id: "PROY_BIO1", nombre: "Proyectos de Biodiseño 1", ciclo: 6, prerrequisitos: ["FIS3"], desbloquea: ["PROY_BIO2"] },
  { id: "ELECT_BAS", nombre: "Electrónica Básica", ciclo: 6, prerrequisitos: ["CIR_SIS"], desbloquea: ["INSTR_BIO", "SIG_BIO"] },
  { id: "FUND_MEC_BIO", nombre: "Fundamentos de Mecánica de los Biomateriales", ciclo: 6, prerrequisitos: ["CIEN_MAT"], desbloquea: ["BIOMEC"] },
  { id: "DSP", nombre: "Digital Signal Processing", ciclo: 6, prerrequisitos: ["SER_TRF"], desbloquea: ["MED_IMG"] },

  // CUARTO AÑO - 7 y 8 ciclo
  { id: "MEC_FLUID", nombre: "Mecánica y Transporte de Fluidos", ciclo: 7, prerrequisitos: ["CIEN_MAT"], desbloquea: [] },
  { id: "BIOEST", nombre: "Bioestadística", ciclo: 7, prerrequisitos: ["CALVEC"], desbloquea: [] },
  { id: "FISIOPAT", nombre: "Fisiopatología", ciclo: 7, prerrequisitos: ["AN_FIS"], desbloquea: [] },
  { id: "INSTR_BIO", nombre: "Instrumentación Biomédica", ciclo: 7, prerrequisitos: ["ELECT_BAS"], desbloquea: ["ING_CLIN1"] },
  { id: "SIG_BIO", nombre: "Introducción a Señales Biomédicas", ciclo: 7, prerrequisitos: ["ELECT_BAS"], desbloquea: [] },
  { id: "PROY_BIO2", nombre: "Proyectos de Biodiseño 2", ciclo: 7, prerrequisitos: ["PROY_BIO1"], desbloquea: ["NEG_BIO"] },
  { id: "BIOMAT", nombre: "Biomateriales", ciclo: 7, prerrequisitos: ["CIEN_MAT"], desbloquea: [] },
  { id: "ING_TIS", nombre: "Introducción a Ingeniería de Tejidos", ciclo: 8, prerrequisitos: ["MICRO_CEL"], desbloquea: [] },
  { id: "ANTROP", nombre: "Antropología", ciclo: 8, prerrequisitos: [], desbloquea: [] },
  { id: "NEG_BIO", nombre: "Modelos de Negocios en Bioingeniería", ciclo: 8, prerrequisitos: ["PROY_BIO2"], desbloquea: ["NORM_BIO"] },
  { id: "CTRL_BIO", nombre: "Teoría de Control en Sistemas Biológicos", ciclo: 8, prerrequisitos: ["SER_TRF"], desbloquea: [] },
  { id: "ING_CLIN1", nombre: "Ingeniería Clínica 1", ciclo: 8, prerrequisitos: ["INSTR_BIO"], desbloquea: ["ING_CLIN2"] },
  { id: "BIOMEC", nombre: "Biomecánica", ciclo: 8, prerrequisitos: ["FUND_MEC_BIO"], desbloquea: [] },
  { id: "MED_IMG", nombre: "Introduction to Medical Imaging", ciclo: 8, prerrequisitos: ["DSP"], desbloquea: [] },

  // QUINTO AÑO - 9 y 10 ciclo
  { id: "ING_CLIN2", nombre: "Ingeniería Clínica 2", ciclo: 9, prerrequisitos: ["ING_CLIN1"], desbloquea: [] },
  { id: "ETICA", nombre: "Ética", ciclo: 9, prerrequisitos: [], desbloquea: [] }, // 150 créditos requeridos
  { id: "DES_PRO1", nombre: "Desarrollo Profesional en Bioingeniería 1", ciclo: 9, prerrequisitos: [], desbloquea: [] },
  { id: "DES_PRO2", nombre: "Desarrollo Profesional en Bioingeniería 2", ciclo: 9, prerrequisitos: [], desbloquea: [] },
  { id: "ELECT_TES1", nombre: "Electivo de Tesis 1", ciclo: 9, prerrequisitos: [], desbloquea: [] },
  { id: "ELECT1", nombre: "Curso electivo 1", ciclo: 9, prerrequisitos: [], desbloquea: [] },
  { id: "ELECT2", nombre: "Curso electivo 2", ciclo: 9, prerrequisitos: [], desbloquea: [] },
  { id: "DES_PRO3", nombre: "Desarrollo Profesional en Bioingeniería 3", ciclo: 10, prerrequisitos: [], desbloquea: [] },
  { id: "NORM_BIO", nombre: "Normas y Regulaciones en Bioingeniería", ciclo: 10, prerrequisitos: ["NEG_BIO"], desbloquea: [] },
  { id: "DES_PRO4", nombre: "Desarrollo Profesional en Bioingeniería 4", ciclo: 10, prerrequisitos: [], desbloquea: [] },
  { id: "ELECT_TES2", nombre: "Electivo de Tesis 2", ciclo: 10, prerrequisitos: [], desbloquea: [] },
  { id: "ELECT3", nombre: "Curso electivo 3", ciclo: 10, prerrequisitos: [], desbloquea: [] },
  { id: "ELECT4", nombre: "Curso electivo 4", ciclo: 10, prerrequisitos: [], desbloquea: [] }
];

// Código previo (cargarCursos, aprobarCurso, etc.) continúa igual...
