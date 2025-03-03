import { PencilSquareIcon,TrashIcon } from "@heroicons/react/24/outline";
const InventoryTable = () => {
    return (
      <div class="border-solid border-orange-400/40 border-2 rounded-md w-full">
      <table class="table-auto text-left rtl:text-right w-full">
        <thead class="text-gray-600 bg-orange-300/30">
          <tr>
          <th class="px-6 py-3">
            </th>
            <th class="px-6 py-3">
              Product
            </th>
            <th class="px-6 py-3">
              Items
            </th>
            <th class="px-6 py-3">
              Category
            </th>
            <th class="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* inset-y-[+16]*/}
            <TrashIcon stroke-width="2"  class="h-6 absolute inset-y-65 left-0 w-208"/>
            <PencilSquareIcon stroke-width="2"  class="h-6 absolute inset-y-65 left-0 w-180"/>
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>  
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
          </tr>
          <tr>
          <TrashIcon stroke-width="2"  class="h-6 absolute inset-y-81 left-0 w-208"/>
          <PencilSquareIcon stroke-width="2"  class="h-6 absolute inset-y-81 left-0 w-180"/>
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
          </tr>
          <tr>
          <TrashIcon stroke-width="2"  class="h-6 absolute inset-y-97 left-0 w-208"/>
          <PencilSquareIcon stroke-width="2"  class="h-6 absolute inset-y-97 left-0 w-180"/>
            <th class="px-6 py-5 border-solid border-t-0">Banana Split</th>
            <th class="px-6 py-5 border-solid border-t-0">12</th>
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
          </tr>
          <tr>
          <TrashIcon stroke-width="2"  class="h-6 absolute inset-y-113 left-0 w-208"/>
          <PencilSquareIcon stroke-width="2"  class="h-6 absolute inset-y-113 left-0 w-180"/>
            <th class="px-6 py-5 border-solid border-t-0">Lorem Liquorice</th>
            <th class="px-6 py-5 border-solid border-t-0">15</th>
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
          </tr>
          <tr>
          <TrashIcon stroke-width="2"  class="h-6 absolute inset-y-129 left-0 w-208"/>
          <PencilSquareIcon stroke-width="2"  class="h-6 absolute inset-y-129 left-0 w-180"/>
            <th class="px-6 py-5 border-solid border-t-0">Ipsum Candy</th>
            <th class="px-6 py-5 border-solid border-t-0">25</th>
            <th class="px-6 py-5 border-solid border-t-0">Mango Chip</th>
            <th class="px-6 py-5 border-solid border-t-0">59</th>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
  
  export default InventoryTable;