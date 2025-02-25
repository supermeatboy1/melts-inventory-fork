
const LowStockTable = () => {
  return (
    <div class="border border-solid border-orange-400/40 border-2 rounded-md w-full">
    <table class="text-left rtl:text-right w-full">
      <thead class="text-gray-600 bg-orange-300/30">
        <tr>
          <th class="px-6 py-3">
            Product
          </th>
          <th class="px-6 py-3">
            Items
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="px-6 py-5 border-solid border-orange-400/40 border-t-2">Durian Candy</th>
          <th class="px-6 py-5 border-solid border-orange-400/40 border-t-2">10</th>
        </tr>
        <tr>
          <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Mango Chip</th>
          <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">59</th>
        </tr>
        <tr>
          <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Banana Split</th>
          <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">12</th>
        </tr>
        <tr>
          <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Lorem Liquorice</th>
          <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">15</th>
        </tr>
        <tr>
          <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Ipsum Candy</th>
          <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">25</th>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default LowStockTable;
