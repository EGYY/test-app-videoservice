const modals = () => {
    function bindModal(trigger, modal, overlay, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            modal.style.display = 'block';
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';


        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    const signBtn = document.querySelector('#sign-btn');
    const modal = document.querySelector('#sign-up-modal');
    const overlay = document.querySelector('#overlay');
    const closeModal = document.querySelector('.close-modal');

    bindModal(signBtn, modal, overlay, closeModal);

}

export default modals;