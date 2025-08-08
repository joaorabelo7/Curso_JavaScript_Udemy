function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.btnClear();
            if (el.classList.contains('btn-del')) this.btnDel();
            if (el.classList.contains('btn-eq')) this.btnEq();
        });
    };

    this.addNumDisplay = el => this.display.value += el.innerText;

    this.btnClear = () => this.display.value = "";

    this.btnDel = () => this.display.value = this.display.value.slice(0, -1);

    this.btnEq = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if (!conta && conta !== 0) {
                alert("Conta inválida");
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert("Conta inválida");
        }
    };

    this.pressEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.key === 'Enter') {
                this.btnEq();
            }
        });
    };

    this.inicia = () => {
        this.capturaCliques();
        this.pressEnter(); // Agora sim!
    };
}

const calculadora = new Calculadora();
calculadora.inicia();