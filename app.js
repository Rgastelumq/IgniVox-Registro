<<<<<<< HEAD
const app = document.getElementById('app');

// --- PANTALLA 1: INICIO ---
function mostrarInicio() {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 text-center flex flex-col items-center max-w-lg animate-fade-in">
                <img src="logo.png" alt="IgniVox" class="w-32 h-32 object-contain mb-8 drop-shadow-md">
                
                <h1 class="text-6xl font-black text-gray-900 tracking-tighter mb-2 italic">IgniVox</h1>
                <div class="h-1.5 w-20 bg-gradient-to-r from-igniRed to-igniOrange mx-auto mb-4 rounded-full"></div>
                <p class="text-lg text-gray-500 font-bold uppercase tracking-[0.2em] mb-12">Talleres de robótica</p>

                <p class="text-2xl text-gray-800 font-medium mb-12 italic">"El futuro es de quienes lo construyen"</p>

                <button onclick="mostrarSeleccionEscuela()" class="px-14 py-4 text-white font-black text-xl rounded-xl 
                                   bg-gradient-to-r from-igniRed to-igniOrange shadow-lg hover:shadow-orange-300 transition-all active:scale-95">
                    REGISTRARSE
                </button>
            </div>
        </div>
    `;
}

// --- PANTALLA 2: SELECCIONAR ESCUELA ---
window.mostrarSeleccionEscuela = () => {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white">
                <h2 class="text-2xl font-black text-gray-900 mb-6 text-center italic tracking-tighter">Selecciona tu Escuela</h2>
                
                <div class="space-y-4">
                    <button onclick="mostrarFormulario('Benemérito de las Américas')" 
                            class="w-full p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-igniOrange hover:bg-orange-50 transition-all group">
                        <span class="block font-bold text-gray-800 group-hover:text-igniRed uppercase text-sm">Benemérito de las Américas</span>
                        <span class="text-[10px] text-gray-400 font-mono mt-1 block uppercase tracking-wider">Clave: 02EPR0111Z</span>
                    </button>
                    
                    <div class="p-6 border-2 border-dashed border-gray-100 rounded-2xl opacity-40 cursor-not-allowed">
                        <span class="block font-bold text-gray-300 text-sm italic">Próximamente...</span>
                    </div>
                </div>
                
                <button onclick="mostrarInicio()" class="mt-8 text-gray-400 text-[10px] font-bold uppercase tracking-widest w-full text-center hover:text-gray-600">
                    ← Volver al inicio
                </button>
            </div>
        </div>
    `;
};

