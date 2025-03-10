import { BrowserRouter, Routes, Route } from "react-router-dom";

import Employee from "./pages/Employee"
import Transaction from "./pages/Transaction"
import Inventory from "./pages/Inventory"
import Supplier from "./pages/Supplier"
import Restock from "./pages/Restock"
import Login from "./pages/Login"
import Home from "./pages/Home"
import SupplierDetail from "./pages/SupplierDetail"
import AddEmployee from "./pages/AddEmployee"
import InventoryDetails from "./pages/InventoryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route index element={<Login />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="employee" element={<Employee />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="supplier" element={<Supplier />} />
        <Route path="restock" element={<Restock />} />
        <Route path="supplier_detail" element={<SupplierDetail />} />
        <Route path="add_employee" element={<AddEmployee />} />
        <Route path="inventory_details" element={<InventoryDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
