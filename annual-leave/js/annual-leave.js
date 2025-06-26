class AnnualLeave {    
    constructor(totalHoursLate, totalOvertime, hours) {        
        hours = {
            totalHoursLate: this.hoursLate(),       
            totalOvertime: this.overtime(),
            totalHours: totalOvertime - totalHoursLate,
        };

        console.log("Horas: ", hours);        
    }

    hoursLate() {
        return 5;
    }

    overtime() {
        return 3;
    }

    setMaker() {
        try {
            const dataExemplo = new Date();
            
            const point = {
                hourMarked: dataExemplo.getHours(),
                minutesMarked: dataExemplo.getMinutes(),
            };

            console.log("hora e minuto marcado: ", point);            
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