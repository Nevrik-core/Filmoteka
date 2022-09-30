(() => {
  const refs = {
    openModalTeamButton: document.querySelector('.footer__link'),
    closeModalTeamButton: document.querySelector('.modalteam__close'),
    modalTeam: document.querySelector('.backdropteam.backdrop'),
    backdropTeam: document.querySelector('.backdropteam'),
    team: document.querySelector('.modalteam')
  };
  refs.team.style.opacity = "0";
  if (refs.openModalTeamButton) {
    refs.openModalTeamButton.addEventListener('click', openModalTeam);
  }

  if (refs.closeModalTeamButton) {
    refs.closeModalTeamButton.addEventListener('click', closeModalTeam);
  }

  function openModalTeam(event) {
    event.preventDefault();
    refs.team.style.opacity = "1";
    refs.modalTeam.classList.toggle('is-open');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', offModalForEscape);
    document.addEventListener('click', offModalBackdropTeam);
  }

  function closeModalTeam() {
    refs.team.style.opacity = "0";
    refs.modalTeam.classList.toggle('is-open');
    document.body.style.overflow = 'overlay';
    document.removeEventListener('keydown', offModalForEscape);
    document.removeEventListener('click', offModalBackdropTeam);
  }

  function offModalForEscape(event) {
    if (event.key === 'Escape') {
      closeModalTeam();
    }
  }
  function offModalBackdropTeam(event) {
    if (event.target === refs.backdropTeam) {
      closeModalTeam();
    }
  }
})();
