import Input from "./main/Input";
import Ofbuttons from "./main/Ofbuttons";
import TopDiv from "./main/TopDiv";


export default function Main(){
    const tableabuttons = ["(",")","{","}","mod","sin(","cos(","tan(","log10(","log(","E","sqrt(","round(","floor(","**"]
    const tableabuttons2 = ["7","8","9","DEL","AC","4","5","6","X","%","1","2","3","+","-",".","0","exp","ans","="]
    return(<main>
        <TopDiv/>
        <Input/>
        <Ofbuttons value={tableabuttons }/>
        <Ofbuttons value={tableabuttons2 }/>
    </main>)
}