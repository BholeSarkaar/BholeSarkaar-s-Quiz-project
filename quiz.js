var answers=['B','D','B','B','B','C'];
const result=document.querySelector('.result');
const comm=document.querySelector('.comm');
const form=document.querySelector('.quiz-frm');
form.addEventListener('submit',e=>{
    let score=0;
    e.preventDefault();
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value];
    userAnswers.forEach((answer,index)=>{
        if(answer==answers[index]){
            score=score+17;
        }
    });
    if(score==102){
        score=100;
    }
    scrollTo(0,0);
    result.classList.remove('d-none');
    let output=0;
    const timer=setInterval(()=>{
        document.querySelector('span').textContent=`${output}%`; 
        if(output==score){
            clearInterval(timer);
        }else{
            output++;
        }
    },10);
});
