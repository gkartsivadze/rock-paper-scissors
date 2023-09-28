export default function Action(choosen, winner) {

    document.getElementById(`variant_button_${choosen}`).classList.replace("user_choice_active", "user_choice_active2")

    document.getElementById(`computer_choice`).classList.add("computer_choice_active")

    if(winner) {

    } else {
        
    }

};