import modals from "./modal";
import tabs from "./tabs";
import signUp from "./sign-up";
import '../css/styles.css';


window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.tabs-nav', '.tabs-nav-item', '.tab');
    signUp();
});
