# ⚖️ Estudio Jurídico - Landing Page

Landing page moderna y profesional para un estudio jurídico, desarrollada con React y diseñada para convertir visitantes en clientes.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?logo=tailwind-css)

## 🌟 Características

- ✨ **Diseño Moderno**: Animaciones fluidas y efectos visuales atractivos
- 📱 **Responsive**: Perfectamente adaptable a móviles, tablets y escritorio
- 🎨 **UI/UX Profesional**: Interfaz intuitiva con gradientes y transiciones suaves
- 💬 **Integración WhatsApp**: Botón flotante para contacto directo
- 📧 **Formulario de Contacto**: Envío de consultas por email
- 🔗 **Redes Sociales**: Enlaces a todas tus plataformas sociales
- ⚡ **Alto Rendimiento**: Optimizado para carga rápida

## 🚀 Demo

[Ver Demo en Vivo](https://estudiojuridico-demo.netlify.app/) 

## 📸 Capturas de Pantalla

<!-- Agrega capturas de pantalla de tu landing page -->

## 🛠️ Tecnologías

- [React](https://reactjs.org/) - Biblioteca de JavaScript para interfaces de usuario
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utility-first
- [Lucide React](https://lucide.dev/) - Iconos modernos y escalables
- [Unsplash](https://unsplash.com/) - Imágenes de alta calidad sin copyright

## 📋 Requisitos Previos

- Node.js 14.0 o superior
- npm o yarn

## 🔧 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/tuusuario/estudio-juridico-landing.git
cd estudio-juridico-landing
```

2. **Instala las dependencias**

```bash
npm install
# o
yarn install
```

3. **Instala Lucide React**

```bash
npm install lucide-react
# o
yarn add lucide-react
```

4. **Inicia el servidor de desarrollo**

```bash
npm start
# o
yarn start
```

5. **Abre tu navegador**

Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## ⚙️ Configuración

### Personalizar Información de Contacto

Edita el componente `EstudioJuridicoLanding.jsx`:

**WhatsApp:**
```jsx
href="https://wa.me/TUNUMERO?text=Hola,%20necesito%20asesoramiento%20legal"
```

**Email:**
```jsx
const mailtoLink = `mailto:tuemail@ejemplo.com?subject=...`;
```

### Personalizar Redes Sociales

En el footer, actualiza los enlaces:

```jsx
<a href="https://facebook.com/tupagina" ...>
<a href="https://instagram.com/tuperfil" ...>
<a href="https://linkedin.com/in/tuperfil" ...>
<a href="https://twitter.com/tuusuario" ...>
```

### Personalizar Contenido

Modifica directamente los textos en el componente:

- **Título y descripción**: Sección Hero
- **Servicios**: Array `servicios`
- **Sobre Nosotros**: Sección "Sobre Nosotros"
- **Imágenes**: URLs de Unsplash en las secciones correspondientes

## 📁 Estructura del Proyecto

```
estudio-juridico-landing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── EstudioJuridicoLanding.jsx
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Secciones

### 1. Header
- Navegación fija con scroll suave
- Logo y menú responsive

### 2. Hero Section
- Título impactante con animación
- Call-to-action destacado
- Imagen de fondo con overlay

### 3. Servicios
- 6 áreas de práctica legal
- Tarjetas con iconos y hover effects
- Grid responsive

### 4. Sobre Nosotros
- Descripción del estudio
- Imagen profesional
- Layout de dos columnas

### 5. Contacto
- Formulario completo
- Validación de campos
- Diseño glassmorphism

### 6. Footer
- Copyright
- Enlaces a redes sociales
- Diseño elegante

### 7. WhatsApp Button
- Botón flotante con logo oficial
- Animación de rebote
- Enlace directo con mensaje predefinido

## 🎭 Animaciones

- **Slide Down**: Header al cargar la página
- **Fade In Up**: Elementos al hacer scroll
- **Pulse**: Botones de llamada a la acción
- **Bounce**: Botón de WhatsApp
- **Hover Effects**: Tarjetas y botones
- **Shine**: Efecto de brillo en hero section

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Arrastra la carpeta build a Netlify
```

### GitHub Pages

```bash
npm install gh-pages --save-dev
npm run deploy
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


## 👤 Autor

**Sebastian Lapalma**

- GitHub: [@SebaLapalma](https://github.com/SebaLapalma)
- LinkedIn: [Sebastian Lapalma](https://www.linkedin.com/in/eduardosebastianlapalma/)
- Email: tuemail@ejemplo.com

## 🙏 Agradecimientos

- Imágenes de [Unsplash](https://unsplash.com/)
- Iconos de [Lucide](https://lucide.dev/)
- Inspiración de diseño de landing pages modernas

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!

**Hecho con ❤️ para ayudar a estudios jurídicos a tener presencia digital profesional**
