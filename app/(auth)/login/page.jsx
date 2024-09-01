import LoginCard from "@/components/LoginCard";
import { SecureCard } from "@/components/SecureCard";
import LoginBread from "../_lib/Bread";
export default function LoginPage(){
    return(
        <>
            <LoginBread/>
            <div className="h-[800px] lg:h-full lg:p-24 w-full flex flex-col lg:flex-row justify-around items-center">
                
                <LoginCard/>
                <SecureCard/>
            </div>
           
        </>
    );
}