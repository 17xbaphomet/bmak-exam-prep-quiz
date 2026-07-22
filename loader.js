/* Dynamic question loader – window.QUESTION_MANIFEST */
(function () {
  const manifest = window.QUESTION_MANIFEST;
  if (!manifest || !Array.isArray(manifest.subjects) || !manifest.subjects.length) {
    console.error('QUESTION_MANIFEST missing. Run: npm run manifest');
    return;
  }

  function injectScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => resolve(src);
      s.onerror = () => reject(new Error('Failed: ' + src));
      document.head.appendChild(s);
    });
  }

  window.loadSubject = function loadSubject(subjectId) {
    const sub = manifest.subjects.find(s => s.id === subjectId);
    if (!sub) return Promise.reject(new Error('Unknown subject: ' + subjectId));

    window.QUESTIONS = [];

    const loads = sub.files.map(file => {
      const primary = 'questions/' + subjectId + '/' + file;
      const fallback = 'questions/' + file; // flat layout during migration
      return injectScript(primary).catch(() => injectScript(fallback));
    });

    return Promise.all(loads).then(() => {
      console.log('Loaded subject', subjectId, '–', (window.QUESTIONS || []).length, 'questions');
      return window.QUESTIONS;
    });
  };

  window.listSubjects = function listSubjects() {
    return manifest.subjects.map(s => ({
      id: s.id,
      label: s.label,
      fileCount: s.files.length
    }));
  };
})();
