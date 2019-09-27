import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "../../node_modules/axios/index"
import {Iparking} from "./Iparking" 



let ContentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

let GetAllParkingButton : HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAllButton");

GetAllParkingButton.addEventListener("click",showallParking)

//let getparking : HTMLButtonElement =<HTMLButtonElement> document.getElementById("getParking");
 //getparking.addEventListener("click",getOne)


 function showallParking():void{
    axios.get<Iparking[]>("https://localhost:44351/api/eksamen")
    .then(function (response : AxiosResponse<Iparking[]>): void
    {
       
    console.log(response);
    
    let result : string = "<ol>"
    response.data.forEach((parking : Iparking) => {
        result += "<li>"+ parking.id  +" "+parking.nrplade +" "+parking.antaltimer+" "+parking.timepris+""+parking.totalpris+""+parking.dato+"</li>"   
    });
    result += "</ol>"
    ContentElement.innerHTML= result;
    })
    .catch(
        function (error : AxiosError) : void{
            console.log(error);
        }
    )
    console.log("Slutningen af funktion");
    }

   function getOneCoin(): void{
    
    }
    


    