export default function MyCards(props) {
  //console.log(props.m1);
  return (
    <>
      <div class="max-w-md mx-10 rounded overflow-hidden shadow-lg m-10 bg-White rounded-3xl">
        <div class="text-Black font-SF text-xl mb-2 m-2">{props.name}</div>
        {/* <img class="w-full p-3 rounded-3xl" src="" alt="Sunset in the mountains" /> */}
        <div class="bg-backGray m-2 p-px rounded-xl">
          <div class="px-6 py-4 flex bg-gray-1 m-3 divide-x-[2px] rounded-xl">

            <p class="text-gray-700 text-base text-Black">
              Students enrolled
            </p>
            <p class="text-gray-700 text-base text-Black ml-auto px-2 truncate w-28 overflow-hidden">
              {/* {props.owner_Key} */}50
            </p>
          </div>
          <div class="px-6 py-4 flex bg-gray-1 m-3 divide-x-[2px] rounded-xl">

            <p class="text-gray-700 text-base text-Black">
              Due Assignments
            </p>
            <p class="text-gray-700 text-base text-Black ml-auto px-2 block truncate w-28 overflow-hidden">
              2
            </p>
          </div>
          
        </div>
      </div>
    </>

  );
}
