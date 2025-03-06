import { BrowserRouter, Routes, Route } from "react-router-dom";

import Employee from "./pages/Employee"
import Transaction from "./pages/Transaction"
import Inventory from "./pages/Inventory"
import Supplier from "./pages/Supplier"
import Restock from "./pages/Restock"
import Login from "./pages/Login"
import Home from "./pages/Home"
import AddSupplier from "./pages/AddSupplier"
import EditSupplier from "./pages/EditSupplier"
import AddEmployee from "./pages/AddEmployee"

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
        <Route path="add_supplier" element={<AddSupplier />} />
        <Route path="edit_supplier" element={<EditSupplier />} />
        <Route path="add_employee" element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
