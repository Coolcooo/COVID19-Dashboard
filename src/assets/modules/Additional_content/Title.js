// Last Date of update container
const generateTitle = () => {
  let template = '';
  const title = document.querySelector('.wrapper__title-container');
  template += '<svg id="Capa_1" enable-background="new 0 0 497.65 497.65" height="25" viewBox="0 0 497.65 497.65" width="25" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m316.286 118.792c-1.061 0-2.138-.226-3.162-.704-3.755-1.749-5.381-6.211-3.631-9.965l11.927-25.603c.022-.047.044-.094.067-.141l9.357-19.04c1.827-3.718 6.321-5.25 10.039-3.423 3.717 1.827 5.25 6.321 3.423 10.039l-9.323 18.97-11.894 25.531c-1.271 2.731-3.977 4.336-6.803 4.336z" fill="#ee6161"/></g><g><path d="m394.023 218.518c-2.828 0-5.535-1.607-6.806-4.34-1.747-3.756-.117-8.217 3.639-9.963l28.677-13.333 24.366-11.588c3.743-1.78 8.215-.188 9.994 3.552 1.779 3.741.189 8.215-3.552 9.994l-24.425 11.616-28.736 13.361c-1.023.476-2.098.701-3.157.701z" fill="#ee6161"/></g><g><path d="m361.593 429.257c-2.308 0-4.585-1.062-6.055-3.066l-14.308-19.52c-.05-.068-.098-.136-.146-.206l-17.213-25.216c-2.335-3.421-1.455-8.088 1.966-10.423 3.422-2.336 8.088-1.455 10.423 1.966l17.142 25.113 14.233 19.417c2.449 3.341 1.726 8.034-1.615 10.483-1.335.98-2.888 1.452-4.427 1.452z" fill="#ee6161"/></g><g><path d="m219.554 449.896c-4.142 0-7.5-3.358-7.5-7.5v-38.391c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v38.391c0 4.142-3.358 7.5-7.5 7.5z" fill="#ee6161"/></g><g><path d="m165.842 449.898c-.97 0-1.956-.189-2.906-.589-3.818-1.607-5.61-6.005-4.003-9.822l10.574-25.12 9.136-21.485c1.621-3.813 6.026-5.587 9.836-3.967 3.812 1.621 5.588 6.025 3.967 9.836l-9.125 21.46-10.563 25.095c-1.207 2.867-3.989 4.592-6.916 4.592z" fill="#ee6161"/></g><g><path d="m59.991 332.053c-2.695 0-5.299-1.457-6.643-4.007-1.93-3.665-.523-8.201 3.142-10.131l17.561-9.248 21.321-12.113c3.603-2.046 8.18-.785 10.226 2.816 2.046 3.602.785 8.18-2.816 10.226l-21.425 12.172c-.07.04-.14.078-.21.115l-17.667 9.304c-1.115.588-2.311.866-3.489.866z" fill="#ee6161"/></g><g><path d="m38.005 278.612c-3.693 0-6.911-2.729-7.422-6.49-.559-4.104 2.316-7.884 6.42-8.443l28.248-3.844 25.027-3.165c4.111-.513 7.862 2.391 8.382 6.5s-2.391 7.862-6.5 8.382l-24.957 3.155-28.178 3.834c-.342.048-.683.071-1.02.071z" fill="#ee6161"/></g><g><path d="m179.915 118.791c-2.768 0-5.429-1.538-6.734-4.189l-12.546-25.483-15.601-29.026c-1.961-3.648-.593-8.196 3.056-10.157 3.648-1.959 8.196-.593 10.157 3.056l15.664 29.144c.042.079.083.158.122.238l12.605 25.603c1.83 3.716.3 8.211-3.416 10.041-1.066.525-2.195.773-3.307.773z" fill="#ee6161"/></g><g><g id="XMLID_126_"><g><path d="m481.315 258c9.69 0 16.36 7.82 14.84 17.38l-4.61 28.95c-1.36 8.55-8.75 14.65-17.14 14.65-.91 0-1.83-.07-2.76-.22-9.4-1.49-15.83-10.28-14.46-19.67l-28.21-.89c-3.15-.1-5.97 1.92-6.9 4.94-4.65 15.11-11.21 29.38-19.41 42.53-1.73 2.78-1.32 6.38 1.01 8.68l17.27 17.1c2.89-3.67 7.19-5.59 11.53-5.59 3.11 0 6.24.98 8.9 3.02 7.56 0 11.83 8.67 7.24 14.66l-18.26 23.81c-2.88 3.77-7.24 5.74-11.64 5.74-3.12 0-6.25-.98-8.91-3.02-6.38-4.89-7.62-13.99-2.83-20.4l-21.62-12.6c-2.75-1.61-6.23-1.14-8.49 1.11-19.66 19.72-43.82 34.96-70.8 44.05-3.06 1.04-5.03 4.01-4.75 7.23l2.34 27.45c9.23-1.86 18.26 3.96 20.37 13.13 2.17 9.46-4.24 18.95-13.73 20.99l-28.98 6.23c-1.22.26-2.4.39-3.55.39-7.88 0-13.84-5.9-13.84-14.43-2-9.32 3.87-18.48 13.13-20.59l-9.37-26.66c-1.05-2.97-3.95-4.88-7.09-4.66-4.24.3-8.52.45-12.83.45-44.63 0-85.5-16.04-117.2-42.65-2.26-1.9-5.47-2.17-8.02-.68l-24.26 14.21 3.8 4.09c4.42 4.78 6.61 10.83 6.61 16.86 0 6.67-2.67 13.32-7.95 18.21-10.06 9.31-25.76 8.71-35.07-1.35l-25.95-28.02c-4.43-4.77-6.61-10.82-6.61-16.85 0-6.67 2.67-13.32 7.95-18.21 10.05-9.31 25.75-8.71 35.06 1.34l3.8 4.1 16.45-23.73c1.64-2.37 1.67-5.5.06-7.89-19.6-29.07-31.04-64.1-31.04-101.8 0-7.3.43-14.49 1.27-21.56.37-3.21-1.47-6.26-4.49-7.4l-25.83-9.68c-1.97 7.88-9.04 13.17-16.84 13.17-1.32 0-2.67-.15-4.01-.47-9.82 0-16.01-7.82-13.75-17.38l6.89-29.14c2.23-9.44 11.86-15.66 21.27-13.29 9.12 2.3 14.75 11.45 12.71 20.63l28.06 2.98c3.14.34 6.1-1.48 7.25-4.42 5.27-13.42 12.08-26.07 20.21-37.72 1.85-2.66 1.67-6.22-.47-8.65l-18.22-20.7c-6.31 6.98-17.04 7.67-24.19 1.55-7.37-6.31-7.85-17.76-1.44-25.04l17.4-19.73c3.44-3.9 8.23-5.89 13.05-5.89 4.08 0 8.18 1.43 11.48 4.34 7.15 6.3 7.88 17.16 1.69 24.36l23.39 15.86c2.61 1.77 6.07 1.58 8.47-.47 26.93-23.04 60.66-38.36 97.76-42.55 3.22-.36 5.77-2.86 6.18-6.07l3.48-27.36c-4.75-.06-9.04-2.02-12.14-5.16-3.11-3.14-5.02-7.45-5.02-12.21 0-9.6 7.78-17.39 17.38-17.39h26.76c4.8 0 9.15 1.95 12.29 5.09 3.14 3.15 5.09 7.5 5.09 12.3 0 9.52-7.66 17.25-17.15 17.37l3.56 28.02c.4 3.14 2.85 5.61 5.98 6.05 32.51 4.58 62.26 17.73 86.9 37.1 2.47 1.94 5.92 2.02 8.46.17l22.56-16.4c-3.95-4.17-5.92-9.51-5.92-14.85 0-5.53 2.11-11.06 6.32-15.27 8.39-8.39 21.94-8.21 30.11.4l24.15 25.49c3.9 4.12 5.84 9.38 5.84 14.64 0 5.64-2.23 11.27-6.65 15.46-8.53 8.09-22.01 7.73-30.1-.81l-.2-.21-17.59 21.64c-1.97 2.43-2.09 5.87-.29 8.43 20.85 29.65 33.08 65.78 33.08 104.77 0 2.7-.06 5.38-.17 8.04-.15 3.23 1.92 6.14 5.02 7.05l26.48 7.74c1.61-9.36 10.45-15.71 19.85-14.22z" fill="#f79595"/></g></g><circle cx="219.554" cy="345.036" fill="#f37c7c" r="40.574"/><circle cx="344.981" cy="226.374" fill="#f9c6c6" r="28.69"/><g><path d="m337.575 158.513h-21.284c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h21.284c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#f37c7c"/></g><g><path d="m304.291 297.961h-14.051c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h14.051c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#f9c6c6"/></g><g><path d="m345.897 359.68h-16.606c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h16.606c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#f9c6c6"/></g></g><g><path d="m132.845 236.242c0-62.776 24.518-119.844 64.46-162.153-25.364 7.289-48.487 19.948-68.01 36.651-2.4 2.05-5.86 2.24-8.47.47l-23.39-15.86c6.19-7.2 5.46-18.06-1.69-24.36-3.3-2.91-7.4-4.34-11.48-4.34-4.82 0-9.61 1.99-13.05 5.89l-17.4 19.73c-6.41 7.28-5.93 18.73 1.44 25.04 7.15 6.12 17.88 5.43 24.19-1.55l18.22 20.7c2.14 2.43 2.32 5.99.47 8.65-8.13 11.65-14.94 24.3-20.21 37.72-1.15 2.94-4.11 4.76-7.25 4.42l-28.06-2.98c2.04-9.18-3.59-18.33-12.71-20.63-9.41-2.37-19.04 3.85-21.27 13.29l-6.89 29.14c-2.26 9.56 3.93 17.38 13.75 17.38 1.34.32 2.69.47 4.01.47 7.8 0 14.87-5.29 16.84-13.17l25.83 9.68c3.02 1.14 4.86 4.19 4.49 7.4-.84 7.07-1.27 14.26-1.27 21.56 0 37.7 11.44 72.73 31.04 101.8 1.61 2.39 1.58 5.52-.06 7.89l-16.45 23.73-3.8-4.1c-9.31-10.05-25.01-10.65-35.06-1.34-5.28 4.89-7.95 11.54-7.95 18.21 0 6.03 2.18 12.08 6.61 16.85l25.95 28.02c9.31 10.06 25.01 10.66 35.07 1.35 5.28-4.89 7.95-11.54 7.95-18.21 0-6.03-2.19-12.08-6.61-16.86l-3.8-4.09 24.26-14.21c2.55-1.49 5.76-1.22 8.02.68 28.868 24.233 65.364 39.702 105.356 42.271-62.218-42.548-103.076-114.074-103.076-195.139z" fill="#f37c7c"/></g><circle cx="194.611" cy="204.858" fill="#f9c6c6" r="66.254"/><g><path d="m145.777 311.961h-17.419c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h17.419c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#ee6161"/></g></g></svg>COVID-19 Dashboard by Vladislav Kokhan`s team, RS School';
  title.innerHTML = template;
  return title;
};
generateTitle();

export { generateTitle };
