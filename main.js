const scriptURL = 'https://script.google.com/macros/s/AKfycbzxVE6tpczh_CA54A-nwuSoC1LfirNHKCRBUGAGl2dJa2OI4g_-rTQmRpvP5g0vnUuG/exec'
const form = document.forms['ecowhite-contack-form']

const btnSend = document.querySelector('.btn-send')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.my-alert')


form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol submit diklick
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none')
    btnSend.classList.toggle('d-none')
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // ketika tombol submit diklick
            // tampilkan tombol kirm, hilangkan tombol loading
            btnLoading.classList.toggle('d-none')
            btnSend.classList.toggle('d-none')
            // tampilkan alert
            myAlert.classList.toggle('d-none')
            // reset form isi
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})