// --- PANTALLA 3: FORMULARIO ---
window.mostrarFormulario = (escuela) => {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 w-full max-w-md bg-white/95 p-8 rounded-3xl shadow-2xl border border-white/50">
                
                <div class="flex items-start justify-between mb-6 border-b border-gray-100 pb-5">
                    <div>
                        <p class="text-[9px] font-black text-igniOrange uppercase tracking-[0.2em] mb-1">
                            Clave: 02EPR0111Z
                        </p>
                        <h2 class="text-3xl font-black text-gray-900 italic tracking-tighter leading-none">
                            Inscripción
                        </h2>
                        <p class="text-[10px] text-gray-400 font-bold mt-2 uppercase">${escuela}</p>
                    </div>
                    <div class="p-2 bg-white rounded-xl shadow-sm border border-gray-50">
                        <img src="logo-escuela.png" alt="Logo Escuela" class="w-14 h-14 object-contain">
                    </div>
                </div>
                
                <form id="registroForm" class="space-y-4">
                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Nombre del Alumno</label>
                        <input type="text" required name="nombre" placeholder="Nombre completo" 
                               class="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-igniOrange outline-none transition-all text-sm">
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Grado</label>
                            <select name="grado" class="w-full p-3 bg-gray-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-igniOrange text-sm">
                                <option value="3°">3° Primaria</option>
                                <option value="4°">4° Primaria</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Grupo</label>
                            <select name="grupo" id="selectGrupo" class="w-full p-3 bg-gray-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-igniOrange text-sm">
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">¿Experiencia previa?</label>
                        <select name="experiencia" class="w-full p-3 bg-gray-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-igniOrange text-sm">
                            <option value="ninguna">No, es mi primera vez</option>
                            <option value="basica">Un poco (juegos/piezas)</option>
                            <option value="avanzada">Sí, ya he tomado cursos</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Contacto Tutor</label>
                        <input type="text" required name="contacto" placeholder="Teléfono o Correo" 
                               class="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-igniOrange outline-none transition-all text-sm">
                    </div>

                    <button type="submit" id="btnConfirmar" class="w-full py-4 mt-3 bg-gray-900 text-white font-black rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 uppercase tracking-widest text-xs">
                        Confirmar Registro
                    </button>
                </form>

                <button onclick="mostrarSeleccionEscuela()" class="mt-5 text-gray-400 text-[9px] font-bold uppercase tracking-widest w-full text-center hover:text-gray-600 block">
                    — Cambiar Centro —
                </button>
            </div>
        </div>
    `;

    // --- LÓGICA DE ENVÍO Y ASIGNACIÓN ---
    document.getElementById('registroForm').onsubmit = async (e) => {
        e.preventDefault();
        
        const btn = document.getElementById('btnConfirmar');
        btn.innerText = "ENVIANDO...";
        btn.disabled = true;

        const formData = new FormData(e.target);
        const datos = Object.fromEntries(formData.entries());

        // Limpieza de datos del grupo
        const grupoFinal = datos.grupo.trim().toUpperCase();

        try {
            // !!! REEMPLAZA ESTO CON TU URL DE GOOGLE !!!
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzRPWReFoMx7LnnDleYMOptgSasPjDNvU-_gHaaoXod6jhW6fxfQJX98sVhnobLYQsj/exec'; 
            
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', 
                body: JSON.stringify(datos)
            });
            
            // Pasamos el grupo final a la pantalla de éxito
            mostrarExito(grupoFinal); 
        } catch (error) {
            console.error('Error!', error.message);
            alert("Error al enviar. Verifica tu conexión.");
            btn.innerText = "Confirmar Registro";
            btn.disabled = false;
        }
    };
};

// --- PANTALLA FINAL: ÉXITO CON LÓGICA DE MAESTROS ---
function mostrarExito(grupo) {
    let nombreMaestro = "";
    
    // Si eligieron A es Jesús, si no (B) es Adan
    if (grupo === "A") {
        nombreMaestro = "Jesús Ramón Gastelum Quijada";
    } else {
        nombreMaestro = "Adan Alberto Roman Carrillo";
    }

    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden text-center"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 animate-fade-in">
                <div class="text-6xl mb-6">🔥</div>
                <h2 class="text-4xl font-black text-gray-900 mb-4 italic">¡Registro Exitoso!</h2>
                
                <div class="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl max-w-sm mx-auto mb-8">
                    <p class="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em] mb-2">Tu instructor asignado:</p>
                    <p class="text-xl text-igniRed font-black italic leading-tight">
                        ${nombreMaestro}
                    </p>
                    <div class="mt-3 inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase">
                        Taller Grupo ${grupo}
                    </div>
                </div>

                <p class="text-lg text-gray-700 max-w-sm leading-relaxed font-medium mx-auto px-4 mb-10">
                    Prepara tus herramientas, el futuro te espera. Los maestros de la Benemérito ya tienen tu lugar apartado.
                </p>

                <button onclick="location.reload()" class="text-gray-900 font-black border-b-2 border-gray-900 pb-1 uppercase text-[10px] tracking-widest hover:text-igniRed hover:border-igniRed transition-all">
                    Terminar
                </button>
            </div>
        </div>
    `;
}

// --- FUNCIÓN DECORATIVA (CIRCUITOS) ---
function decoracionCircuitos() {
    return `
        <div class="absolute left-0 top-0 h-full w-24 md:w-48 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 800" class="h-full w-full">
                <path d="M0 100 L40 100 L60 120 M0 250 L30 250 L50 230 L50 180" stroke="#B20000" stroke-width="2" fill="none" />
                <circle cx="60" cy="120" r="4" fill="#B20000" />
                <circle cx="50" cy="180" r="4" fill="#B20000" />
            </svg>
        </div>
        <div class="absolute right-0 top-0 h-full w-24 md:w-48 opacity-10 pointer-events-none scale-x-[-1]">
            <svg viewBox="0 0 100 800" class="h-full w-full">
                <path d="M0 150 L50 150 L70 170 M0 350 L40 350 L60 330" stroke="#FF8C00" stroke-width="2" fill="none" />
                <circle cx="70" cy="170" r="4" fill="#FF8C00" />
                <circle cx="60" cy="330" r="4" fill="#FF8C00" />
            </svg>
        </div>
    `;
}

=======
const app = document.getElementById('app');

