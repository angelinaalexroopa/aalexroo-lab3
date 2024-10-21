
const addGoalBtn = document.querySelector('.end-add');
const goalList = document.getElementById('goal-list');


addGoalBtn.addEventListener('click', function() {

    const newGoalText = prompt("Enter a new quarter goal:");


    if (newGoalText) {

        const newHashtag = prompt("Enter a hashtag for this goal:");


        if (newHashtag) {
 
            const newGoal = document.createElement('div');
            newGoal.classList.add('to-do');
            newGoal.innerHTML = `
                <span>${newGoalText}</span>
                <div class="hashtag1">#${newHashtag}</div>
                <div class="count">0 / 1</div>
            `;

            goalList.appendChild(newGoal);
        }
    }
});
