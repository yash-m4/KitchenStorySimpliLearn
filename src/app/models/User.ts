export class User{

    public username:string=""
    public password:string=""
    public address:string=""
    public phone:string=""

    constructor(
         username:string,
         password:string,
         address:string,
         phone:string
    ){
        this.address=address
        this.username=username
        this.password=password
        this.phone=phone

    }


    
}