// --- PANTALLA 1: INICIO ---
function mostrarInicio() {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 text-center flex flex-col items-center max-w-lg animate-fade-in">
                <img src="logo.png" alt="IgniVox" class="w-32 h-32 object-contain mb-8 drop-shadow-md">
                
                <h1 class="text-6xl font-black text-gray-900 tracking-tighter mb-2 italic">IgniVox</h1>
                <div class="h-1.5 w-20 bg-gradient-to-r from-igniRed to-igniOrange mx-auto mb-4 rounded-full"></div>
                <p class="text-lg text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">Talleres de robótica</p>

                <div class="flex flex-col gap-4 w-full max-w-xs">
                    <button onclick="mostrarSeleccionEscuela()" class="px-8 py-4 text-white font-black text-lg rounded-xl 
                                       bg-gradient-to-r from-igniRed to-igniOrange shadow-lg hover:shadow-orange-300 transition-all active:scale-95">
                        INSCRIPCIÓN 2026
                    </button>
                    
                    <button onclick="mostrarPortal()" class="px-8 py-4 text-gray-900 font-black text-lg rounded-xl 
                                       bg-white border-2 border-gray-900 hover:bg-gray-50 transition-all active:scale-95">
                        PORTAL DEL ALUMNO
                    </button>
                </div>

                <p class="mt-12 text-xl text-gray-800 font-medium italic">"El futuro es de quienes lo construyen"</p>
            </div>
        </div>
    `;
}

// --- PANTALLA 2: SELECCIONAR ESCUELA ---
window.mostrarSeleccionEscuela = () => {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white">
                <h2 class="text-2xl font-black text-gray-900 mb-6 text-center italic tracking-tighter">Selecciona tu Escuela</h2>
                
                <div class="space-y-4">
                    <button onclick="mostrarFormulario('Benemérito de las Américas')" 
                            class="w-full p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-igniOrange hover:bg-orange-50 transition-all group">
                        <span class="block font-bold text-gray-800 group-hover:text-igniRed uppercase text-sm">Benemérito de las Américas</span>
                        <span class="text-[10px] text-gray-400 font-mono mt-1 block uppercase tracking-wider">Clave: 02EPR0111Z</span>
                    </button>
                    
                    <div class="p-6 border-2 border-dashed border-gray-100 rounded-2xl opacity-40 cursor-not-allowed text-center">
                        <span class="block font-bold text-gray-300 text-sm italic">Próximamente nuevas sedes...</span>
                    </div>
                </div>
                
                <button onclick="mostrarInicio()" class="mt-8 text-gray-400 text-[10px] font-bold uppercase tracking-widest w-full text-center hover:text-gray-600">
                    ← Volver al inicio
                </button>
            </div>
        </div>
    `;
};

