(() => {
    const page = document.querySelector('.quiet');
    if (!page) return;
    const system = matchMedia('(prefers-color-scheme: dark)');
    let chosen = null;
    try { chosen = localStorage.getItem('homepage-preview-theme'); } catch {}
    const toggle = page.querySelector('.theme-toggle');
    function apply(theme) {
        page.dataset.theme = theme;
        const next = theme === 'dark' ? 'light' : 'dark';
        toggle.setAttribute('aria-label', 'Switch to ' + next + ' mode');
        toggle.title = 'Switch to ' + next + ' mode';
    }
    apply(chosen === 'dark' || chosen === 'light' ? chosen : system.matches ? 'dark' : 'light');
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
        chosen = page.dataset.theme === 'dark' ? 'light' : 'dark';
        apply(chosen);
        try { localStorage.setItem('homepage-preview-theme', chosen); } catch {}
    });
    system.addEventListener('change', e => { if (!chosen) apply(e.matches ? 'dark' : 'light'); });
    page.dataset.cursor = 'figma';
})();
