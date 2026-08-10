document.querySelectorAll('.project').forEach(project => {
  const description = project.querySelector('.project_description');
  const title = project.querySelector('.title_project');

  description.classList.add("is-hidden"); // hide THIS project's description

  project.addEventListener('click', () => {
    description.classList.toggle('is-hidden');
    title.classList.toggle('open');
  });
});