// --- PANTALLA 3: FORMULARIO ---
window.mostrarFormulario = (escuela) => {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 w-full max-w-md bg-white/95 p-8 rounded-3xl shadow-2xl border border-white/50">
                
                <div class="flex items-start justify-between mb-6 border-b border-gray-100 pb-5">
                    <div>
                        <p class="text-[9px] font-black text-igniOrange uppercase tracking-[0.2em] mb-1">
                            Clave: 02EPR0111Z
                        </p>
                        <h2 class="text-3xl font-black text-gray-900 italic tracking-tighter leading-none">
                            Inscripción
                        </h2>
                        <p class="text-[10px] text-gray-400 font-bold mt-2 uppercase">${escuela}</p>
                    </div>
                    <div class="p-2 bg-white rounded-xl shadow-sm border border-gray-50">
                        <img src="logo-escuela.png" alt="Logo Escuela" class="w-14 h-14 object-contain">
                    </div>
                </div>
                
                <form id="registroForm" class="space-y-4">
                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Nombre del Alumno</label>
                        <input type="text" required name="nombre" placeholder="Nombre completo" 
                               class="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-igniOrange outline-none transition-all text-sm">
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Grado</label>
                            <select name="grado" class="w-full p-3 bg-gray-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-igniOrange text-sm">
                                <option value="3ero">3ero Primaria</option>
                                <option value="4to">4to Primaria</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Grupo</label>
                            <select name="grupo" class="w-full p-3 bg-gray-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-igniOrange text-sm">
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">¿Experiencia previa?</label>
                        <select name="experiencia" class="w-full p-3 bg-gray-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-igniOrange text-sm">
                            <option value="ninguna">No, es mi primera vez</option>
                            <option value="basica">Un poco (juegos/piezas)</option>
                            <option value="avanzada">Sí, ya he tomado cursos</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Correo del Padre (Para Código)</label>
                        <input type="email" required name="contacto" placeholder="ejemplo@correo.com" 
                               class="w-full p-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-igniOrange outline-none transition-all text-sm">
                    </div>

                    <button type="submit" id="btnConfirmar" class="w-full py-4 mt-3 bg-gray-900 text-white font-black rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 uppercase tracking-widest text-xs">
                        Confirmar Registro
                    </button>
                </form>
            </div>
        </div>
    `;

    document.getElementById('registroForm').onsubmit = async (e) => {
        e.preventDefault();
        const btn = document.getElementById('btnConfirmar');
        btn.innerText = "PROCESANDO...";
        btn.disabled = true;

        const formData = new FormData(e.target);
        const datos = Object.fromEntries(formData.entries());

        try {
            // REEMPLAZA ESTA URL CON LA NUEVA DE GOOGLE APPS SCRIPT
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxxFmtc-yQKFlXoFU03qbudwnZnCLf8GN-yckrSrVXf0glit5NynW99JFvmLHLtTKM0Dw/exec';
            
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', 
                body: JSON.stringify(datos)
            });
            
            mostrarExito(datos.grupo.toUpperCase()); 
        } catch (error) {
            alert("Error de conexión. Intenta de nuevo.");
            btn.innerText = "Confirmar Registro";
            btn.disabled = false;
        }
    };
};

// --- PANTALLA 4: PORTAL DEL ALUMNO ---
window.mostrarPortal = () => {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 w-full max-w-sm bg-white p-8 rounded-3xl shadow-2xl text-center">
                <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span class="text-3xl">🔑</span>
                </div>
                <h2 class="text-2xl font-black text-gray-900 mb-2 italic uppercase">Portal Alumno</h2>
                <p class="text-sm text-gray-400 mb-8">Ingresa tu código para ver avances</p>
                
                <input type="text" id="codigoInput" placeholder="BEN-XXXX" 
                       class="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl mb-4 text-center font-mono font-bold outline-none focus:border-igniOrange">
                
                <button onclick="alert('Sistema en mantenimiento. Las calificaciones se habilitarán al inicio del taller.')" 
                        class="w-full py-4 bg-black text-white font-black rounded-xl hover:bg-gray-800 transition-all mb-4">
                    CONSULTAR
                </button>
                
                <button onclick="mostrarInicio()" class="text-xs font-bold text-gray-400 uppercase tracking-widest">← Volver</button>
            </div>
        </div>
    `;
};

// --- PANTALLA FINAL: ÉXITO ---
function mostrarExito(grupo) {
    const maestro = (grupo === "A") ? "Jesús Ramón Gastelum Quijada" : "Adan Alberto Roman Carrillo";

    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden text-center"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 animate-bounce-in">
                <div class="text-6xl mb-6">🔥</div>
                <h2 class="text-4xl font-black text-gray-900 mb-4 italic leading-none">¡REGISTRO<br>EXITOSO!</h2>
                
                <div class="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl max-w-sm mx-auto mb-6">
                    <p class="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-2">Instructor Asignado:</p>
                    <p class="text-xl text-igniRed font-black italic mb-4">${maestro}</p>
                    <div class="py-2 px-4 bg-orange-100 text-igniOrange rounded-lg text-xs font-bold uppercase">
                        Revisa tu correo para obtener tu CÓDIGO DE ALUMNO
                    </div>
                </div>

                <p class="text-sm text-gray-600 max-w-xs mx-auto mb-10 font-medium">
                    Con tu código podrás entrar al portal y revisar tus observaciones y calificaciones durante el taller.
                </p>

                <button onclick="location.reload()" class="px-12 py-4 bg-gray-900 text-white font-black rounded-xl uppercase text-xs tracking-widest">
                    LISTO
                </button>
            </div>
        </div>
    `;
}

// --- DECORACIÓN ---
function decoracionCircuitos() {
    return `
        <div class="absolute left-0 top-0 h-full w-24 md:w-48 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 800" class="h-full w-full"><path d="M0 100 L40 100 L60 120 M0 250 L30 250 L50 230" stroke="#B20000" stroke-width="2" fill="none" /></svg>
        </div>
        <div class="absolute right-0 top-0 h-full w-24 md:w-48 opacity-10 pointer-events-none scale-x-[-1]">
            <svg viewBox="0 0 100 800" class="h-full w-full"><path d="M0 150 L50 150 L70 170" stroke="#FF8C00" stroke-width="2" fill="none" /></svg>
        </div>
    `;
}

>>>>>>> a102c3c (update)
mostrarInicio();