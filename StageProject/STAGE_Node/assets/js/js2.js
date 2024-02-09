const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const steps      = document.querySelectorAll('.progress-steps .step');
const from_steps = document.querySelectorAll('.form-step');
let active = 1;

nextButton.addEventListener("click",()=>{
    if(document.querySelector('.form-one select').value !== ''){
        setInterval(()=>{
            document.querySelector('.form-one select').style.borderColor="#44f898b7";
        },1000)
        active++;
        if(active > steps.length){
            active = steps.length;
        }
        updatePosgress();
    }else{
        document.querySelector('.form-one select').style.borderColor="red";
        document.getElementById('showProbelemExact').innerHTML='<p style="color:red;">Préciser votre problème</p>';
    }
});
prevButton.addEventListener('click',()=>{
    active--;
    if(active < 1){
        active = 1;
    }
    updatePosgress();
})
const updatePosgress=()=>{
    console.log('Step lenght -> ' + steps.length);
    console.log('active -> ' + active);

    steps.forEach((step , i)=>{
        console.log(step);
        console.log(i);
        if(i == (active-1)){
            step.classList.add('active');
            from_steps[i].classList.add('active')
        }else{
            step.classList.remove('active');
            from_steps[i].classList.remove('active')
        }
    });


    if(active === 1){
        prevButton.disabled = true;
    }else if(active === steps.length){
        nextButton.disabled = true;
    }else{
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}