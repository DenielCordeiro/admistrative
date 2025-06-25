class AnnualLeave {
    constructor() {
        console.log('Classe banco de horas iniciada!');
        
    }

    setMaker() {
        try {
            const dataExemplo = new Date.now();
            const hourMarked = dataExemplo.getHours();
            const minutos = dataExemplo.getMinutes();
            const point = {};
            
            console.log('marcação realizada com suceso!');
            
            return true;

        } catch (error) {
            throw new Error('Não foi possíve realizar marcação!');
        };
    }
}

const annualLeaveClass = new AnnualLeave();

document.getElementById('marker-button')?.addEventListener('click', () => {
    annualLeaveClass.setMaker();
});