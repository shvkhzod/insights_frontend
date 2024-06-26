import { Component, For, Show, createEffect, createSignal } from "solid-js";
import Navigation from "../components/Navigation";
import CompanyView from "../components/CompanyView";
import Sidebar from "../components/Sidebar";
import LoginModal from "../components/LoginModal";
import VacancyView from "../components/VacancyView";
import axios from "axios";
import { Link } from "@solidjs/router";

export type VaccancyType = {
  ID: string,
  title: string,
  location: string,
  salary: string,
  employer_id: string,
  type: string
  requirements: [],
  conditions: [],
  info: string,
  CreatedAt: Date,
}

const Vaccancies:Component =()=> {

  const [loginModalShow, setLoginModalShow] = createSignal(false)
  const [createModalShow, setCreateModalShow] = createSignal(false)
  const [vaccancies, setVaccancies] = createSignal<Array<VaccancyType>>([])
  const instance = axios.create({
    withCredentials: true,})
    

  createEffect(()=>{
    instance.get("https://api.noted.today/api/vaccancies/").then((tVaccancies) => {
      console.log(tVaccancies.data)
      tVaccancies.data.data.vaccancies.map((e:VaccancyType)=> {
        setVaccancies([...vaccancies(), e])
      }
      
      )
    })
  },[])
    return(

        <>
           <div id='mainBody' class="flex flex-col w-full bg-[#0C0C0C]" >
    
    <div class='sticky top-0 z-10'>
    <Navigation setLoginModalShow={setLoginModalShow} setCreateModalShow={setCreateModalShow} createModalShow={createModalShow} />
    </div>
    
  <Show when={loginModalShow()==true}>
  <div id='loginModal' class='md:fixed flex flex-row justify-center items-center md:w-full md:h-full z-20 bg-white/50 md:top-0 md:left-0'  >
      <LoginModal  setLoginModalShow={setLoginModalShow}/>
    </div>
  </Show>
    <div id='contents'  class='w-full min-h-[100vh] bg-[#0C0C0C] flex flex-col md:flex-row md:px-8 md:py-6 md:gap-6 md:justify-center' >

    <div id='sidebar' class=' md:w-1/5 z-10 w-full fixed max-sm:bottom-0  md:left-14'>
      <Sidebar setLoginModalShow={setLoginModalShow}/>
    </div>

    <div id="vacancies" class='md:w-2/4 flex flex-col gap-6 md:py-0 py-4 px-5 md:px-14 '>
      <h1 class="text-white font-bold  md:text-[1.8rem] max-sm:text-[2rem]" >Vakansiyalar</h1>
        <div class="flex flex-col md:gap-4 w-full md:mt-4" >
       <For each={vaccancies()}>{(vaccancy, i) =>
        <Link href={`/vaccancies/${vaccancy.ID}`}>
           <VacancyView title={vaccancy.title} 
         location={vaccancy.location} 
         jobType={vaccancy.type} 
         employerId={vaccancy.employer_id} 
         salary={vaccancy.salary} />
        </Link>
       }
       
       </For>
        </div>
    </div>


    </div>
   </div>
        </>
        
    )
}

export default Vaccancies