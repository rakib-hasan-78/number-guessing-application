import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './public/src/style/index.css';

import { insertInputFunction } from './public/src/js/inputHandler';
import { setHiddenNumber } from './public/src/js/setHiddenNumber';
import { guessInputHandler } from './public/src/js/guessNumber';
import { numberChallenge } from './public/src/js/numberChallange';

document.querySelector('#app').innerHTML = `
  <div >
  <!-- header -->
  <header class="w-100 h-25">
    <div class="container-xxl container-xl container-lg container-md container-sm py-5">
      <main class="m-auto border border-2 border-transparent rounded-4 d-flex align-items-center justify-content-center flex-nowrap flex-column align-content-center py-2 gradient-bg text-white-50 shadow-lg">
        <h1 class="text-capitalize text-center fw-bolder">number guesser application</h1>
      </main>
    </div>
  </header>
  <!-- number input section  -->
   <section id="number-input" class="number-input my-5">
    <div class="container-xxl container-xl container-lg container-md container-sm py-4">
      <main class="mx-auto">
        <div class="main-content w-100 h-auto">
          <form id="input-form" action="#" class="form form-group w-75 mx-auto border border-2 border-transparent rounded-4 gradient-bg-second shadow-lg">
              <h2 class="text-center text-capitalize fw-semibold text-white-50">input your hidden number!</h2>
              <small id="input-info" class="text-center d-flex justify-content-around text-capitalize text-info fw-medium fst-italic"></small>
              <div class="w-75 pt-1  mx-auto mt-3 d-flex flex-wrap align-items-center justify-content-around position-relative">
                <div class="w-75 position-relative my-2">
                  <input id="input-field-value" type="text" placeholder="set your number" class="form-control w-100 center-placeholder gradient-bg-light shadow-sm">
                  <span id="icon-cancel" class="position-absolute bottom-0 end-0 p-2  d-none">
                    <i class="bi bi-x-octagon-fill"></i>
                  </span>
                </div>
                <button type="submit" class="btn btn-secondary shadow-sm gradient-bg-button">Set number</button>
              </div>
              <div class="w-75 d-flex align-items-center justify-content-start px-3 mx-auto fw-medium text-capitalize text-danger"><small class="error-msg"></small></div>
          </form>
        </div>
      </main>
    </div>
   </section>
     <!-- guess number input section  -->

     <section id="number-guess-input" class="number-guess-input mt-2 d-none">
      <div class="container-xxl container-xl container-lg container-md container-sm py-4">
        <main class="mx-auto">
          <div class="main-content w-100 h-auto">
            <form id="guess-form" action="#" class="form form-group w-75 mx-auto border border-2 border-transparent rounded-4 gradient-bg-second shadow-lg">
                <h2 class="text-center text-capitalize fw-semibold text-white-50">guess the number!</h2>
                <small id="guess-info" class="text-center d-flex justify-content-around text-capitalize text-info fw-medium fst-italic"> </small>
                <div class="w-75 pt-1 mx-auto mt-3 d-flex flex-wrap align-items-center justify-content-around position-relative">
                  <div class="w-75 position-relative my-2">
                    <input id="number-guess-input-field" type="text" name="guess-value" placeholder="set your number" class="form-control w-100 center-placeholder gradient-bg-light shadow-sm">
                    <span id="number-guess-cancel" class="position-absolute bottom-0 end-0 p-2 d-none">
                      <i class="bi bi-x-octagon-fill"></i>
                    </span>
                  </div>
                  <button id="btn-num-check" type="submit" class="btn btn-secondary shadow-sm gradient-bg-button">check number</button>
                </div>
                <div class="w-75 d-flex align-items-center justify-content-start px-3 mx-auto fw-medium text-capitalize text-danger valid-color"><small id="guess-validityMsg"> </small></div>
            </form>
          </div>
        </main>
      </div>
     </section>
     <!-- footer  -->
     <footer id="footer" class="footer-class pb-3">
      <div class="container-xxl container-xl container-lg container-md container-sm mt-2 border border-1 border-transparent rounded-4 gradient-bg shadow-lg">
        <main class="mx-auto">
          <div class="d-flex flex-wrap flex-column align-content-center justify-content-center w-75 p-2 mx-auto">
            <div id="copy" class="copy-right-section text-white-50 text-uppercase fw-medium"></div>
            <div id="dev-name" class="developer-credit text-info fw-medium text-capitalize fs-6"></div>
          </div>
        </main>
      </div>
     </footer>

  </div>

`
const minimumValue = 1;
const maximumValue = 10;

// Insert Number Section input handler----->
insertInputFunction(minimumValue, maximumValue);
// save insert Number handler----->
setHiddenNumber(minimumValue, maximumValue);
// guess number input handler----->
guessInputHandler(minimumValue, maximumValue);
// number matching challenge 
numberChallenge(minimumValue, maximumValue);
document.getElementById('copy').innerHTML=`&copy; ${new Date().getFullYear() } All The Rights Reserved.`;
document.getElementById('dev-name').innerHTML = `Developed By Md Rakibul Hasan`;