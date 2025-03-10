import { useState } from "react";
import { createPortal } from "react-dom";

const EditItems = ({ onClose }) => { 
    const [formData, setFormData] = useState({
        product: '',
        category: '',
        price: '', 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose(); 
    };

    return createPortal(
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800/40 z-100"> 
            <div className="bg-amber-100 p-6 rounded-lg w-1/4"> 
                <h2 className="text-2xl font-bold mb-4 text-center">Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Product</label>
                        <input
                            type="text"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="addedItems"
                            value={formData.addedItems}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
                            required
                        />
                    </div>
                    <div className="flex justify-center mt-6 gap-2 w-full">
                        <button type="button" onClick={onClose} className="bg-[#CB3F3F] text-white p-2 w-full rounded">Cancel</button>
                        <button type="submit" className="bg-orange-400/70 text-white p-2 w-full rounded">Save</button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}

export default EditItems;
