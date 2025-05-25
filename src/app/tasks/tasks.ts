export class Task 
{
    id: number = 0;
    name: string = "";
    isComplete: boolean = false;
    startDate: Date = new Date();
    expiringDate: Date = new Date();
    user: string = "";
    constructor(id: number, name: string, isComplete: boolean, startDate: Date, expiringDate: Date, user: string = "") 
    {
        this.id = id;
        this.name = name;
        this.isComplete = isComplete;
        this.startDate = startDate;
        this.expiringDate = expiringDate;
        this.user = user;
    }

    getDaysRemaining = () => 
    {
        const today = new Date();   
        const expiringDate = new Date(this.expiringDate);


        today.setHours(0, 0, 0, 0);
        expiringDate.setHours(0, 0, 0, 0);        

        const diffTime = expiringDate.getTime() - today.getTime();//number в мс
        
        
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));//перевод из мс, округление
        
        if (diffDays > 0)         
            return `осталось ${diffDays} дней`;        
        else if (diffDays < 0) 
            return `задача просрочена на ${Math.abs(diffDays)} дней`;         
        return "срок задачи истекает сегодня";
    }
    toggleTask = () =>
    {
        this.isComplete = !this.isComplete;
            
    }

}