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

    // --- LÓGICA DE ENVÍO A GOOGLE SHEETS ---
    document.getElementById('registroForm').onsubmit = async (e) => {
        e.preventDefault();
        
        const btn = document.getElementById('btnConfirmar');
        btn.innerText = "ENVIANDO...";
        btn.disabled = true;

        const formData = new FormData(e.target);
        const datos = Object.fromEntries(formData.entries());

        try {
            // REEMPLAZA ESTA URL CON LA QUE TE DIO GOOGLE APPS SCRIPT
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzRPWReFoMx7LnnDleYMOptgSasPjDNvU-_gHaaoXod6jhW6fxfQJX98sVhnobLYQsj/exec';
            
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', 
                body: JSON.stringify(datos)
            });
            
            mostrarExito();
        } catch (error) {
            console.error('Error!', error.message);
            alert("Error al enviar. Verifica tu conexión.");
            btn.innerText = "Confirmar Registro";
            btn.disabled = false;
        }
    };
};

// --- PANTALLA FINAL: ÉXITO ---
function mostrarExito() {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden text-center"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10">
                <div class="text-6xl mb-6">🔥</div>
                <h2 class="text-4xl font-black text-gray-900 mb-4 italic">¡Registro Exitoso!</h2>
                <p class="text-xl text-gray-700 max-w-sm leading-relaxed font-medium mx-auto px-4">
                    Prepara tus herramientas, el futuro te espera. Los maestros de la Benemérito ya tienen tu lugar apartado.
                </p>
                <button onclick="mostrarInicio()" class="mt-12 text-igniRed font-black border-b-2 border-igniRed pb-1 uppercase text-xs tracking-widest">
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

mostrarInicio();