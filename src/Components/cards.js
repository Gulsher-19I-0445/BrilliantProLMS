export default function MyCards(props) {

  function goto(){
    console.log('h')
  }
  //console.log(props.m1);
  return (
    <>
    
    <button onClick={goto} className="max-w-md mx-10 rounded overflow-hidden shadow-lg m-10 bg-White rounded-3xl">
        <div class="text-Black font-SF text-xl mb-2 m-2 font-bold">{props.name}</div>
        {/* <img class="w-full p-3 rounded-3xl" src="" alt="Sunset in the mountains" /> */}
        <div class="bg-backGray m-2 p-px rounded-xl">
          <div class="px-6 py-4 flex bg-gray-1 rounded-xl">

            
            <p class="text-gray-700 text-base text-Black px-2 truncate w-28 overflow-hidden">
              {props.desc} 
            </p>
          </div>
          <div class="px-6 py-4 flex bg-gray-1 m-3 divide-x-[2px] rounded-xl">

            <p class="text-gray-700 text-base text-Black">
              Start Date
            </p>
            <p class="text-gray-700 text-base text-Black ml-auto px-2 block  w-28 overflow-hidden">
              {props.start.split('T')[0]}
            </p>
          </div>
          <div class="px-6 py-4 flex bg-gray-1 m-3 divide-x-[2px] rounded-xl">

            <p class="text-gray-700 text-base text-Black">
              End Date
            </p>
            <p class="text-gray-700 text-base text-Black ml-auto px-2 block  w-28 overflow-hidden">
              {props.end.split('T')[0]}
            </p>
          </div>
          
        </div>
      </button>
    </>

  );
}
