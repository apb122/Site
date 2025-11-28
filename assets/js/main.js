// Tweak theme labels, filters, and rendering logic here
const state = {
  filters: {
    projects: 'all',
    experiments: 'all'
  },
  data: {
    projects: [],
    experiments: []
  }
};

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const THEME_KEY = 'preferred-theme';

function updateToggleLabel(theme) {
  const label = document.querySelector('#theme-toggle .theme-toggle__label');
  if (!label) return;
  label.textContent = theme === 'dark' ? 'Dark mode on' : 'Light mode on';
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove('theme-light', 'theme-dark');
  root.classList.add(`theme-${theme}`);
  root.style.colorScheme = theme;
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', theme === 'dark');
  }
  updateToggleLabel(theme);
  localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const initial = saved || (prefersDark.matches ? 'dark' : 'light');
  applyTheme(initial);

  if (!saved) {
    prefersDark.addEventListener('change', (event) => {
      applyTheme(event.matches ? 'dark' : 'light');
    });
  }
}

function toggleTheme() {
  const root = document.documentElement;
  const next = root.classList.contains('theme-dark') ? 'light' : 'dark';
  applyTheme(next);
}

function buildItem(item) {
  const li = document.createElement('li');
  li.className = 'project-item';

  const title = document.createElement('a');
  title.className = 'project-title';
  title.href = item.url;
  title.textContent = item.title;
  title.rel = 'noreferrer';

  const description = document.createElement('p');
  description.textContent = item.description;

  li.appendChild(title);
  li.appendChild(description);

  if (item.tags?.length) {
    const meta = document.createElement('p');
    meta.className = 'project-meta';
    meta.textContent = item.tags.join(' • ');
    li.appendChild(meta);
  }

  return li;
}

function renderList(section) {
  const list = document.getElementById(`${section}-list`);
  if (!list) return;
  list.innerHTML = '';

  const tag = state.filters[section];
  const items = state.data[section] || [];
  const filtered = tag === 'all' ? items : items.filter((item) => item.tags?.includes(tag));

  if (!filtered.length) {
    const empty = document.createElement('li');
    empty.className = 'project-item';
    empty.textContent = 'No entries match this filter yet.';
    list.appendChild(empty);
    return;
  }

  filtered.forEach((item) => list.appendChild(buildItem(item)));
}

function setFilter(section, tag) {
  state.filters[section] = tag;
  document.querySelectorAll(`.tag-button[data-section="${section}"]`).forEach((btn) => {
    const isActive = btn.dataset.tag === tag;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
  renderList(section);
}

function bindFilters() {
  document.querySelectorAll('.tag-button').forEach((button) => {
    button.addEventListener('click', () => {
      const section = button.dataset.section;
      const tag = button.dataset.tag;
      if (!section || !tag) return;
      setFilter(section, tag);
    });
  });
}

function hydrateLists(data) {
  state.data.projects = data.projects || [];
  state.data.experiments = data.experiments || [];
  renderList('projects');
  renderList('experiments');
}

function loadData() {
  // Update the path if you move projects.json
  fetch('assets/data/projects.json')
    .then((res) => res.json())
    .then(hydrateLists)
    .catch(() => {
      const projectsList = document.getElementById('projects-list');
      const experimentsList = document.getElementById('experiments-list');
      if (projectsList) projectsList.innerHTML = '<li class="project-item">Unable to load projects.</li>';
      if (experimentsList) experimentsList.innerHTML = '<li class="project-item">Unable to load experiments.</li>';
    });
}

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', toggleTheme);
  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleTheme();
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initThemeToggle();
  bindFilters();
  loadData();
});
