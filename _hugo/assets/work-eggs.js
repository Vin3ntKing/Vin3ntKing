(() => {
  const dialog = document.getElementById('work-dialog');
  if (!dialog) return;
  const entries = {
    systems: ['One more layer.', 'The experiment would like some infrastructure. The infrastructure has a few questions.'],
    ai: ['Needs more data.', 'A hypothesis, an experiment, and another reason to look at the data.'],
    quant: ['Suspiciously good.', 'A promising result is an invitation to check the assumptions.'],
    trading: ['404', 'Discretionary trading not found. This endpoint was outside my scope.'],
    architecture: ['No legacy code. Yet.', 'We started with the system design: how sources plug in, how checks can be extended, and how results get presented. The next request always needed somewhere to go.'],
    sources: ['One more source.', 'New sources kept coming. Making room for them was part of the platform, not a one-off integration every time.'],
    diff: ['Define “equal”.', 'Different sources, different comparison rules. Shared validation steps and custom hooks helped make room for the next definition of “same.”'],
    metrics: ['A diff is not an explanation.', 'Checks needed useful outputs: metrics, analysis results, and a way to present them. Returning false was not the end of the job.'],
    warehouse: ['FROM which table?', 'Before the query: which table, which definition, which version of the truth?'],
    pipelines: ['Mind the gap.', 'Getting data from A to B. Keeping its meaning attached.'],
    business: ['It depends on the definition.', 'The SQL can wait a minute. What question are we answering?']
  };
  document.querySelectorAll('[data-work-egg]').forEach(button => {
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', dialog.id);
    button.addEventListener('click', () => {
      const [title, text] = entries[button.dataset.workEgg];
      dialog.querySelector('#work-dialog-title').textContent = title;
      dialog.querySelector('#work-dialog-copy').textContent = text;
      dialog.querySelector('.work-dialog-label').textContent = button.dataset.workEgg === 'trading' ? 'Endpoint unavailable' : button.textContent.trim();
      dialog.showModal();
    });
  });
  dialog.querySelectorAll('[data-close-work]').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
})();
