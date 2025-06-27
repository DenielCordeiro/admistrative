class AnnualLeave {    
    constructor() {
        this.buildedHoursBank();      
    }

    buildedHoursBank() {
        const hours = {
            totalHoursLate: this.getTotalHoursLateUser(),       
            totalOvertime: this.getTotalOvertimeUser(),
            totalHours: Number,
            status: false,
        };
        
        if (hours.totalHoursLate <= hours.totalOvertime) {
            hours.totalHours = hours.totalOvertime - hours.totalHoursLate;
            hours.status = true;
        } else {
            hours.totalHours = hours.totalHoursLate - hours.totalOvertime;
            hours.status = false;
        };

        console.log("Banco de Horas: ", hours);
    }

    getTotalHoursLateUser() {
        return 5;
    }

    getTotalOvertimeUser() {
        return 25;
    }

    setMaker() {
        try {
            const date = new Date();
            
            const point = {
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear().toString(),
                hour: date.getHours(),
                minutes: date.getMinutes(),
            };

            point.completeDate = `${point.day.toString().padStart(2, '0')}/${point.month.toString().padStart(2, '0')}/${point.year.toString()}`;
        
            return point;

        } catch (error) {
            throw new Error('Não foi possíve realizar marcação!');
        };
    }
}

const AppAnnualLeave = new AnnualLeave();

document.getElementById('marker-button')?.addEventListener('click', () => {
    AppAnnualLeave.setMaker();
});