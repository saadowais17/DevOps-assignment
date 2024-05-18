document.getElementById('filter').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const projects = document.getElementById('projects-list').getElementsByTagName('li');
    Array.from(projects).forEach(function (project) {
        const text = project.textContent.toLowerCase();
        project.style.display = text.includes(filter) ? '' : 'none';
    });
});
