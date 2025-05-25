function my_scope(){
    const form = document.querySelector('form');
    const result = document.querySelector('.result');

    const people = [];

    function receive_event_form (event){
        event.preventDefault();
        const name = form.querySelector('.user_name');
        const surname = form.querySelector('.user_surname');
        const weight = form.querySelector('.user_weight');
        const height = form.querySelector('.user_height');

        people.push(
            {
                name : name.value,
                surname : surname.value,
                weight : weight.value,
                height : height.value,
            }
        )
        console.log(people)

        result.innerHTML += `<p>${name.value} ${surname.value} ${weight.value} ${height.value}</p>`
    }
    
    form.addEventListener('submit', receive_event_form);
}

my_scope()