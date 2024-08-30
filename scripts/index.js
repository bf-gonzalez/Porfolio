// Selecciona todos los enlaces del nav
const navLinks = document.querySelectorAll('.nav-link');

// Añade un listener para el evento scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    // Revisa cada sección para ver cuál está en la vista
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 50; // Ajusta el desplazamiento
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id'); // Obtiene el id de la sección visible
        }
    });

    // Remueve la clase active de todos los enlaces y la agrega al enlace correspondiente
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('#menuList li');
    const infoContainer = document.getElementById('infoContainer');

    const content = {
        Experiencias: 
        `
            <div class="experienceSection">
                <ul id="experienceList">
                    <li class="active">Proyecto ComiCraft</li>
                    <li>Guardia de seguridad</li>
                    <li>Servicio de atención al cliente</li>
                </ul>
                <div id="experienceDetails" class="detailsContainer">
                    <div id="comiCraftDetails" class="experienceCard">
                        <h2>ComiCraft</h2>
                        <p><strong>Ago. 2024 - Ago. 2024</strong></p>
                        <p>ComiCraft es un sitio web donde los usuarios pueden leer y publicar cómics desde la misma plataforma, proporcionando un espacio para consumir sus cómics preferidos y los creados por otros usuarios.</p>
                        <p>Se utilizaron tecnologías como TypeScript, Next.js, Tailwind, NestJS, TypeORM, PostgreSQL, entre otras.</p>
                        <p>Asociado con Henry.</p>
                        <a href="https://comiccraft.vercel.app/" class="btn" target="_blank">Visitar</a>
                    </div>
                    <div id="securityDetails" class="experienceCard" style="display: none;">
                        <h2>Guardia de seguridad</h2>
                        <p><strong>Sept. 2019 - Jul. 2022</strong></p>
                        <p>El edificio contaba con vigilancia las 24 horas, con turnos de 12 horas, control del ingreso de personas al edificio, control de paquetes y cobro de las expensas del edificio.</p>
                        <p>2 años 11 meses | Mendoza, Argentina | Jornada Completa</p>
                    </div>
                    <div id="customerServiceDetails" class="experienceCard" style="display: none;">
                        <h2>Servicio de atención al cliente</h2>
                        <p><strong>Mar. 2013 - Dic. 2018</strong></p>
                        <p>Gestión del producto y atención al cliente en un entorno de alta presión. Manejo de grandes flujos de clientes, asegurando un servicio rápido y eficiente sin comprometer la calidad de la atención. Ventas sugestivas y creación de experiencias positivas para los clientes.</p>
                        <p>5 años 10 meses | San Juan, Argentina | Jornada Completa</p>
                    </div>
                </div>
            </div>
        `,
        Educación: 
        `
            <div class="card">
                <h2>Henry</h2>
                <h3>Desarrollador Full Stack</h3>
                <p>Programación Informática - Aplicaciones Específicas</p>
                <p><strong>Abr. 2024 - Ago. 2024</strong></p>
                <p>Actividades y grupos: Proyectos individuales y en grupos. Desarrollo de proyectos individuales, escalando en conocimiento y experiencia.</p>
                <a href="https://view.pok.tech/c/411b7086-a1d2-431a-bcc7-f48ef067a087" class="btn" target="_blank">Verificar</a>
            </div>
        `,
        Certificaciones: 
        `
            <div class="certificates">
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="https://res.cloudinary.com/dyeji7bvg/image/upload/v1724995737/WhatsApp_Image_2024-08-30_at_2.27.48_AM_rav4by.jpg" alt="Certificado 1">
                    </div>
                    <div class="certificate-content">
                        <h3>Desarrollo Web</h3>
                        <p>San Juan tec</p>
                        <p><strong>Expedición:</strong> oct. 2023</p>
                        <p><strong>Aptitudes:</strong> HTML, CSS</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="https://res.cloudinary.com/dyeji7bvg/image/upload/v1724995136/unnamed_1_cap2zf.jpg" alt="Certificado 2">
                    </div>
                    <div class="certificate-content">
                        <h3>Masterclass de Ciberseguridad</h3>
                        <p>Henry</p>
                        <p><strong>Expedición:</strong> ago. 2024</p>
                        <p><strong>Aptitudes:</strong> Participación en la Masterclass</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="https://res.cloudinary.com/dyeji7bvg/image/upload/v1724995744/WhatsApp_Image_2024-08-30_at_2.28.30_AM_qyqdcz.jpg" alt="Certificado 2">
                    </div>
                    <div class="certificate-content">
                        <h3>Java desde cero a experto</h3>
                        <p>Edutin Academy</p>
                        <p><strong>Expedición:</strong> oct. 2023</p>
                        <p><strong>Aptitudes:</strong> Java</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="https://res.cloudinary.com/dyeji7bvg/image/upload/v1724995728/WhatsApp_Image_2024-08-30_at_2.26.54_AM_utdczi.jpg" alt="Certificado 2">
                    </div>
                    <div class="certificate-content">
                        <h3>Curso de Diseño UX</h3>
                        <p>San Juan tec</p>
                        <p><strong>Expedición:</strong> dic. 2022</p>
                        <p><strong>Aptitudes:</strong> Figma</p>
                    </div>
                </div>
                
                
            </div>
        `,
        Habilidades: 
        `
        <div class="skillsSection">
    <ul id="skillsList">
        <li class="active">Hard Skills</li>
        <li>Soft Skills</li>
    </ul>
    <div id="skillsDetails" class="detailsContainer">
        <div id="hardSkillsDetails" class="skillsCard">
            <h2>Hard Skills</h2>
            <ul class = "Lista">
                <li><strong>Lenguajes de Programación:</strong> JavaScript, TypeScript, Java, Python</li>
                <li><strong>Frameworks y Librerías:</strong> React, NestJS, Express, Node.js</li>
                <li><strong>Bases de Datos:</strong> PostgreSQL, MongoDB</li>
                <li><strong>Herramientas y Entornos de Desarrollo:</strong> Git, VS Code, Sublime Text</li>
                <li><strong>Metodologías y Principios:</strong> Desarrollo Ágil</li>
                <li><strong>Servicios en la Nube:</strong> Cloudinary</li>
                <li><strong>Control de Versiones:</strong> Git, GitHub</li>
            </ul>
        </div>
        <div id="softSkillsDetails" class="skillsCard" style="display: none;">
            <h2>Soft Skills</h2>
            <ul class = "Lista">
                <li><strong>Trabajo en Equipo:</strong> Capacidad para colaborar efectivamente con otros.</li>
                <li><strong>Comunicación:</strong> Habilidad para expresar ideas claramente y escuchar a los demás.</li>
                <li><strong>Resolución de Problemas:</strong> Capacidad para encontrar soluciones eficaces a los desafíos.</li>
                <li><strong>Adaptabilidad:</strong> Capacidad para ajustarse rápidamente a nuevas situaciones y tecnologías.</li>
                <li><strong>Gestión de Tiempo:</strong> Organización y priorización de tareas para cumplir con los plazos.</li>
                <li><strong>Creatividad:</strong> Innovar y proponer nuevas ideas o soluciones.</li>
            </ul>
        </div>
    </div>
</div>
        `,
        Contactarme: 
        `<div class="contactSection">
            <p>Si estás buscando a una persona motivada y dedicada a su trabajo, que prospere en entornos bajo presión y dinámicos, no dudes en contactarme en mis redes:</p>
            <div class="socialLinks">
                <a href="https://www.linkedin.com/in/bruno-gonzalez-a84361301/" target="_blank">
                    <i class="fi fi-brands-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/bf-gonzalez" target="_blank">
                    <i class="fi fi-brands-github"></i>
                    <span>GitHub</span>
                </a>
                <a href="https://www.instagram.com/bgonzalez.ok/" target="_blank">
                    <i class="fi fi-brands-instagram"></i>
                    <span>Instagram</span>
                </a>
            </div>
            <a href="https://drive.google.com/file/d/your-cv-file-id/view?usp=sharing" class="btn" target="_blank">Ver mi CV</a>
        </div>
        `
    };

     // Mostrar la primera sección por defecto
     infoContainer.innerHTML = content.Experiencias;

     // Inicializar la selección de experiencia
     const updateExperienceSection = () => {
         const titles = document.querySelectorAll('#experienceList li');
         const details = {
             "Proyecto ComiCraft": document.getElementById('comiCraftDetails'),
             "Guardia de seguridad": document.getElementById('securityDetails'),
             "Servicio de atención al cliente": document.getElementById('customerServiceDetails')
         };
 
         const showDetails = (selectedTitle) => {
             titles.forEach(title => title.classList.remove('active'));
             for (const key in details) {
                 details[key].style.display = 'none';
             }
             selectedTitle.classList.add('active');
             details[selectedTitle.textContent].style.display = 'block';
         };
 
         // Mostrar por defecto la información de ComiCraft
         showDetails(titles[0]);
 
         titles.forEach(title => {
             title.addEventListener('click', () => {
                 showDetails(title);
             });
         });
     };
 
     // Mostrar por defecto la sección de experiencia
     updateExperienceSection();
     
     // Inicializar la selección de habilidades
    const updateSkillsSection = () => {
        const titles = document.querySelectorAll('#skillsList li');
        const details = {
            "Hard Skills": document.getElementById('hardSkillsDetails'),
            "Soft Skills": document.getElementById('softSkillsDetails')
        };

        const showDetails = (selectedTitle) => {
            titles.forEach(title => title.classList.remove('active'));
            for (const key in details) {
                details[key].style.display = 'none';
            }
            selectedTitle.classList.add('active');
            details[selectedTitle.textContent].style.display = 'block';
        };

        // Mostrar por defecto la información de Hard Skills
        showDetails(titles[0]);

        titles.forEach(title => {
            title.addEventListener('click', () => {
                showDetails(title);
            });
        });
    };
    
    

     // Lógica para el menú principal
     items.forEach(item => {
         item.addEventListener('click', () => {
             // Elimina la clase 'active' de todos los elementos
             items.forEach(li => li.classList.remove('active'));
             // Agrega la clase 'active' al elemento seleccionado
             item.classList.add('active');
             // Actualiza el contenido del contenedor
             infoContainer.innerHTML = content[item.textContent] || `<p>${content[item.textContent]}</p>`;
            
             
             const section = item.textContent.trim();
             infoContainer.innerHTML = content[section];

             if (item.textContent === 'Experiencias') {
                 // Reaplicar lógica de selección de experiencia al volver a 'Experience'
                 updateExperienceSection();
             }
             if (section === 'Habilidades') {
                updateSkillsSection();
            }
         });
     });
 });

 document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const additionalTech = document.getElementById('additionalTech');

    showMoreBtn.addEventListener('click', () => {
        if (additionalTech.style.display === 'none' || additionalTech.style.display === '') {
            additionalTech.style.display = 'block';
        } else {
            additionalTech.style.display = 'none';
        }
    });
});