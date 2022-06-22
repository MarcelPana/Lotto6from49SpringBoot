/*-------------------------------------------------------------------------------------------------------------

Type Script = este un rapper pentru JavaScript ce aduce niste imbunatatiri cum ar fi strong typeingul ( tipul variabilei)
            - simplifica codul JS facandul mai usor de citit si debug
            - extinde JS classes si introduce interfetele
            - posibilitatea de utiliza namespaces of (modules)
------------------------------------------------------------------------------------------------
Basic data types:
         boolean                             let isActive: boolean = true;
         string                              let Active: string = "rgeevev";
         number                              let ActiveNumber: number = 26;
                                             let ActiveNumber: number = 26.33;
         Array                               let myArray: number[] = [1,2,3,4];    sau   let myArray: Array<number> = [1,2,3,4];
         enum                                enum Day {Monday, Tuesday, Wednesday, Thursday, Friday};
         Any                                 let unknown: any = 4;   (poate fi orice tip, dar nu este recomandat de folosit)

--------------------------------------------------------------
Functions:
        - have strong typing of function parameters and return type


//    nume functie    parametru     return type
function exemplu(numePerson: string): string {
    return 'Hello' + numePerson;
}

let user: any = [0,1,2,3,4,]

document.body.textContent = greeter(user);     // the argument of the type number[] cannot be assigned to type string


-------------------------------------------------------
Interfaces:
         - are a mechanism for naming complex variable types and using them just like base types.


interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string{
    return 'Hello' + person.firstName + " " + person.lastName;
}

let newUser = { firstName: 'John', lastName: 'Smith'};
document.body.textContent = greeter(newUser);

-----------------------------------------------------------
Hermetization:
        - Public : free and unlimited access. The implicit visible status is public
        - Private: access only inside the class
        - Protected: can be accessed only from the extension class (adica de clasa care exrinde parintele)

 */
/*--------------Public-------------------------*/

class RecapitulareTypeScriptPublic {
    fullName: string;   // identical to "public fullName: string"
    constructor(public  firstName: string, public secondName: string) {
        this.fullName = firstName + " " + secondName;
    }
}
/*------------Private-------------------*/
class RecapitulareTypeScriptPrivate {
    private fullName: string;
    constructor(private  firstName: string, private secondName: string) {
        this.fullName = firstName + " " + secondName;
    }

    public getFullname(){    //   getter in Java, si
        return this.fullName;
    }
}

let person = new RecapitulareTypeScriptPrivate('Jiji','Gigel');
person.getFullname()  // merge pt ca este public
person.fullName;  // fatal error

/*----------Protected----------------------*/

class RecapitulareTypeScriptProtected {
    protected fullName: string;
    constructor(protected  firstName: string, protected secondName: string) {
        this.fullName = firstName + " " + secondName;
    }
}

class Student extends RecapitulareTypeScriptProtected {
    private index: number;

    constructor(firstName: string, secondName: string, index: number) {
        super(firstName, secondName);
        this.index = index;
    }
    public getIndex(){
        return this.index;
}
public getFullName(){
        return this.fullName;   // is working
}


}


