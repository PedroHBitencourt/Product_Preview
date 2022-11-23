const quest = document.querySelector(".questions");
const answers1 = document.querySelector(".answers1");
const answers2 = document.querySelector(".answers2");
const answers3 = document.querySelector(".answers3");
const answers4 = document.querySelector(".answers4");
const answers5 = document.querySelector(".answers5");

function checkOldValue(){
    answers1.textContent = null;
    answers2.textContent = null;
    answers3.textContent = null;
    answers4.textContent = null;
    answers5.textContent = null;
    answers1.style.marginTop = '0px';
    answers2.style.marginTop = '0px';
    answers3.style.marginTop = '0px';
    answers4.style.marginTop = '0px';
    answers5.style.marginTop = '0px';
}

function showAnswer(valor){
    checkOldValue()
    if(valor === 1){
        answers1.textContent = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
        
        answers1.style.marginTop = '14px';
    }else if(valor === 2){
        answers2.textContent = "No more than 2GB. All files in your account must fit your allotted storage space.";

        answers2.style.marginTop = '14px';
    }else if(valor === 3){
        answers3.textContent = "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.";

        answers3.style.marginTop = '14px';
    }else if(valor === 4){
        answers4.textContent = "Yes! Send us a message and we'll process your request no questions asked.";

        answers4.style.marginTop = '14px';
    }else if(valor === 5){
        answers5.textContent = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";

        answers5.style.marginTop = '14px';
    }

}