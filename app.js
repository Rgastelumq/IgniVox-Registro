const app = document.getElementById('app');
let estadoRegistro = {
    especialidad: '',
    instructor: '',
    color: 'igniOrange'
};
function getGradientStyle(color) {
    if (color === 'teal') {
        return "background: linear-gradient(to bottom, #FFFFFF 40%, #F0FDFA 80%, #CCFBF1 100%) !important;";
    } 
    if (color === 'purple') {
        return "background: linear-gradient(to bottom, #FFFFFF 40%, #F5F3FF 80%, #fdd8fd 100%) !important;";
    }
    return "background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%) !important;";
}
function generarCodigoAlumno() {
    const esp = String(estadoRegistro.especialidad || '').toLowerCase();
    
    let prefijo = 'PAT';
    if (esp.includes('programación') || esp.includes('programacion')) {
        prefijo = 'PROG';
    } else if (esp.includes('mecatrónica') || esp.includes('mecatronica')) {
        prefijo = 'MEC';
    }
    
    const numero = Math.floor(100 + Math.random() * 900);
    
    return `PAT-${prefijo}-${numero}`;
}

    function mostrarInicio() {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 text-center flex flex-col items-center max-w-lg animate-fade-in">
                <img src="logo-ignivox.png" alt="IgniVox" class="w-32 h-32 object-contain mb-8 drop-shadow-md">
                
                <h1 class="text-6xl font-black text-gray-900 tracking-tighter mb-2 italic text-gray-900">IgniVox</h1>
                <div class="h-1.5 w-20 bg-gradient-to-r from-igniRed to-igniOrange mx-auto mb-4 rounded-full"></div>
                <p class="text-lg text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">Talleres de robótica</p>

                <div class="flex flex-col gap-4 w-full max-w-xs">
                    <button onclick="mostrarEspecialidad()" class="px-8 py-4 text-white font-black text-lg rounded-xl 
                                       bg-gradient-to-r from-igniRed to-igniOrange shadow-lg hover:shadow-orange-300 transition-all active:scale-95">
                        REGISTRARSE
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

window.mostrarEspecialidad = () => {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            <div class="relative z-10 w-full max-w-md text-center">
                <h2 class="text-3xl font-black text-gray-900 mb-8 italic tracking-tighter">ELIGE TU ÁREA</h2>
                
                <div class="space-y-4">
                    <!-- BOTÓN PROGRAMACIÓN -->
                    <button onclick="seleccionarEspecialidad('Programación', 'Jesús Ramón Gastelum Quijada', 'teal')" 
                            class="w-full p-6 rounded-3xl bg-gradient-to-r from-teal-400 to-cyan-600 text-white shadow-lg hover:scale-[1.02] transition-all flex items-center gap-6">
                        <div class="bg-white p-3 rounded-2xl">
                            <img src="logo-ignivox-programacion.png" alt="Prog" class="w-12 h-12 object-contain">
                        </div>
                        <div class="text-left">
                            <span class="block text-xl font-black italic">PROGRAMACIÓN</span>
                            <span class="block text-[9px] mt-1 font-bold bg-white/20 px-2 py-0.5 rounded-full text-center">📞 Tel: 686 245 0097</span>
                        </div>
                    </button>

                    <!-- BOTÓN MECATRÓNICA -->
                    <button onclick="seleccionarEspecialidad('Mecatronica', 'Adan Alberto Roman Carrillo', 'purple')" 
                            class="w-full p-6 rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-700 text-white shadow-lg hover:scale-[1.02] transition-all flex items-center gap-6">
                        <div class="bg-white p-3 rounded-2xl">
                            <img src="logo-ignivox-mecatronica.png" alt="Meca" class="w-12 h-12 object-contain">
                        </div>
                        <div class="text-left">
                            <span class="block text-xl font-black italic">MECATRÓNICA</span>
                            <span class="block text-[9px] mt-1 font-bold bg-white/20 px-2 py-0.5 rounded-full text-center">📞 Tel: 686 509 1893</span>
                        </div>
                    </button>
                </div>

                <button onclick="mostrarInicio()" class="mt-8 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    ← Volver
                </button>
            </div>
        </div>
    `;
};

window.seleccionarEspecialidad = (especialidad, instructor, color) => {
    estadoRegistro = { especialidad, instructor, color };
    mostrarSeleccionEscuela();
};
window.mostrarInfoTaller = (taller) => {
    const info = {
        programacion: {
            titulo: "PROGRAMACIÓN",
            desc: "Dominarás el desarrollo de aplicaciones web progresivas (PWA), lógica de algoritmos, diseño de interfaces y la creación de software escalable para el mundo digital.",
            color: "from-teal-400 to-cyan-600"
        },
        mecatronica: {
            titulo: "MECATRÓNICA",
            desc: "Aprenderás a integrar sistemas mecánicos, electrónicos y de control. Diseñarás desde circuitos básicos hasta robots autónomos e industriales.",
            color: "from-purple-500 to-indigo-700"
        }
    };

    const data = info[taller];

    app.innerHTML = `
        <div class="min-h-screen p-6 flex items-center justify-center" style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            <div class="w-full max-w-sm bg-white p-8 rounded-3xl shadow-2xl text-center border-t-8 border-gray-900">
                <h2 class="text-2xl font-black italic mb-4">${data.titulo}</h2>
                <p class="text-gray-600 text-sm font-medium mb-8 leading-relaxed">${data.desc}</p>
                <button onclick="mostrarEspecialidad()" 
                        class="w-full py-4 bg-gradient-to-r ${data.color} text-white font-black rounded-xl hover:opacity-90 transition-all">
                    ENTENDIDO
                </button>
            </div>
        </div>
    `;
};

window.mostrarSeleccionEscuela = () => {
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth();

    let etiquetaHTML = '';

    if (estadoRegistro.especialidad === 'Mecatronica') {
        if (dia === 4 && mes === 4) {
            etiquetaHTML = `
                <div class="absolute top-0 right-0 bg-red-600 text-white text-[8px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter animate-pulse">
                    ⚙️ ÚLTIMO DÍA DE INSCRIPCIÓN VIRTUAL
                </div>`;
        } else if (dia >= 5 && mes === 4) {
            etiquetaHTML = `
                <div class="absolute top-0 right-0 bg-green-500 text-white text-[8px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter">
                    🟢 EN PROCESO
                </div>`;
        }
    }

    if (estadoRegistro.especialidad === 'Programación') {
        if ((dia === 4 || dia === 5) && mes === 4) {
            etiquetaHTML = `
                <div class="absolute top-0 right-0 bg-teal-600 text-white text-[8px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter">
                    REGISTRO VIRTUAL ABIERTO HASTA EL 6 DE MAYO
                </div>`;
        } else if (dia === 6 && mes === 4) {
            etiquetaHTML = `
                <div class="absolute top-0 right-0 bg-red-600 text-white text-[8px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter animate-pulse">
                    💻 ÚLTIMO DÍA DE INSCRIPCIÓN VIRTUAL
                </div>`;
        } else if (dia >= 7 && mes === 4) {
            etiquetaHTML = `
                <div class="absolute top-0 right-0 bg-green-500 text-white text-[8px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter">
                    🟢 EN PROCESO
                </div>`;
        }
    }

    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="${getGradientStyle(estadoRegistro.color)}">

            ${decoracionCircuitos(estadoRegistro.color)}

            <div class="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white">
                <h2 class="text-2xl font-black text-gray-900 mb-6 text-center italic tracking-tighter">Selecciona tu Escuela</h2>
                
                <div class="space-y-4">
                    <button onclick="mostrarFormulario('Escuela primaria Patria')" 
                            class="w-full p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-igniOrange hover:bg-orange-50 transition-all group relative overflow-hidden">
                        
                        ${etiquetaHTML}

                        <span class="block font-bold text-gray-800 group-hover:text-igniRed uppercase text-sm mt-2">Escuela primaria Patria</span>
                        <span class="text-[10px] text-gray-400 font-mono mt-1 block uppercase tracking-wider">Clave: 02DPR0057F</span>
                    </button>
                </div>
                
                <button onclick="mostrarInicio()" class="mt-8 text-gray-400 text-[10px] font-bold uppercase tracking-widest w-full text-center">
                    ← Volver al inicio
                </button>
            </div>
        </div>
    `;
};

window.mostrarFormulario = (escuela) => {
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth();

    const esMecaBloqueado = escuela === 'Escuela primaria Patria' && 
                            estadoRegistro.especialidad === 'Mecatronica' && 
                            dia >= 5 && mes === 4;

    const esProgBloqueado = escuela === 'Escuela primaria Patria' && 
                            estadoRegistro.especialidad === 'Programación' && 
                            dia >= 7 && mes === 4;

    const estaBloqueado = esMecaBloqueado || esProgBloqueado;

    const contacto = estadoRegistro.especialidad === 'Mecatronica' 
                     ? { tel: '6865091893', msg: '686 509 1893' } 
                     : { tel: '6862450097', msg: '686 245 0097' };

    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="${getGradientStyle(estadoRegistro.color)}">
            
            ${decoracionCircuitos(estadoRegistro.color)}

            <div class="relative z-10 w-full max-w-md bg-white/95 p-8 rounded-3xl shadow-2xl overflow-hidden">
                
                <!-- CARITA TRISTE SUPERPUESTA -->
                ${estaBloqueado ? `
                    <div class="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                        <span class="text-[150px] font-black text-gray-400/20 select-none">:(</span>
                    </div>
                ` : ''}

                <div class="mb-6 border-b border-gray-100 pb-5">
                    <p class="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">
                        Especialidad: ${estadoRegistro.especialidad}
                    </p>
                    <h2 class="text-3xl font-black text-gray-900 italic tracking-tighter">Inscripción</h2>
                    <p class="text-[10px] text-gray-400 font-bold uppercase mt-1">Instructor: ${estadoRegistro.instructor}</p>
                </div>
                
                <form id="registroForm" class="space-y-4 ${estaBloqueado ? 'opacity-20 pointer-events-none' : ''}">
                    <input type="hidden" name="especialidad" value="${estadoRegistro.especialidad}">
                    <input type="hidden" name="instructor" value="${estadoRegistro.instructor}">
                    <input type="hidden" name="escuela" value="${escuela}">

                    <!-- NOMBRE -->
                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Nombre del Alumno</label>
                        <input type="text" required name="nombre" placeholder="Nombre completo" 
                               class="w-full p-3 bg-gray-50 rounded-xl outline-none text-sm focus:ring-2 focus:ring-${estadoRegistro.color}-500">
                    </div>

                    <!-- GRADO -->
                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Grado</label>
                        <select name="grado" class="w-full p-3 bg-gray-50 rounded-xl outline-none text-sm focus:ring-2 focus:ring-${estadoRegistro.color}-500">
                            <option value="3ero">3ero Primaria</option>
                            <option value="4to">4to Primaria</option>
                        </select>
                    </div>

                    <!-- CORREO -->
                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">Correo del Padre, madre o tutor</label>
                        <input type="email" required name="contacto" placeholder="ejemplo@correo.com" 
                               class="w-full p-3 bg-gray-50 rounded-xl outline-none text-sm focus:ring-2 focus:ring-${estadoRegistro.color}-500">
                    </div>

                    <!-- WHATSAPP -->
                    <div>
                        <label class="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1 tracking-widest">WhatsApp / Teléfono del padre, madre o tutor</label>
                        <input type="tel" name="telefono" required placeholder="686 123 4567"
                               class="w-full p-3 bg-gray-50 rounded-xl outline-none text-sm focus:ring-2 focus:ring-${estadoRegistro.color}-500">
                    </div>

                    ${!estaBloqueado ? `
                        <button type="submit" id="btnConfirmar"
                                class="w-full py-4 mt-3 bg-gray-900 text-white font-black rounded-xl hover:bg-black transition-all uppercase tracking-widest text-xs">
                            Confirmar Registro
                        </button>
                    ` : ''}
                </form>

                <!-- SECCIÓN DE BLOQUEO CON LINK DE CONSULTA -->
                ${estaBloqueado ? `
                    <div class="relative z-30 mt-4 text-center">
                        <div class="p-4 bg-green-50 border border-green-100 rounded-2xl">
                            <p class="text-green-700 font-black italic text-sm uppercase tracking-tighter">
                                Taller en curso<span class="animacion-puntos"></span>
                            </p>
                            <p class="text-[9px] text-green-600 font-bold mt-1 uppercase">
                                El registro virtual ha cerrado
                            </p>
                        </div>
                        
                        <a href="https://wa.me/52${contacto.tel}?text=Hola,%20me%20interesa%20consultar%20sobre%20el%20taller%20de%20${estadoRegistro.especialidad}%20en%20la%20Escuela%20Patria" 
                           target="_blank"
                           class="inline-block mt-3 text-blue-600 text-[11px] font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                            [ Consultar vía WhatsApp ]
                        </a>
                    </div>
                ` : ''}

                <button onclick="mostrarSeleccionEscuela()" class="relative z-30 mt-6 w-full text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                    ← Regresar
                </button>
            </div>
        </div>
    `;

    const form = document.getElementById('registroForm');
    if (form && !estaBloqueado) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const boton = document.getElementById('btnConfirmar');
            boton.innerText = 'ENVIANDO...';
            boton.disabled = true;

            const formData = new FormData(this);
            const datos = Object.fromEntries(formData.entries());
            
            try {
                await fetch('https://script.google.com/macros/s/AKfycbzeeedNiiyGMmk_I0xxdDbf-P9JF30-SfbNpXI63oWGHjYNHGjjR97VRCFwC_swDVJw3w/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify(datos)
                });
                mostrarExito(); 
            } catch (err) {
                alert("Error de conexión, intenta de nuevo.");
                boton.innerText = "Confirmar Registro";
                boton.disabled = false;
            }
        });
    }
};
window.mostrarExito = () => {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="${getGradientStyle(estadoRegistro.color)}">
            <div class="relative z-10 w-full max-w-sm bg-white p-10 rounded-3xl shadow-2xl text-center">
                <h2 class="text-2xl font-black text-gray-900 italic tracking-tighter mb-4">¡REGISTRO EXITOSO!</h2>
                <p class="text-sm font-bold text-gray-600 mb-8">
                    Esté pendiente a su correo electrónico para más información.
                </p>
                <button onclick="window.location.reload()" 
                        class="w-full py-4 bg-gray-900 text-white font-black rounded-xl hover:bg-black transition-all">
                    VOLVER AL INICIO
                </button>
            </div>
        </div>
    `;
};

window.mostrarPortal = () => {
    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="background: linear-gradient(to bottom, #FFFFFF 40%, #FFF0ED 80%, #FFD6CC 100%);">
            
            ${decoracionCircuitos()}

            <div class="relative z-10 w-full max-w-sm bg-white p-8 rounded-3xl shadow-2xl text-center">
                <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">🔑</div>
                <h2 class="text-2xl font-black text-gray-900 mb-2 italic uppercase">Portal Alumno</h2>
                <p class="text-sm text-gray-400 mb-8">Ingresa tu código para ver avances</p>
                
                <input type="text" id="codigoInput" placeholder="PAT-XXXX" 
                       class="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl mb-4 text-center font-mono font-bold outline-none focus:border-igniOrange uppercase">
                
                <div id="resultadoBusqueda" class="hidden mb-6 p-4 bg-orange-50 rounded-2xl border border-orange-100 text-left"></div>

                <button onclick="buscarCodigo()" id="btnConsulta"
                        class="w-full py-4 bg-black text-white font-black rounded-xl hover:bg-gray-800 transition-all mb-4">
                    CONSULTAR
                </button>
                
                <button onclick="mostrarInicio()" class="text-xs font-bold text-gray-400 uppercase tracking-widest">← Volver</button>
            </div>
        </div>
    `;
};

async function buscarCodigo() {
    const codigo = document.getElementById('codigoInput').value.trim().toUpperCase();
    const btn = document.getElementById('btnConsulta');

    if (!codigo) return alert("Ingresa un código");

    btn.innerText = "BUSCANDO...";
    btn.disabled = true;

    try {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzeeedNiiyGMmk_I0xxdDbf-P9JF30-SfbNpXI63oWGHjYNHGjjR97VRCFwC_swDVJw3w/exec';
        const response = await fetch(`${scriptURL}?codigo=${codigo}`);
        const data = await response.json();

        if (data.error || !data.nombre) {
            alert("Código no encontrado o error en datos.");
        } else {
            abrirPanelAlumno(data);
        }
    } catch (e) {
        console.error(e);
        alert("Error de conexión.");
    } finally {
        btn.innerText = "CONSULTAR";
        btn.disabled = false;
    }
}

function decoracionCircuitos(color) {
    const tealColor = '#0d9488';
    const purpleColor = '#7e22ce';

    if (color === 'teal') {
        return `
            <div class="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="pix" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <rect width="5" height="5" fill="${tealColor}"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pix)" />
                </svg>
            </div>
        `;
    } else if (color === 'purple') {
        return `
            <div class="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0">
                <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none">
                    <circle cx="50" cy="50" r="40" stroke="${purpleColor}" stroke-width="20" fill="none" stroke-dasharray="20 10"/>
                    <circle cx="150" cy="150" r="40" stroke="${purpleColor}" stroke-width="20" fill="none" stroke-dasharray="20 10"/>
                </svg>
            </div>
        `;
    }
    return "";
}

function abrirPanelAlumno(datos) {
    const esProg = String(datos.especialidad).toLowerCase().includes('prog');
    const colorClave = esProg ? 'teal' : 'purple';
    const gradienteBoton = esProg ? 'from-teal-400 to-cyan-600' : 'from-purple-500 to-indigo-700';

    app.innerHTML = `
        <div class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden"
             style="${getGradientStyle(colorClave)}">
            
            ${decoracionCircuitos(colorClave)}

            <div class="relative z-10 w-full max-w-md bg-white/95 p-8 rounded-3xl shadow-2xl border-t-8 ${esProg ? 'border-teal-500' : 'border-purple-600'}">
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h2 class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Portal del Alumno</h2>
                        <h1 class="text-2xl font-black italic text-gray-900">¡HOLA, ${datos.nombre.split(' ')[0].toUpperCase()}!</h1>
                    </div>
                    <div class="bg-gray-100 p-2 rounded-xl">
                        <span class="text-2xl">${esProg ? '💻' : '🤖'}</span>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Calificación</p>
                        <p class="text-2xl font-black text-igniRed">${datos.calificacion || 'N/A'}</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <p class="text-[10px] font-bold text-gray-400 uppercase mb-1">Área</p>
                        <p class="text-xs font-black text-gray-700 uppercase">${datos.especialidad}</p>
                    </div>
                </div>

                <div class="bg-orange-50 p-4 rounded-2xl border border-orange-100 mb-8">
                    <p class="text-[10px] font-bold text-igniOrange uppercase mb-1">Observaciones del Instructor:</p>
                    <p class="text-sm text-gray-700 italic">"${datos.observaciones || 'Sin comentarios por ahora.'}"</p>
                </div>

                <div class="space-y-3">
                    <button onclick="window.location.reload()" class="w-full py-4 bg-gray-900 text-white font-black rounded-xl shadow-lg hover:bg-black transition-all uppercase text-xs tracking-widest">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
            
            <p class="mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">IgniVox Labs © 2026</p>
        </div>
    `;
}
mostrarInicio();