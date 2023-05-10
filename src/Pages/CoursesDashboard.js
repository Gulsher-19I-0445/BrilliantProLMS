import MyCards from "../Components/cards";
import AdminNavbar from "../Components/adminNavbar";
export default function CourseDash(){
    return(
        <>
        <AdminNavbar></AdminNavbar>
        <div class="grid grid-cols-5 gap-2 place-items-center h-18 ...">

        
                
              <>
                
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
                <MyCards name={"Web"} image={"a"} ></MyCards>
              </>

      
      </div>
        </>
    )
}