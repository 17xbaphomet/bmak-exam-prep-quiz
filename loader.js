/* Dynamic question loader – reads window.QUESTION_MANIFEST and injects scripts */
(function () {
  const manifest = window.QUESTION_MANIFEST;
  if (!manifest || !Array.isArray(manifest.subjects) || !manifest.subjects.length) {
    console.error('QUESTION_MANIFEST missing or empty. Run: npm run manifest');
    return;
  }

  /** Load all question files for one subject (Promise resolves when done). */
  window.loadSubject = function loadSubject(subjectId) {
    const sub = manifest.subjects.find(s => s.id === subjectId);
    if (!sub) return Promise.reject(new Error('Unknown subject: ' + subjectId));

    // Reset bank before loading a subject
    window.QUESTIONS = [];

    const base = 'questions/' + subjectId + '/';
    const loads = sub.files.map(file => new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = base + file;
      s.onload = () => resolve(file);
      s.onerror = () => reject(new Error('Failed to load ' + base + file));
      document.head.appendChild(s);
    }));

    return Promise.all(loads).then(() => {
      console.log('Loaded subject', subjectId, '–', (window.QUESTIONS || []).length, 'questions');
      return window.QUESTIONS;
    });
  };

  window.listSubjects = function listSubjects() {
    return manifest.subjects.map(s => ({ id: s.id, label: s.label, fileCount: s.files.length }));
  };
})();
